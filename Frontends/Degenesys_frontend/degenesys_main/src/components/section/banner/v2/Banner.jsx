import { useModal } from "../../../../utils/ModalContext";
import Counter from "../../../../common/counter";
import Button from "../../../../common/button";
import bannerImg from "../../../../assets/images/nft/v2_banner_bG.webp";

import logo from "../../../../assets/images/dgen-logo.webp";

import BannerStyleWrapper from "./Banner.style";
import { useEffect, useState, useRef } from "react";
import { totalSupply } from '../../../../utils/web3mint';

import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { ShaderMaterial, TextureLoader } from 'three';
import shader from '../../shaders/glitch';  // your shader code


const Banner = () => {

  class CustomShaderMaterial extends ShaderMaterial {
    constructor() {
      super({
        uniforms: {
          iTime: { value: 0 },
          iResolution:  { value: [1, 1] },
          iChannel0: { value: new TextureLoader().load(bannerImg) }, // your texture image
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

  const ShaderImage = () => {
    return (
      <Canvas className="shaderBg" gl={{ alpha: true, antialias: true, precision: "highp" }}>
        <ShaderPlane />
      </Canvas>
    )
  };
  
  
  const { mintModalHandle, connectWalletModalHanlde, account } = useModal();


  const [remaining, setRemaining] = useState(0);

  useEffect(() =>{
    const calculateRemainingItems = async () => {
      let totalMintedItems = await totalSupply();
      setRemaining(totalMintedItems);
    }

    calculateRemainingItems();
  },[])

  return (
    <BannerStyleWrapper className="Degenesys_v2_baner_sect" id="home">
      <ShaderImage />
      <div className="container">
        <div className="Degenesys_v2_baner_content">
        <img className="banner-logo"
          src = {logo} 
          alt="main logo"
          width="1116" height="356"
          />
          
          <h3>
            <span className="count">
              <Counter end={remaining} duration={7} />
            </span>{" "}
            / 500 Minted
          </h3>
          <div className="Degenesys_v2_timer">
          </div>
          <div className="Degenesys_v2_baner_buttons text-center">

            <Button lg variant="mint" // onClick={() => mintModalHandle()} 
            >
              {" "}
              Mint soon™
            </Button> 


          </div>
          <div className="coin-info">
            <span>Max 3 NFTs per txn</span>
              <span className="focus-text"> Mint Price : {" "}
                <span className="highlighted">200 Canto</span>
              </span>
          </div>

        </div>
      </div>
    </BannerStyleWrapper>
  );
};

export default Banner;
