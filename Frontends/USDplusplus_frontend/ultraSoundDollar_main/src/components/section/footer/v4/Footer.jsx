
import { footerLinksV1 } from "../../../../assets/data/insiteLinks";
import footerLogo from "../../../../assets/images/USDpluslogoalt.webp";

import FooterStyleWrapper from "./Footer.style";
const Footer = () => {
  return (
    <FooterStyleWrapper>


      <div className="Degenesys_v1_main_footer">
        <div className="Degenesys_v1_main_footer_overlay"></div>
        <div className="footer_bottom">
          <div className="footer_bottom_content">

            <div className="container">
              <div className="footer_menu">
                <div className="bottom_footer_left">
                  <div className="footer_logo">
                    <a href="# ">
                      <img src={footerLogo} alt="Degenesys nft logo" />
                    </a>
                  </div>
                  <div className="copyright_text">
                    <p>Copyright © 2023 Ultra-Sound Dollar</p>
                  </div>
                </div>

                <div className="bottom_footer_right">
                  <ul>
                    {footerLinksV1?.map((item, i) => (
                      <li key={i}>
                        <a href={item.url}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default Footer;
