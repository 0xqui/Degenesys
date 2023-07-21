import { FiSearch } from "react-icons/fi";

import liq from "../../../assets/images/piechart.webp";

import PageHeaderStyleWrapper from "./PageHeader.style";
const PageHeader = () => {
  return (
    <PageHeaderStyleWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">

              </div>
              <h2 className="breadcrumb_title text-uppercase">Tokenomics</h2>
            </div>
          </div>

          <div className="main_content_box">


            <div className="promo">
              No presale <br></br> No buy/sell tax<span className="superscript">*</span> <br></br> No respecc for the SEC 

              <div className="subtext">
              <span className="superscript">*</span>All burn functions are optional.
              </div>

            </div>


            <div className="content">
              <img className="pie_chart" src={liq} ></img>

            </div>

          </div>



          </div>

      </div>
    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;
