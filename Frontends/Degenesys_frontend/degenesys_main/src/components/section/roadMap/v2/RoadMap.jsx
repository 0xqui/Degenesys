import SectionTitle from "../../../../common/sectionTitle";
import RoadMapItem from "./RoadMapItem";
//import roadMapBgShape from "../../../../assets/images/nft/v2_roadmap_bg_shape1.webp";
import data from "../../../../assets/data/roadMap/roadMapV1";
import RoadMapStyleWrapper from "./RoadMap.style";
//import { useRef,useEffect } from "react";
//import { useInView } from 'react-intersection-observer';

import Abouttest from "../../../../assets/images/bg/roadmap-v11.webp";

import { useState, useEffect, useRef } from 'react';


import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { ShaderMaterial, TextureLoader } from 'three';
import shader from '../../shaders/roadmapShader';  // your shader code

const RoadMap = () => {
  // const {ref: myRef, inView: myElementIsVisible} = useInView(options);
  
  // const myRef = useRef();
  // const [myElementIsVisible,setMyElementIsVisible] = useState();
  
  // useEffect(() => {
  //   const observer = new IntersectionObserver ((entries) => {
  //     const entry = entries [0];
  //     setMyElementIsVisible(entry.isIntersecting)
  //   })
  //   observer.observe(myRef.current)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setDimensions(ref.current.getBoundingClientRect());
    }
  }, [ref]);

  class CustomShaderMaterial extends ShaderMaterial {
    constructor() {
      super({
        uniforms: {
          iTime: { value: 0 },
          iResolution:  { value: [1, 1] },
          iChannel0: { value: new TextureLoader().load(Abouttest) }, // your texture image
        },
        vertexShader: shader.vertexShader,
        fragmentShader: shader.fragmentShader,
      });
    }
  }
  
  extend({ CustomShaderMaterial });

  const ShaderPlane = () => {
    const material = useRef();
    const { size, clock, viewport } = useThree();
  
    // Calculate normalized shift
    const shiftY = -4. / viewport.height;
  
    useFrame(() => {
      if (material.current) {
        material.current.uniforms.iResolution.value = [size.width, size.height];
        material.current.uniforms.iTime.value = clock.getElapsedTime();
      }
    });
    
    return (
      <mesh position={[0, shiftY, 0]}>
        <planeBufferGeometry args={[viewport.width, viewport.height]} />
        <customShaderMaterial ref={material} attach="material" />
      </mesh>
    );
  };
  

  const RoadmapShaderImage = () => {
    return (
        <Canvas className="roadmapShaderBgCanvas" style={{ position: 'absolute' }} gl={{ alpha: true, antialias: true, precision: "highp" }}>
          <ShaderPlane />
        </Canvas>
    )
};
  return (
    <RoadMapStyleWrapper id="roadmap">

      <div className="container">
        <SectionTitle
          isCenter={true}
          title="2023: The Year of the DGEN"
          subtitle="Our Goals"
          className="text-center"
        />
        <div className="v2_roadmap_card_list">
          <div className="v2_roadmap_divider">
          </div>
          <div className="row">
            {data?.map((item, i) => (
              <div key={i} className="col-md-6">
                <RoadMapItem id={i} {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Degenesys_v2_roadmap_mass_gard">
      </div>
    </RoadMapStyleWrapper>
  );
};

export default RoadMap;
