import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import MetamaskModalStyle from "./Metamaskmodal.style";

import metamaskIcon from "../../../assets/images/icon/MetaMask.svg";

const MetamaskModal = () => {
  const { metamaskModalHandle } = useModal();
  return (
    <>
      <MetamaskModalStyle className="modal_overlay">
        <div
          className="mint_modal_box"
        >
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>METAMASK</h2>
              <button onClick={() => metamaskModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="wallet_list">
                <a href="https://metamask.io/download/" target="_blank" rel="noreferrer">
                  <img src={metamaskIcon} alt="Meta-mask" />
                  Please install metamask extension!
                </a>
                </div>
            </div>

          </div>
        </div>
      </MetamaskModalStyle>
    </>
  );
};

export default MetamaskModal;
