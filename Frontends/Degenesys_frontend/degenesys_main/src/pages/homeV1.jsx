import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner/v2";

import About from "../components/section/about/v6";
import RoadMap from "../components/section/roadMap/v2";
import FAQ from "../components/section/faq/v1"; 
import Footer from "../components/section/footer/v4";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import MetamaskModal from "../common/modal/metamask/MetamaskModal";
import ConnectWallet from "../common/modal/metamask/ConnectWallet";

const HomeV1 = () => {
  const { visibility, walletModalvisibility, metamaskModalVisibility, connectWalletModal } = useModal();
  return (
    <Layout>
       <GlobalStyles />  
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      {metamaskModalVisibility && <MetamaskModal/> }
      {connectWalletModal && <ConnectWallet/> }
      <Header />
      <Banner />
      <About />
      <RoadMap /> 
      <FAQ />
      <Footer />
    </Layout>
  );
};

export default HomeV1;
