import glsl from 'glslify';

export default {
  vertexShader: glsl`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: glsl`
  varying vec2 vUv;
  uniform float iTime;
  uniform vec2 iResolution;
  uniform sampler2D iChannel0;

  float opSmoothUnion( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h);
  }

  float sdSphere( vec3 p, float s ) {
    return length(p)-s;
  } 

  float map(vec3 p) {
    float d = 2.0;
    const float PI = 3.1415926535897932384626433832795;
    for (int i = 0; i < 24; i++) {
      float fi = float(i);
      float time = iTime * (fract(fi * 412.531 + 0.513) - 0.5) * 2.0;
      d = opSmoothUnion(
        sdSphere(p + sin(time + fi * vec3(52.5126, 64.62744, 632.25)) * vec3(24.5, 1.0, 1.0), mix(0.1, 1.2, fract(fi * 412.531 + 0.5124))),
        d,
        0.4
      );
    }
    return d;
  }

  vec3 calcNormal( in vec3 p ) {
    const float h = 1e-6; // or some other value
    const vec2 k = vec2(1,-1);
    return normalize( k.xyy*map( p + k.xyy*h ) + 
                      k.yyx*map( p + k.yyx*h ) + 
                      k.yxy*map( p + k.yxy*h ) + 
                      k.xxx*map( p + k.xxx*h ) );
  }

  void main() {
    vec2 uv = vUv;
    
    vec3 rayOri = vec3((uv - 0.5) * vec2(iResolution.x/iResolution.y, 1.0) * 6.0, 3.0);
    vec3 rayDir = vec3(0.0, 0.0, -1.0);
    
    float depth = 0.0;
    const float PI = 3.1415926535897932384626433832795;

    vec3 p;
    
    for(int i = 0; i < 28; i++) {
      p = rayOri + rayDir * depth;
      float dist = map(p);
      depth += dist;
      if (dist < 1e-6) {
        break;
      }
    }
    float speed = 0.25 + 0.75 * (cos(iTime * 2.0 * PI / 30.0) + 1.0) / 2.0;

    depth = min(1.0, depth);
    vec3 n = calcNormal(p);

    float b = max(0.0, dot(n, vec3(0.577)));
    vec3 col = (0.5 + 0.5 * cos((b + speed * 0.2) + uv.xyx * 4.0 + vec3(0,2,4))) * (0.85 + b * 0.35);
    col *= exp( -depth * 0.1 );

    vec4 texColor = texture(iChannel0, uv);
    texColor.rgb *= 1.0; // Increase the brightness of the texture

    // Create a glow factor based on the depth
    float glowFactor = 4.0 - clamp(depth / 6.0, 0.0, 1.0); // normalize the depth to [0, 1]
    texColor.rgb *= glowFactor; // Increase the brightness based on the glow factor

    vec3 backgroundColor = vec3(0.0, 0.0, 0.0); // Adjust this to your desired background color

    // Tweak the mask factor to use the depth and the size of the object
    float mask = smoothstep(0.5, 1.0, texColor.a) * smoothstep(0.0, 0.5, glowFactor);

    col = mix(backgroundColor, col, mask); // Blend the color based on the mask

    // maximum thickness is 2m in alpha channel
    gl_FragColor = vec4(col, mask);
    float t = iTime;
  
    if (t < 2.0) { // Change this to adjust when the fade in ends
        float fadeIn = smoothstep(0.0, 1.0, iTime/2.0); // Change 3.0 to adjust the speed of the fade in
        gl_FragColor = gl_FragColor * vec4(fadeIn, fadeIn, fadeIn, fadeIn);
    }
  }
`
};