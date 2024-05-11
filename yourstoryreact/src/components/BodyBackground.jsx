import React from 'react';
import Lottie from "lottie-react";
import bodyanimation from '../assets/bodyanimation.json';
const BodyBackground = () => {
  return (
    <>
    
    <Lottie
      animationData={bodyanimation}
      loop={true}
      autoplay={true}
    />
    
    </>
    
  );
};

export default BodyBackground;