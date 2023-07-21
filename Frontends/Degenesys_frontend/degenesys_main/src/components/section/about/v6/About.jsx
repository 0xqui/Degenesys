import React, { useState, useEffect, useRef } from "react";

import AboutStyleWrapper from "./About.style";

import SectionTitle from "../../../../common/sectionTitle";

import data from "../../../../assets/data/about/aboutv1.js";

import thumb1 from '../../../../assets/images/nft/thumbnail1.webp';
import thumb2 from '../../../../assets/images/nft/thumbnail2.webp';
import thumb3 from '../../../../assets/images/nft/thumbnail6.webp';
import thumb4 from '../../../../assets/images/nft/thumbnail4.webp';
import thumb5 from '../../../../assets/images/nft/thumbnail5.webp';
import thumb6 from '../../../../assets/images/nft/thumbnail6.webp';
import thumb7 from '../../../../assets/images/nft/thumbnail7.webp';
import thumb8 from '../../../../assets/images/nft/thumbnail8.webp';
import thumb9 from '../../../../assets/images/nft/thumbnail9.webp';
import thumb10 from '../../../../assets/images/nft/thumbnail10.webp';
import thumb11 from '../../../../assets/images/nft/thumbnail11.webp';
import thumb12 from '../../../../assets/images/nft/thumbnail12.webp';
import thumb13 from '../../../../assets/images/nft/thumbnail13.webp';
import thumb14 from '../../../../assets/images/nft/thumbnail14.webp';
import thumb15 from '../../../../assets/images/nft/thumbnail15.webp';
import thumb16 from '../../../../assets/images/nft/thumbnail16.webp';
import thumb17 from '../../../../assets/images/nft/thumbnail17.webp';
import thumb18 from '../../../../assets/images/nft/thumbnail18.webp';
import thumb19 from '../../../../assets/images/nft/thumbnail19.webp';
import thumb20 from '../../../../assets/images/nft/thumbnail20.webp';
import thumb21 from '../../../../assets/images/nft/thumbnail21.webp';
import thumb22 from '../../../../assets/images/nft/thumbnail22.webp';
import thumb23 from '../../../../assets/images/nft/thumbnail23.webp';
import thumb24 from '../../../../assets/images/nft/thumbnail24.webp';
import thumb25 from '../../../../assets/images/nft/thumbnail25.webp';
import thumb26 from '../../../../assets/images/nft/thumbnail26.webp';
import thumb27 from '../../../../assets/images/nft/thumbnail27.webp';
import thumb28 from '../../../../assets/images/nft/thumbnail28.webp';

import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { ShaderMaterial, TextureLoader } from 'three';
import shader from './aboutShader';  // your shader code

import AboutBG from "../../../../assets/images/bg/about-us-v9.webp";

// create an array of image filenames
const images = Array.from({ length: 28 }, (_, i) => `thumbnail${i + 1}`);

const About = () => {
  class CustomShaderMaterial extends ShaderMaterial {
    constructor() {
      super({
        uniforms: {
          iTime: { value: 0 },
          iResolution:  { value: [1, 1] },
          iChannel0: { value: new TextureLoader().load(AboutBG) }, // your texture image
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
        <planeBufferGeometry args={[16, 9]} />
        <customShaderMaterial ref={material} attach="material" />
      </mesh>
    );
  };

  const AboutShaderImage = () => {
    return (
        <Canvas className="aboutShaderBgCanvas" style={{ position: 'absolute' }} gl={{ alpha: true, antialias: true, precision: "highp" }}>
          <ShaderPlane />
        </Canvas>
    )
};






  const { aboutDescription1, aboutDescription2, aboutDescription3 } = data;
  const thumbnails = [
    thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8,
    thumb9, thumb10, thumb11, thumb12, thumb13, thumb14, thumb15, thumb16,
    thumb17, thumb18, thumb19, thumb20, thumb21, thumb22, thumb23, thumb24,
    thumb25, thumb26, thumb27, thumb28
  ];
  const [index, setIndex] = useState(0);

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  const randomIndex = getRandomNumber(thumbnails.length);

  useEffect(() => {
    // Change the thumbnail images every 5 seconds
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % thumbnails.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [thumbnails.length]);

  return (
    <AboutStyleWrapper id="about">

      <div className="container">
      <AboutShaderImage/>
        <div className="row">
          <div className="col-md-6">
            <div className="about_left_content">
              <SectionTitle subtitle="NOVUS ORDO " />
              <p3>The Exponential Age</p3>
              <div className="v1_about_us_right_text">
                <p>{aboutDescription1}</p>
                <p>{aboutDescription2}</p>
                <p2>{aboutDescription3}</p2>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_right_content">
              {/* Display the current thumbnail image */}
              <div className="nft_thumb">
                <img src={thumbnails[(index + 17)%thumbnails.length]} alt="thumbnail" />
              </div>
              <div className="nft_thumb">
                <img src={thumbnails[(index + 13)%thumbnails.length]} alt="thumbnail" />
              </div>
              <div className="nft_thumb">
                <img src={thumbnails[(index + 7)%thumbnails.length]} alt="thumbnail" />
              </div>
              <div className="nft_thumb">
                <img src={thumbnails[(index + 3)%thumbnails.length]} alt="thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
};


export default About;
