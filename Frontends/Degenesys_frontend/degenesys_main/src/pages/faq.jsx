import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1";
import PageHeader from "../common/pageHeader/v6";
import FAQ from "../components/section/faq/v1";
import CTA from "../components/section/cta/v1"; 
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";

const FAQPage = () => {
  const {
    visibility,
    metamaskModal,
    walletModalvisibility
  } = useModal();

  return (
    <>
      <Layout>
        <GlobalStyles /> 

        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader />
        <FAQ />
        <CTA />
      </Layout>
    </>
  );
};

export default FAQPage;
