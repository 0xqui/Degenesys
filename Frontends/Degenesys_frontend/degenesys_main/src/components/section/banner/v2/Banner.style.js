import styled from "styled-components";

const BannerStyleWrapper = styled.section`
  
  width: 100%;
  height: 100vh;

  padding: 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .shaderBg {
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  }

  .Degenesys_v2_baner_content {
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;

    margin-top: -665px;
    position: relative;

    .banner-logo {
      position: relative;
      top: -100px;
      right:-100px;



    }
    .banner-emot {
      display: block;
      text-align: center;
      margin-bottom: 50px;
    }
    h2 {
      font-family: "Monoton";
      font-style: normal;
      font-weight: 400;
      font-size: 60px;
      line-height: 60px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 29px;
      position: relative;
      top: -100px;
      z-index: 2;
      span {
        color: #ff004c;
      }
    }
    h3 {
      font-family: "Press Start 2P";
      font-display: block;
      font-style: normal;
      font-size: 40px;
      line-height: 65px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      position: relative;
      margin: 0;
      z-index: 2;
    }

    span {
      display: inline-block;
    }

    .Degenesys_v2_timer {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 15px;
      z-index: 2;
      h4 {
        font-size: 40px;
        line-height: 65px;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
        margin: 0;
      }
    }

    /* timer  */
    .root-react-component-countdown-timer {
      line-height: 65px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      .countBox {
        font-family: "Bakbak One";
        font-size: 40px !important;
        display: flex;
        flex-direction: row-reverse;
        column-gap: 10px;

        .split{
          color: rgba(255, 255, 255, 0.2);
        }
      }
    }

    .Degenesys_v2_baner_buttons {
      margin-top: 41px;
      button {
        margin: 0 auto;
      }
    }
    
    .coin-info {
      display: flex;
      flex-direction: column;
      margin-top: 37px;
      span {
        font-family: "Press Start 2P";
        font-size: 14px;
        line-height: 36px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.8);
        text-align:center;

        & .highlighted {
          color: #6bdcfe;
        }
      }
    }

    .focus-text {
      color: #fe6ec7;
    }





    .v2_baner_stars {
      padding-top: 80px;
      top: -80px;
      height: 499px;
    }
  }






  @media only screen and (max-width: 1536px) {
    padding: 0px 0px;



    .Degenesys_v2_baner_content {

      .banner-logo {

      }
      h2 {
        font-size: 50px;
        position: relative;
        top: 0px;
      }

      h3 {
        font-size: 35px;
        position: relative;
        top: 0px;
      }
      .coin-info {
        
        position: relative;
        top: 0px;
        span {font-size: 14px;}
      }
      .Degenesys_v2_baner_buttons {
        margin-top: 41px;
        button {
          position: relative;
          top: 0px;
          margin: 0 auto;
        }                  
    }
  }


  @media only screen and (max-width: 1400px) {
    padding: 0px 0px;



    .Degenesys_v2_baner_content {

      .banner-logo {
        right:0px;

      }
      
    }
  }





  @media only screen and (max-width: 1190px) {
    padding: 0px 0px;


    .Degenesys_v2_baner_content {
      .banner-logo {
        right: 0px;
        top: 0px;
        margin-bottom: 100px;
      }
      h2 {
        font-size: 50px;
        position: relative;
        top: 0px;
      }

      h3 {
        font-size: 35px;
        position: relative;
        top: 0px;
      }
      .coin-info {
        
        position: relative;
        top: 0px;
        span {font-size: 14px;}
      }
      .Degenesys_v2_baner_buttons {
        margin-top: 41px;
        button {
          position: relative;
          top: 0px;
          margin: 0 auto;
        }

      .Degenesys_v2_timer {
        h4 {
          font-size: 35px;
        }
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .Degenesys_v2_baner_content {
      .banner-logo {
        right: 0px;
      }
      h2 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      h3 {
        font-size: 21px;
      }

      .Degenesys_v2_timer {
        h4 {
          font-size: 21px;
        }
      }
    }

    .root-react-component-countdown-timer {
      .countBox {
        font-size: 21px !important;
      }
    }
  }
`;

export default BannerStyleWrapper;
