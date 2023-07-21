import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { ShaderMaterial, TextureLoader } from 'three';
import shader from '../../../components/section/shaders/glitch';  // your shader code

import matrixbgimage from "../../../assets/images/test.jpeg";
import { useState, useRef } from "react";
const modalAnimation = keyframes`${fadeIn}`;

class CustomShaderMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        iTime: { value: 0 },
        iResolution:  { value: [1, 1] },
        iChannel0: { value: new TextureLoader().load(matrixbgimage) }, // your texture image
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


const MintModalStyleWrapper = styled.div`
  &.modal_overlay {

    position: fixed;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    display: flex;
    justify-content: center;

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: #000;
      content: "";
      opacity: 0.92;
      backdrop-filter: blur(33px);
    }
  }

  .mint_modal_box {
    position: relative;
    width: 440px;
    margin: auto;
    top: 50px;
    animation: 1s ${modalAnimation}; /* ********* */

    &::before {
      backdrop-filter: blur(5px);
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: #ffffff;
      content: "";
    }
  }

  .mint_modal_content {
    height: 100%;
    width: 100%;
    background: #171e23;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 45px;
    padding-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .msg {
    p {
      font-family: "Press Start 2P";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 28px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
  .modal_header {
    h2 {
      font-family: "Press Start 2P";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      max-width: 280px;
      margin: auto;
      margin-bottom: 26px;
      padding-top:-50px;
    }

    button {
      background: transparent;
      border: none;
      outline: none;
      height: 45px;
      width: 45px;
      position: absolute;
      right: 0px;
      top: 0px;
      overflow: hidden;
      display: flex;
      justify-content: end;
      align-items: baseline;

      svg {
        margin-top: 5px;
        color: #ffffff;
      }

      &:before {
        content: "";
        background: rgba(255, 255, 255, 0.1);
        height: 150%;
        width: 150%;
        position: absolute;
        right: -35px;
        top: -35px;
        transform: rotate(45deg);
      }
    }
  }

  .mint_count_list {
    margin: 30px 0px;
    ul {
      padding: 0;
      margin: 0;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        h5 {
          font-family: "Press Start 2P";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          text-align: right;
          color: #ffffff;
          margin: 0;
        }

        .mint_quantity_sect {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 106px;
          width: 100%;
          height: 100%;


          button {
            border: none;
            outline: none;
            background: transparent;
            padding: 0px 2px;
            font-family: "Inter";
            font-style: normal;
            font-weight: 600;
            font-size: 26px;
            line-height: 22px;
            text-align: center;
            text-transform: uppercase;
            color: #6bdcfe;
          }

          input {
            max-width: 58px;
            width: 100%;
            border: none;
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            padding: 0px 19px;
            outline: none;
            font-family: "Press Start 2P";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
          }
        }
      }
    }
  }

  .modal_mint_btn {
    button {
      width: 100%;
      border-radius: 50px;
    }
  }
  }
`;

export default MintModalStyleWrapper;
