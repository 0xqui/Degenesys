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

      // Time-dependent transition
      float transition = 0.5 * (0.5 + pow(sin(iTime * 2.0), 3.0));

      // Define colors
      vec3 pink = vec3(254.0/255.0, 90.0/255.0, 179.0/255.0); 
      vec3 blue = vec3(97.0/255.0, 240.0/255.0, 254.0/255.0);

      // Read the logo texture
      vec4 logo = texture2D(iChannel0, uv);

      // Calculate distance from center
      float dist = distance(uv, vec2(0.5, 0.5));

      // Apply a soft radial gradient
      float gradient = smoothstep(0.0, 1.0, 1.0 - dist * 0.5);

      // Interpolate between colors based on transition value and gradient
      vec3 color = mix(blue, pink, transition * gradient);

      // Output to screen
      vec4 fragColor = vec4(color * logo.rgb, logo.a);

      float timeMod = mod(iTime, 30.0);
  
      if (timeMod < 5.0) { // fadeIn
          float fadeIn = smoothstep(0.0, 1.0, timeMod / 5.0);
          fragColor = (logo * (1.0 - fadeIn)) + (fadeIn * fragColor);
      } else if (timeMod > 25.0) { // fadeOut
          float fadeOut = 1.0 - smoothstep(1.0, 0.0, (timeMod - 25.0) / 5.0);
          fragColor = (logo * fadeOut) + ((1.0 - fadeOut) * fragColor);
      }

      gl_FragColor = fragColor;
    }
  `,
};
