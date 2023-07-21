import styled from "styled-components";

const SectionTitleWrapper = styled.div`
  position: relative;
  z-index: 1;

  h2 {
    font-family: "Press Start 2P";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #228D57;
    margin-bottom: 15px;
    padding-top: 20px;
    text-transform: uppercase;
    img {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: -1px;
    }

    .shape_left {
      margin-right: 9px;
    }

    span {
      margin-left: 9px;
    }
  }

  h3 {
    font-family: "Press Start 2P";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 67px;
    text-transform: uppercase;
    color: #E8E9C9;
    margin-bottom: 0;
  }
  h4 {
    font-family: "Bakbak One";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 67px;
    text-transform: uppercase;
    color: #fe6ec7;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 1199px) {
    h2 {
      margin-bottom: 10px;
    }

    h3 {
      font-size: 40px;
      line-height: 1.35;
    }
  }

  @media only screen and (max-width: 991px) {
    h2 {
      margin-bottom: 5px;
    }

    h3 {
      font-size: 34px;
    }
  }

  @media only screen and (max-width: 767px) {
    h2 {
      font-size: 16px;


      span {
        height: 10px;
      }
    }

    h3 {
      font-size: 30px;
      line-height: 45px;
    }
  }

  @media only screen and (max-width: 575px) {
    h3 {
      font-size: 25px;
    }
  }
`;

export default SectionTitleWrapper;
