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

      // Compute the current time, in seconds, normalized to the interval [0, 5].
      float time = clamp(iTime / 1.5, 0.0, 1.0);
  
      // Compute the vertical position of the current pixel, normalized to [0, 1].
      float posY = gl_FragCoord.y / iResolution.y;

      // Compute the visibility of the current pixel based on its position and the time.
      // At t=0, only the top 10% of the screen is visible, at 10% opacity.
      // As t increases to 1, the visible area spreads down the screen, with increasing opacity.
      float gradpos = smoothstep(1.5, 0.5, time);
      float visibility = smoothstep(0.0, time, gradpos - posY);

      vec2 uv = vUv;
      vec4 logo = texture2D(iChannel0, uv);

      // Neon glow effect parameters
      float radius = 2.5;
      float speed = 1.0;
      float intensity = 0.4;

      // Calculate distance to logo's color
      float dist = distance(logo.rgb, vec3(0.0));
    
      // Create an animated sine wave based on time and position
      float x = iTime + dist * 5.0;
      float wave = abs(abs(sin(pow(x*1.1, 1.1))) - cos(pow(x, 1.0))) * 0.5 * abs(sin(x));

      // Calculate glow based on the logo's color and the sine wave
      vec4 glow = wave * logo * intensity;

      // Adjust the amount of glow based on the distance to the logo's color
      glow *= smoothstep(0.95, 0.1, dist / radius);

      // Blend logo and glow
      float uMixFactor = abs((sin(iTime) * 0.3) + 0.2);  // Sine wave varies between -1 and 1, so adjust to 0.2 to 0.6

      vec4 color = mix(logo, glow, uMixFactor);  

      gl_FragColor = vec4(color);
      gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.0), visibility);
      gl_FragColor.a = visibility;
      float t = iTime;
  
      if (t < 2.0) { // Change this to adjust when the fade in ends
          float fadeIn = smoothstep(0.0, 1.0, iTime/2.0); // Change 3.0 to adjust the speed of the fade in
          gl_FragColor = gl_FragColor * vec4(fadeIn, fadeIn, fadeIn, fadeIn);
      }
  

    }
  `,
};
