
import GlobalStyles from "../assets/styles/GlobalStyles";
import Layout from "../common/layout";
import Header from "../components/section/header/v1";
import PageHeader from "../common/pageHeader/v6";
import FAQ from "../components/section/faq/v1";

import RoadMap from "../components/section/roadMap/v2/RoadMap";
import About from "../components/section/about/v6/About";
import Footer from "../components/section/footer/v4";

const Airdrop = () => {


  return (
    <>
      <Layout>
        <GlobalStyles /> 
        <Header />
        <PageHeader />
        <About />
        <RoadMap />
        <FAQ />
        <Footer />
      </Layout>
    </>
  );
};

export default Airdrop;
