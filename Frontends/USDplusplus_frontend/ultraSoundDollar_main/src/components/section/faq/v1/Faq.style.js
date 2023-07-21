import styled from "styled-components";

const FAQStyleWrapper = styled.section`
background: #228D57;
background-size: cover;
background-repeat: no-repeat;

  

  padding-bottom: 80px;
  padding-top: 30px;

  .Degenesys_faq_content {
    max-width: 770px;
    width: 100%;
    margin: auto;
    position: relative;

    .text-center {
     color: #228D57;

    }
  }

  .Degenesys_faq_questions {
    margin-top: 57px;
    position: relative;


    .faq_questions {

      position: relative;
      z-index: 1;

      .accordion__item + .accordion__item {

        margin-top: 10px;
      }
    }
  }
  .accordion__item {
    border-radius:40px;
    background: #85BB65;
  }
  .accordion__header {
    h5 {
      display: flex;
      align-items: center;
      height: 76px;
      margin-bottom: 0px;
      padding: 0 29px;
      color: #3E3E3C;
      font-size: 24px;
      line-height: 34px;
      text-transform: none;
    }
  }

  .accordion__body {
    p {
      padding: 0px 48px 24px 29px;
      font-family: 'Press Start 2P';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 28px;
      color: #3E3E3C;
      margin-bottom: 0px;
      max-width: 100%;
    }
  }


  @media only screen and (max-width: 991px) {
    .accordion__header {
      h5 {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .accordion__header {
      h5 {
        font-size: 20px;
        line-height: 25px;
      }
    }

    .accordion__body {
      p {
        font-size: 14px;
        line-height: 25px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .accordion__header {
      h5 {
        font-size: 18px;
      }
    }
  }
`;

export default FAQStyleWrapper;
