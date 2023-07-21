import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import MetamaskModalStyle from "./Metamaskmodal.style";

const ConnectWallet = (props) => {
  const { connectWalletModalHanlde } = useModal();
  return (
    <>
      <MetamaskModalStyle className="modal_overlay">
        <div
          className="mint_modal_box"
        >
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ NO WALLET CONNECTED</h2>
              <button onClick={() => connectWalletModalHanlde()}>
                <FiX />
              </button>
            </div>
           

          </div>
        </div>
      </MetamaskModalStyle>
    </>
  );
};

export default ConnectWallet;
