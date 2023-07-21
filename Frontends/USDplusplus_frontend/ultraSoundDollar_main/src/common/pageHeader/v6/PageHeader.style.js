import styled from 'styled-components';

const PageHeaderStyleWrapper = styled.div`

  background-color: #85BB65;
  font-family: 'Press Start 2P', cursive;

  .balances {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .logo {
    margin-left: 2px;
    width: 15px;
    position: relative;
    top: -1px;
  }

  .number {
    color: #85BB65;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .burn_fee {
    padding-top: 10px;
  }

  .input-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
  }

  
  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25px;

  }

  .under_text {
    font-size 12px;
    text-align: center;
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
    font-size: 22px;

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
    padding: 10px 20px;
    cursor: pointer;
    display: block;
    text-align: center;
    margin: 20px auto;
    margin-bottom: -10px;

    transition: background-color 0.3s ease;


    &:hover {
      background-color: #3E3E3C;
      color: #E8E9C9;
    }
  }

  .button_style {
    text-align: center;
  }
`;

export default PageHeaderStyleWrapper;
