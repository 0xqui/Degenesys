import SectionTitle from "../../../../common/sectionTitle";
import RoadMapItem from "./RoadMapItem";
//import roadMapBgShape from "../../../../assets/images/nft/v2_roadmap_bg_shape1.webp";
import data from "../../../../assets/data/roadMap/roadMapV1";
import RoadMapStyleWrapper from "./RoadMap.style";
//import { useRef,useEffect } from "react";
//import { useInView } from 'react-intersection-observer';


const RoadMap = () => {
  // const {ref: myRef, inView: myElementIsVisible} = useInView(options);
  
  // const myRef = useRef();
  // const [myElementIsVisible,setMyElementIsVisible] = useState();
  
  // useEffect(() => {
  //   const observer = new IntersectionObserver ((entries) => {
  //     const entry = entries [0];
  //     setMyElementIsVisible(entry.isIntersecting)
  //   })
  //   observer.observe(myRef.current)

  return (
    <RoadMapStyleWrapper id="roadmap">
      <div className="container">
        <SectionTitle
          isCenter={true}
          title="The Collapse of the US Dollar Hegemony"
          subtitle="a new world order"
          className="text-center"
        />
        <div className="v2_roadmap_card_list">
          <div className="v2_roadmap_divider">
          </div>
          <div className="row">
            {data?.map((item, i) => (
              <div key={i} className="col-md-6">
                <RoadMapItem id={i} {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Degenesys_v2_roadmap_mass_gard">
      </div>
    </RoadMapStyleWrapper>
  );
};

export default RoadMap;
