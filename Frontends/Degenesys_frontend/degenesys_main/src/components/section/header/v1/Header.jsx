import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../../assets/images/newlogov6.webp"; 


import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { canto, arbitrum, mainnet, polygon, polygonMumbai } from 'wagmi/chains'

import { Web3Button} from "@web3modal/react";


import Portal from "../../../section/Portal";


const chains = [canto, arbitrum, mainnet, polygon, polygonMumbai]
const projectId = process.env.REACT_APP_NEXT_PUBLIC_PROJECT_ID;

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
  defaultChain: canto
  
})
const ethereumClient = new EthereumClient(wagmiClient, chains)


const Header = () => {
  console.log("Project ID:", process.env.REACT_APP_NEXT_PUBLIC_PROJECT_ID);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  return (
    <NavWrapper className="Degenesys_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="Degenesys_menu_sect">
          <div className="Degenesys_menu_left_sect">
            <div className="logo" width="298" height="78">
              <a href="/">
                <img src={logo} alt="Degenesys nft logo"/>
                
              </a>
            </div>
          </div>
          <div className="Degenesys_menu_right_sect Degenesys_v1_menu_right_sect">
            <div className="Degenesys_menu_list">
              <ul>
                <li>
                  <a href="#home">Mint</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#roadmap">Roadmap</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="https://usd.zone/">USD++</a>
                </li>
              </ul>
            </div>
            <div className="Degenesys_menu_btns">


              <a href="https://discord.gg/GFajQmAB67" aria-label="join discord button">
              <Button sm variant="test" className="join_btn">
                <FaDiscord /> Join
              </Button>
              </a>
              
              <Web3Button sm variant="mint" className="connect_btn" icon="show" label="Connect Wallet" />
            
              <button className="menu_btn" onClick={handleMobileMenu} aria-label="mobile menu button">
                <MdNotes />
              </button>
            
            </div>

            <Portal>
              <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
            </Portal>
          </div>
        </div>
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
