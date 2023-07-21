import { useState } from "react";
import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../button";
import MintModalStyleWrapper from "./MintNow.style";



import cantologo from "../../../assets/images/icon/cantologo.svg";

import { totalSupply, publicMint } from '../../../utils/web3mint';
import { useEffect } from "react";

const MintNowModal = () => {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('');
  const [remaining, setRemaining] = useState(0);
  const { mintModalHandle } = useModal();

  let totalItems = 500;
  let price = 250;

  const increaseCount = () => {
    if(count >= 3){
      setMessage("Don't be fucking greedy!");
    }else{
      setCount(count + 1);
    }
  }

  const dcreaseCount = () => {
    setMessage("");
    if(count < 1){
      setMessage("Can't mint less than 1!");
    }else{
      setCount(count - 1);
    }
  }

  const onChnageCount = (val) => {
    if(count >= 4){
      setMessage("Don't be fucking greedy!");
    }else if(count < 1){
      setMessage("Can't mint less than 1!");
    }else{
      setCount(val);
    }
  }


  const mintNow = async () => {
    if(count >= 4){
      setMessage("Don't be fucking greedy!");
    }else if(count < 1){
      setMessage("Can't mint less than 1!");
    }else{
      let txn = await publicMint(count);
        setMessage('Transaction sent!');
      if(txn.length){
        setMessage('Minted successfully!');
      }
    }
  }
  

  useEffect(() => {
    const calculateRemainingItems = async () => {
      let totaltMintedItems = await totalSupply();
      setRemaining(totalItems - totaltMintedItems);
    }

    calculateRemainingItems();
  },[totalItems]);

  return (
    <>
      <MintModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>it's time to be a</h2>
              <button onClick={() => mintModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="mint_img">

              </div>
              <div className="mint_count_list">
                <ul>
                  <li>
                    <h5>Remaining</h5>
                    <h5>
                      {remaining}/<span>500</span>
                    </h5>
                  </li>
                  <li>
                    <h5>Price</h5>
                    <h5>{price}
                    <img src={cantologo} alt="Canto logo"/>
                    
                    </h5>
                  </li>
                  <li>
                    <h5>Quantity</h5>
                    <div className="mint_quantity_sect">
                      <button
                        onClick={() =>
                          count > 1 ? dcreaseCount() : count
                        }
                      >
                        -
                      </button>
                      <input
                        type="text"
                        id="quantity"
                        value={count}
                        onChange={(e) => onChnageCount(e.target.value)}
                      />
                      <button onClick={() => increaseCount() }>+</button>
                    </div>
                    <h5>
                    <span>{ count * price }
                      <img src={cantologo} alt="Canto logo"/>
                    </span>
                    </h5>
                  </li>
                </ul>
              </div>
              <div className="msg">
              { message && <p>{message}</p>}
              </div>
              <div className="modal_mint_btn">
                <Button lg variant="mint" onClick={() => mintNow() }>
                  Mint
                </Button> 
              </div>
            </div>
          </div>
        </div>
      </MintModalStyleWrapper>
    </>
  );
};

export default MintNowModal;
