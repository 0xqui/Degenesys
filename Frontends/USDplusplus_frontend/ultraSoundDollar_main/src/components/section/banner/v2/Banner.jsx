import { useModal } from "../../../../utils/ModalContext";

import Button from "../../../../common/button";
import logo from "../../../../assets/images/garybucks.webp";

import BannerStyleWrapper from "./Banner.style";
import { useEffect, useState } from "react";
import { totalSupply } from '../../../../utils/web3mint';


const Banner = () => {
  const { mintModalHandle, connectWalletModalHanlde, account } = useModal();


  const [remaining, setRemaining] = useState(0);

  useEffect(() =>{
    const calculateRemainingItems = async () => {
      let totaltMintedItems = await totalSupply();
      setRemaining(totaltMintedItems);
    }

    calculateRemainingItems();
  },[])

  return (
    <BannerStyleWrapper className="Degenesys_v2_baner_sect" id="home">
      <div className="container">
        <div className="Degenesys_v2_baner_content">
          <div className="USDplus_title">
            <h3>
              $USD+
            </h3>
            <h2>
              Ultra Sound Dollar
            </h2>
          </div>
          <div className = "garyBucks">
            <img className="banner-logo"
            src = {logo} 
            alt="main logo"

            />
          
          </div>  

          <div className="Degenesys_v2_timer">
          </div>
          <div className="Degenesys_v2_baner_buttons">
            
            <a href="https://www.velocimeter.xyz/swap" target="_blank" rel="noopener noreferrer">

              <Button lg variant="buy">
                {" "}
                Buy USD++
              </Button> 
            </a>
              <br></br>
              

          </div>
          <div className="coin-info">
            <span>Pegged to hopes and dreams</span>
              <span class="focus-text"> <span className="midtext">1 Ultra-Sound Decentralised Memecoin </span> <br></br><span className="vs">vs</span><br></br> {" "}
                <span className="highlighted">1 inflationary US Dollar </span>
              </span>
          </div>

        </div>
      </div>
    </BannerStyleWrapper>
  );
};

export default Banner;
