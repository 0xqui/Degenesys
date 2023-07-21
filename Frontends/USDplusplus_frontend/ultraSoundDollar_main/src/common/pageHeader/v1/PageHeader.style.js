import styled from "styled-components";

const PageHeaderStyleWrapper = styled.div`
  background: #228D57;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 90px;

  .superscript { position: relative; top: -0.5em; font-size: 80%; }

  .promo {
    text-align: right;
    font-size: 28px;
    font-family: "Press Start 2P";
    color: #3E3E3C;
    white-space: nowrap;


    .subtext {
      font-size: 8px;
      color: #E8E9C9;

      a {
        font-size: 8px;
        color: #85BB65;
        font-family: "Press Start 2P";
      }
    }
  }

  .breadcrumb_area {
    font-family: "Bakbak One";

    .breadcrumb_menu {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      font-size: 28px;
      font-family: "Press Start 2P";
      color: #85BB65;
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        &:hover {
          color: #ffffff;
        }
      }
      span {
        color: #85BB65;
        margin: 0 10px;
      }
      img {
        margin-left: 15px;
      }
    }

    .breadcrumb_title {
      color: #E8E9C9;
      font-size: 38px;
      font-family: "Press Start 2P";
    }
  }

  .breadcrumb_form {
    display: flex;
    align-items: center;
    justify-content: end;

    form {
      position: relative;

      input,
      button {
        background: transparent;
      }

      input {
        width: 380px;
        padding: 11px 50px 11px 20px;
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.3);

        &:focus {
          outline: none;
        }
      }

      button {
        height: 100%;
        width: 50px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        right: 0;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.7);
        transform: translate(0, -50%);
        border: none;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 0px 0;

    .promo {
      text-align: left;
      font-size: 14px;
      font-family: "Press Start 2P";
      color: #3E3E3C;

    }

    .subtext {
      font-size: 6px;
    } 

    .breadcrumb_area {
      .breadcrumb_title {
        color: #E8E9C9;
        font-size: 32px;
        font-family: "Press Start 2P";
        position: relative;
        text-align: center;
        right: 0.5em;
      }
    }
  }
`;

export default PageHeaderStyleWrapper;
