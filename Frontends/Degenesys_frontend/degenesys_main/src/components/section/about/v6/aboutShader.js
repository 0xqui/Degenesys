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

    varying vec2 vUv;
    uniform sampler2D iChannel0;
    uniform float iTime;
    uniform vec3 iResolution;

    void main() {
      vec2 uv = vUv;
      vec4 logo = texture2D(iChannel0, uv);

      // Neon glow effect parameters
      float radius = 1.5;
      float speed = 5.0;
      float intensity = 0.25;

      // Calculate distance to logo's color
      float dist = distance(logo.rgb, vec3(0.0));
    
      // Create an animated sine wave based on time and position
      float x = iTime + dist * 5.0;

      float wave = abs(2.8*sin(x*0.5) - 1.5*cos(x));

      // Calculate glow based on the logo's color and the sine wave
      vec4 glow = wave * logo * intensity;



      // Blend logo and glow
      float uMixFactor = 1.0;

      vec4 color = mix(logo, glow, uMixFactor);  

      gl_FragColor = vec4(color);
      
      float t = iTime;
  
      if (t < 2.0) { // Change this to adjust when the fade in ends
          float fadeIn = smoothstep(0.0, 1.0, iTime/2.0); // Change 3.0 to adjust the speed of the fade in
          gl_FragColor = gl_FragColor * vec4(fadeIn, fadeIn, fadeIn, fadeIn);
      }
    }
  `,
};
