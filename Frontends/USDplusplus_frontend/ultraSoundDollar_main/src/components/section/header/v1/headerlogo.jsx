import React, { useState } from 'react';
import logo from "../../../../assets/images/USDpluslogo.webp";

import logoalt from "../../../../assets/images/USDpluslogoalt.webp";

const HeaderLogo = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <img
        src={isHovered ? logoalt : logo}
        alt="Header logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  };

  export default HeaderLogo;
