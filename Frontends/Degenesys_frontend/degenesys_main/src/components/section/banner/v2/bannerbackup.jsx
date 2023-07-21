import { useModal } from "../../../../utils/ModalContext";
import Counter from "../../../../common/counter";
import Button from "../../../../common/button";
import logo from "../../../../assets/images/dgen-logo.webp";

import BannerStyleWrapper from "./Banner.style";
import { useEffect, useState } from "react";
import { totalSupply } from '../../../../utils/web3mint';


const Banner = () => {
  const { mintModalHandle, connectWalletModalHanlde, account } = useModal();


  const [remaining, setRemaining] = useState(0);

  useEffect(() =>{
    const calculateRemainingItems = async () => {
      let totalMintedItems = await totalSupply();
      setRemaining(totalMintedItems);
    }

    calculateRemainingItems();
  },[])

  return (
    <BannerStyleWrapper className="Degenesys_v2_baner_sect" id="home">
      <div className="container">
        <div className="Degenesys_v2_baner_content">
          
          <img className="banner-logo"
          src = {logo} 
          alt="main logo"
          width="1116" height="356"
          />
          
          <h3>
            <span className="count">
              <Counter end={remaining} duration={7} />
            </span>{" "}
            / 500 Minted
          </h3>
          <div className="Degenesys_v2_timer">
          </div>
          <div className="Degenesys_v2_baner_buttons text-center">

            <Button lg variant="mint" onClick={() => mintModalHandle()} >
              {" "}
              Mint now
            </Button> :


          </div>
          <div className="coin-info">
            <span>Max 3 NFTs per txn</span>
              <span class="focus-text"> Mint Price : {" "}
                <span className="highlighted">200 Canto / 180 WL</span>
              </span>
          </div>

        </div>
      </div>
    </BannerStyleWrapper>
  );
};

export default Banner;
