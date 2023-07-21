import styled from "styled-components";
import AboutBG from "../../../../assets/images/bg/about-us-v9.webp";

import aboutmob from "../../../../assets/images/bg/about-us-v12-mobile.webp";


const AboutStyleWrapper = styled.section`
  background: url(${aboutmob});
  padding-top: 130px;
  position: relative;
  width: 100%;
  height: 100vh;


  .row {

  }


  .aboutShaderBgCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

  .about_title {
    position: relative;
    font-size: 48px;
    color: #ffffff;
    line-height: 67px;
    margin-bottom: 43px;
    text-transform: uppercase;
    z-index:1;
  }

  .about_left_content {
    position: relative;
    padding-right: 20px;
    z-index:1;

    p {
      font-family: "Bakbak One";
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 28px;
      color: rgba(255, 255, 255, 0.8);
      padding-bottom: 20px;
      z-index:1;
    }

    p2 {
      font-family: "Press Start 2P";
      font-style: italic;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #6bdcfe;
      padding-bottom: 20px;
      z-index:1;
    }
    p3 {
      font-family: "Bakbak One";
      font-style: italic;
      font-weight: 400;
      font-size: 28px;
      line-height: 48px;
      color: #fe6ec7;
      padding-bottom: 20px;
    }
    .bithu-btn {
      margin-top: 45px;
    }
  }

  .about_right_content {
    position: relative;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .nft_thumb {
    width: 48%;
    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1199px) {
    .about_left_content {
      p {
        font-size: 20px;
        line-height: 26px;
      }
    }
    .about_title {
      font-size: 38px;
      line-height: 53px;
      margin-bottom: 17px;
    }

    .about_right_content {

      .nft_thumb {
        width: 47%;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .about_left_content {
      p {
        font-size: 20px;
        line-height: 22px;
        margin-bottom: 10px;
      }
    }
    .about_title {
      font-size: 34px;
      line-height: 40px;
      margin-bottom: 17px;
    }
  }

  @media only screen and (max-width: 767px) {
    margin-top: -80px;
    background: url(${aboutmob});
    background-size: cover;
    background-position: center right;
    background-repeat: no-repeat;

    .about_right_content {
      margin-top: 30px;
      z-index: 999;
    }
  }
`;

export default AboutStyleWrapper;
