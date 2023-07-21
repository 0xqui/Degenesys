import { FaDiscord } from "react-icons/fa";
import SectionTitle from "../../../../common/sectionTitle";
import Button from "../../../../common/button";
import data from "../../../../assets/data/socialProfile";

import CTAStyleWrapper from "./Cta.style";

const CTA = () => {

  return (
    <CTAStyleWrapper>
      <div className="container">
        <SectionTitle
          className="Degenesys_title_section text-center"
          title="DGENS WILL INHERIT THE EARTH. JOIN US NOW."
        ></SectionTitle>

        <div className="Degenesys_v1_cta_content">
          <div className="join_comunity_btns">
            <a href="https://discord.gg/GFajQmAB67" aria-label="join discord button">
              <Button lg variant="blue" className="join_discord_btn">
                {" "}
              <FaDiscord /> Discord
            </Button>
            </a>
          </div>
          <div className="cta_social_links">
            <ul>
              {data?.map((item, i) => (
                <li key={i}>
                  <a href={item.url}>
                    {item.thumb ? (
                      <img src={item.thumb} alt="Degenesys nft profiles" />
                    ) : (
                      item.icon
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
