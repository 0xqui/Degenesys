
import { useModal } from "../../../../utils/ModalContext";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

import logo from "../../../../assets/images/garybucks.webp";

import { isMetaMaskInstalled } from '../../../../config';
import MobileMenuStyleWrapper from "./MobileMenu.style";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { canto } from 'wagmi/chains'



const chains = [canto]
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
  defaultChain: canto,
  privacyPolicyUrl: 'https://example.com/privacy-policy'
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

const MobileMenu = ({ mobileMenuhandle }) => {
  const { walletModalHandle, metamaskModalHandle, account, disconnectWalletFromApp } = useModal();




  const substr = (str, n) =>{
    return str.length > n ? str.substr(0, n -1) : str;
  }

  const handleWalletConnect = async () =>{
    if(!isMetaMaskInstalled()){
      metamaskModalHandle();
    }else{
      walletModalHandle();
    }
  }
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
              <a href="/" onClick={() => mobileMenuhandle()} >Home</a> 
            </li>
            <li className="mobile_menu_close_button">
              <a href="/airdrop" onClick={() => mobileMenuhandle()} >Airdrop</a> 
            </li>
            <li className="mobile_menu_hide">
              <a href="/burn" onClick={() => mobileMenuhandle()} >Burn Functions</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#about" onClick={() => mobileMenuhandle()} >About</a>
            </li>

            <li className="mobile_menu_hide">
              <a href="#faq" onClick={() => mobileMenuhandle()} >FAQ</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="https://www.velocimeter.xyz/swap" onClick={() => mobileMenuhandle()} >BUY</a>
            </li>
          </ul>
        </div>
        <div className="mobile_menu_social_links">
          <a href="https://twitter.com/UltraSoundDolla" aria-label="follow us on twitter button">
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
