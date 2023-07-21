import styled from "styled-components";

const BannerStyleWrapper = styled.section`

  background: #85BB65;
  max-width: 100%;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  padding: 200px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

    @keyframes flicker {
      0% { text-shadow: 0 0 4px #ff6d00, 0 0 14px #ff6d00, 0 0 24px #ff6d00, 0 0 44px #ff6d00; }
      20% { text-shadow: none; }
      30% { text-shadow: 0 0 4px #ff6d00, 0 0 14px #ff6d00, 0 0 24px #ff6d00, 0 0 44px #ff6d00; }
      50% { text-shadow: none; }
      60% { text-shadow: 0 0 4px #ff6d00, 0 0 14px #ff6d00, 0 0 24px #ff6d00, 0 0 44px #ff6d00; }
      80% { text-shadow: none; }
      100% { text-shadow: 0 0 4px #ff6d00, 0 0 14px #ff6d00, 0 0 24px #ff6d00, 0 0 44px #ff6d00; }
  }

  .Fire {
      color: #E8E9C9;
      animation: flicker 3s infinite;
      font-size: 24px;
  }

  .burned_supply {
    color: #3E3E3C;
    font-size: 24px;

  }

  .burn_fee {
    padding-top: 10px;
  }

  .number_alt {
    color: #228D57;
    padding: 10px;
  }


  .Degenesys_v2_baner_content {
    margin-top: 220px;
    position: relative;
    
    .garyBucks {
      margin-top: -270px;
      position: relative;
      text-align: center;
    }

    .USDplus_title {
      position: relative;
      top: -300px;

      h2 {
        font-family: "Press Start 2P";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
        color: #228D57;
        margin-bottom: 29px;
        position: relative;
   
        z-index: 2;
        span {
          color: #ff004c;
        }
      




    }
    .banner-emot {
      display: block;
      text-align: center;
      margin-bottom: 50px;
    }

    }
    h3 {
      font-family: "Press Start 2P";
      font-style: normal;
      font-size: 80px;
      line-height: 60px;
      text-align: center;
      text-transform: uppercase;
      color: #E8E9C9;
      position: relative;
      margin-bottom: 15px;
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
        color: #E8E9C9;
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
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      button {
        margin: 0 auto;
        width: 100%;
        min-width: 150px;
      }
    }
    
    .coin-info {
      display: flex;
      flex-direction: column;
      margin-top: 41px;
      span {
        font-family: "Press Start 2P";
        font-size: 22px;
        line-height: 46px;
        text-transform: uppercase;
        color: #3E3E3C;
        text-align:center;

        & .highlighted {
          color: #228D57;
          font-size: 18px;
        }
        & .vs {
          color: #E8E9C9;
        }
        & .midtext {
          color: #228D57;
        }
      }
    }

    .focus-text {
      color: #3E3E3C;
    }





    .v2_baner_stars {
      padding-top: 80px;
      top: -80px;
      height: 499px;
    }
  }









  @media only screen and (max-width: 1400px) {
    padding: 160px 0px;
    padding-bottom: 80px;

    .Degenesys_v2_baner_content {
      .banner-logo {
        right:0px;
        top: 0px;
      }
      
    }
  }





  @media only screen and (max-width: 1190px) {
    padding: 160px 0px;
    padding-bottom: 80px;

    .Degenesys_v2_baner_content {
      .banner-logo {
        right: 0px;
        top: -100px;
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
        font-size: 38px;
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
