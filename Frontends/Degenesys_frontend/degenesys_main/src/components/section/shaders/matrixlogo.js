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
    precision highp float;

    #define RAIN_SPEED 1.75 // Speed of rain droplets
    #define DROP_SIZE  3.0  // Higher value lowers, the size of individual droplets

    varying vec2 vUv;
    uniform sampler2D iChannel0;
    uniform float iTime;
    uniform vec3 iResolution;

    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }

    float rchar(vec2 outer, vec2 inner, float globalTime) {
	    vec2 seed = floor(inner * 4.0) + outer.y;
	    if (rand(vec2(outer.y, 23.0)) > 0.98) {
		    seed += floor((globalTime + rand(vec2(outer.y, 49.0))) * 3.0);
	    }
	    return float(rand(seed) > 0.5);
    }

    void main() {
        vec2 position = vUv;
        position.x /= iResolution.x / iResolution.y;
        float globalTime = iTime * RAIN_SPEED;
        float scaledown = DROP_SIZE;
        float rx = vUv.x / (40.0 * scaledown);
        float mx = 40.0*scaledown*fract(position.x * 30.0 * scaledown);
        vec4 result;

        // Compute the current time, in seconds, normalized to the interval [0, 5].
        float time = clamp(iTime / 1.5, 0.0, 1.0);
        // Compute the vertical position of the current pixel, normalized to [0, 1].
        float posY = vUv.y;
        // Compute the visibility of the current pixel based on its position and the time.
        float gradpos = smoothstep(1.5, 0.5, time);
        float visibility = smoothstep(0.0, time, gradpos - posY);

        if (mx > 12.0 * scaledown) {
            result = vec4(0.0);
        } else {
            float x = floor(rx);
            float r1x = floor(vUv.x / (15.0));
            float ry = position.y*600.0 + rand(vec2(x, x * 3.0)) * 100000.0 + globalTime* rand(vec2(r1x, 23.0)) * 120.0;
            float my = mod(ry, 15.0);
            if (my > 12.0 * scaledown) {
                result = vec4(0.0);
            } else {
                float y = floor(ry / 15.0);
                float b = rchar(vec2(rx, floor((ry) / 15.0)), vec2(mx, my) / 12.0, globalTime);
                float col = max(mod(-y, 24.0) - 4.0, 0.0) / 20.0;
                vec3 c = col < 0.8 ? vec3(                0.0, col / 0.8, 0.0) : mix(vec3(0.0, 1.0, 0.0), vec3(1.0), (col - 0.8) / 0.2);
                result = vec4(c * b, 1.0);
            }
        }
        position.x += 0.05;
        scaledown = DROP_SIZE;
        rx = vUv.x / (40.0 * scaledown);
        mx = 40.0*scaledown*fract(position.x * 60.0 * scaledown);

        if (mx > 12.0 * scaledown) {
            result += vec4(0.0);
        } else {
            float x = floor(rx);
            float r1x = floor(vUv.x / (12.0));
            float ry = position.y*700.0 + rand(vec2(x, x * 3.0)) * 100000.0 + globalTime* rand(vec2(r1x, 23.0)) * 120.0;
            float my = mod(ry, 15.0);
            if (my > 12.0 * scaledown) {
                result += vec4(0.0);
            } else {
                float y = floor(ry / 15.0);
                float b = rchar(vec2(rx, floor((ry) / 15.0)), vec2(mx, my) / 1.0, globalTime);
                float col = max(mod(-y, 24.0) - 4.0, 0.0) / 20.0;
                vec3 c = col < 0.8 ? vec3(0.0, col / 0.4, 0.0) : mix(vec3(0.0, 1.0, 0.0), vec3(1.0), (col - 0.8) / 0.2);
                result += vec4(c * b, 1.0);
            }
        }
        result = result * 0.5;
        vec4 logo = texture2D(iChannel0,vUv);
        result = result * length(logo.rgb) + 0.22 * vec4(0.,logo.g,0.,1.);
        if(result.b < 0.5)
            result.b = result.g * 0.2 ;
        gl_FragColor = result;
        gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.0), visibility);
        gl_FragColor.a = visibility;
        
    }
  `,
};
