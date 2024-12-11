import './Image_courser.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Assist/assets/Banner1.png';
import img2 from '../Assist/assets/Banner2.png';

import React from "react";
import Slider from "react-slick";

export function Slick_image() {
    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false, // Added to prevent pause on hover
      };

  return (
    <Slider {...settings}>
      <div className='siid'>
        <h3><img src={img1} alt="" /></h3>
      </div>
      <div className='siid'>
        <h3> <h3><img src={img2} alt="" /></h3></h3>
      </div>
    </Slider>
  );
}
