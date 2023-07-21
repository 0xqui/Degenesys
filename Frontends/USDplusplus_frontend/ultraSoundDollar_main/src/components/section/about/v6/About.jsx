import React, { useEffect, useRef } from "react";

import AboutStyleWrapper from "./About.style";

import SectionTitle from "../../../../common/sectionTitle";

import gif from '../../../../assets/images/nft/gifalt2.mp4';

import PageHeader from "../../../../common/pageHeader/v1";


const About = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.5, // Adjust the threshold according to your requirements
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const data = {
    aboutDescription2: "The total supply is equal to latest estimate of US M2 money supply on 10/05/2023",
    aboutDescription1: "Ultra-Sound Dollar (USD+) is an ERC20 token on the Canto blockchain",
    aboutDescription3: "USD devs are slow rugging, but there will only ever be 20.8181 trillion USD+",
  };
  const { aboutDescription1, aboutDescription2, aboutDescription3 } = data;

  return (
    <AboutStyleWrapper id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_left_content">
              <SectionTitle subtitle="Ultra-Sound Dollar" />
              <p3>There is no peg. There is only Balenciaga.</p3>
              <div className="v1_about_us_right_text">
                <p>{aboutDescription1}</p>
                <p>{aboutDescription2}</p>
                <p2>{aboutDescription3}</p2>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_right_content">
              <div className="video_box">
                <div className="video_container">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  src={gif}
                  alt="thumbnail"
                  type="video/webm"
                /></div>
              </div>
            </div>
          </div>
          <PageHeader />
          <div className="bottom_text">
          Read the <a href="https://tuber.build/address/0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1/contracts#address-tabs">open source contract here</a> for a complete breakdown of functions, or go to <a href="/burn">Burn Functions</a>.
          <br></br><br></br>
          <p6> TL;DR: </p6> Sales of over 10% of max transaction size (i.e sales of over <p6>1 basis point of max supply</p6>) that reduce the wallet balance by <p6>over 50% </p6>are “flagged by the SEC”. Thereafter, you must pay to settle the SEC case before being able to buy again - <p6> further selling is reprehensible, but not restricted.</p6> Else, you can pay them off in advance to prevent being flagged when you’re dumping a half yard of unregistered digital securities into FOMO you just created on your seventeen CT alts.
          <br></br><br></br>
          If you’re not a whale AND a dumping bandit, you’re unaffected. By disincentivizing whales, everyone is better off. If they want to play the same game they do elsewhere, <p6>they’ll have to pay you</p6> to do it by burning tokens and increasing your effective ownership.
          <br></br><br></br>
          
          </div>
        </div>
        
      </div>

    </AboutStyleWrapper>
  );
};

export default About;
