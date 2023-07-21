import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { ShaderMaterial, TextureLoader } from 'three';
import shader from './glitch';  // your shader code

import { useEffect, useState, useRef } from "react";

import logo from "../../../../assets/images/nft/v2_banner_bG.webp";



const BannerImage = () => {

  class CustomShaderMaterial extends ShaderMaterial {
    constructor() {
      super({
        uniforms: {
          iTime: { value: 0 },
          iResolution:  { value: [1, 1] },
          iChannel0: { value: new TextureLoader().load(logo) }, // your texture image
        },
        vertexShader: shader.vertexShader,
        fragmentShader: shader.fragmentShader,
      });
    }
  }
  
  extend({ CustomShaderMaterial });

  const ShaderPlane = () => {
    const material = useRef();
    const { size, clock } = useThree();
    useFrame(() => {
      if (material.current) {
        material.current.uniforms.iResolution.value = [size.width, size.height];
        material.current.uniforms.iTime.value = clock.getElapsedTime();
      }
    });
    
    return (
      <mesh>
        <planeBufferGeometry args={[40, 10]} />
        <customShaderMaterial ref={material} attach="material" />
      </mesh>
    );
  };

  return (
    <Canvas gl={{ alpha: true, antialias: true, precision: "highp" }}>
        <ShaderPlane />
    </Canvas>
  );
};

export default BannerImage;
