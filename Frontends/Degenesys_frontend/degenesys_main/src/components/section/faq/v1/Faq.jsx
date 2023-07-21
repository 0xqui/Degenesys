import { FaMinus, FaPlus  } from "react-icons/fa";

import logo from "../../../../assets/images/logo.webp";
import logo180 from "../../../../assets/images/logo180.webp";

import SectionTitle from "../../../../common/sectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../../../common/accordion/Accordion";
import data from "../../../../assets/data/faq";
import FAQStyleWrapper from "./Faq.style";

import { useRef, useState, useEffect } from "react";

const FAQ = () => {

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setDimensions(ref.current.getBoundingClientRect());
    }
  }, [ref]);

  const handleExpand = (e) => {
    e.preventDefault();
    console.log(e);

  };

  return (
      <FAQStyleWrapper className="Degenesys_faq_sect" id="faq">
        <div className="container">
          <div className="Degenesys_faq_content">
            <SectionTitle
              isCenter={true}
              title="FAQ"
              className="text-center"
            />
            <div className="Degenesys_faq_questions">
              <Accordion className="faq_questions" >
                {data?.map((item, i) => (
                  <AccordionItem key={i}>
                    <AccordionTitle handleExpand={handleExpand}>
                      <h5>{item.title}</h5>
                      <IconWrapper>
                        <OpenIcon>
                        <div className="minus">
                          <img src={logo180} />
                        </div>
                        </OpenIcon>
                        <CloseIcon>
                          <div className="plus">
                            <img src={logo} />
                          </div>
                        </CloseIcon>
                      </IconWrapper>
                    </AccordionTitle>
                    <AccordionBody>
                      <p>{item.text}</p>
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </FAQStyleWrapper>
  );
};

export default FAQ;
