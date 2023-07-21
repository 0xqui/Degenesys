
import { useModal } from "../../../../utils/ModalContext";
import { FaDiscord, FaTwitter, FaWallet } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

import logo from "../../../../assets/images/logo1.gif";

import MobileMenuStyleWrapper from "./MobileMenu.style";

const MobileMenu = ({ mobileMenuhandle }) => {
  const { walletModalHandle, metamaskModalHandle, account, disconnectWalletFromApp } = useModal();

  return (
    <MobileMenuStyleWrapper className="Degenesys_mobile_menu" id = "menu">
      <div className="Degenesys_mobile_menu_content">
        <div className="mobile_menu_logo">
          <img className="Degenesys_logo" src={logo} alt="Degenesys logo" />
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className="Degenesys_mobile_menu_list">
          <ul>
            <li className="mobile_menu_close_button">
              <a href="#home" onClick={() => mobileMenuhandle()} >Mint</a> 
            </li>
            <li className="mobile_menu_hide">
              <a href="#about" onClick={() => mobileMenuhandle()} >About</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#roadmap" onClick={() => mobileMenuhandle()} >Roadmap</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#faq" onClick={() => mobileMenuhandle()} >FAQ</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="https://usd.zone/airdrop" >Ultra Sound Dollar</a>
            </li>
          </ul>
        </div>
        <div className="mobile_menu_social_links">
          <a href="https://twitter.com/DegenesysNFT" aria-label="follow us on twitter button">
            <FaTwitter />
          </a>
          <a href="https://discord.gg/GFajQmAB67">
            <FaDiscord />
          </a>
        </div>
          
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
