import { useModal } from "../../../utils/ModalContext";
import { FiX, FiChevronRight } from "react-icons/fi";
import WalletModalStyleWrapper from "./WalletModal.style";

import metamaskIcon from "../../../assets/images/icon/MetaMask.svg";
//import formatic from "../../../assets/images/icon/Formatic.svg";
//import trustWalletIcon from "../../../assets/images/icon/Trust_Wallet.svg";
//import walletConnect from "../../../assets/images/icon/WalletConnect.svg";
export const WalletModal = () => {
  const { walletModalHandle, connectWalletHandle } = useModal();
  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div
          className="mint_modal_box"
        >
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <button onClick={() => walletModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <p>
                Please connect your MetaMask wallet
              </p>
              <div className="wallet_list">
                <a href="# " onClick={ () => connectWalletHandle() }>
                  <img src={metamaskIcon} alt="Meta-mask" />
                  MetaMask
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </WalletModalStyleWrapper>
    </>
  );
};

export default WalletModal;
