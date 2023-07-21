import styled from 'styled-components';

const PageHeaderStyleWrapper = styled.div`

  background-color: #85BB65;
  font-family: 'Press Start 2P', cursive;

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

  .highlighted {
    color: #E8E9C9;
  }

  .SECLists {
    padding-top: 20px;
    text-align: center;
    vertical-align: middle;


  }


  .SECListAmount {
    text-align: center;
    vertical-align: middle;
  }

  .contract {
    color: #E8E9C9;

    &: hover {
      color: #3E3E3C;
    }
  }

  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25px;

  }



  .logo {
    width: 15px;
    position: relative;
    top: -3px;
  }

  .number {
    color: #85BB65;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    gap: 10px;


  }


  .highlight {
    color: #E8E9C9;
    font-size: 14px;
  }

  .under_text {
    font-size 12px;
    text-align: center;

    .burn_fee {
      color: #E8E9C9;
    }
  }

  a {
    font-family: 'Press Start 2P';
    color: #85BB65;
    
  }

  .website_link {
    font-size: 12px;
    color: #6bdcfe;

    &:hover {
      color: #fe6ec7;
      font-size: 14px;
    }
  }

  .container {
    padding: 150px 20px;
  }

  .breadcrumb_area {
    text-align: center;
  }

  .breadcrumb_menu {
    color: #3E3E3C;
    font-size: 22px;
  }

  .breadcrumb_title {
    color: #228D57;
    font-family: "Press Start 2P";
    text-transform: uppercase;
    padding-top: 5px;
    padding-bottom: 20px;
  }

  .claim_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; // Added flex-wrap property
    margin-top: 20px;
  }

  .claim_box {
    background-color: #228D57;
    padding: 20px;
    border: 2px solid #E8E9C9;
    flex: 1;
    margin-right: 10px;
    margin-bottom: 20px; // Added margin-bottom to space boxes vertically
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }

  .claim_text {
    color: #E8E9C9;
    text-align: center;
    margin: auto;
    font-size: 26px;

  }

  .claim_textalt {
    color: #3E3E3C;
    text-align: center;
    margin: auto;

  }

  .menu_btn {
    background-color: #85BB65;
    border: 2px solid #E8E9C9;
    color: #3E3E3C;
    padding: 10px 10px;
    cursor: pointer;
    display: block;
    text-align: center;
    margin: 20px 10px;
    margin-bottom: -10px;


    transition: background-color 0.3s ease;


    &:hover {
      background-color: #3E3E3C;
      color: #E8E9C9;
      border: 2px solid #85BB65;
    }
  }

  .button_style {
    text-align: center;
  }
  

  @media only screen and (max-width: 1200px) {

    .buttons-container {
      display: flex;
      flex-direction: column;
  
    }

  }


`;

export default PageHeaderStyleWrapper;
