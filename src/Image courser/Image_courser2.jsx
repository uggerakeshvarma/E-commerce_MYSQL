import './Image_courser.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Assist/assets/banner1-cr-500x150.jpg';
import img2 from '../Assist/assets/banner2-cr-500x150.jpg';

import React from "react";
import Slider from "react-slick";

export function Slick_image1() {


  return (
  
    <>
      <div className='siid'>
        <h3><img src={img1} alt="" /></h3>
      </div>
      <div className='siid'>
        <h3> <h3><img src={img2} alt="" /></h3></h3>
      </div>
    </>

  );
}
