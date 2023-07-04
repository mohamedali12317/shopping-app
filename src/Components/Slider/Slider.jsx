import React from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import './Slider.scss';
import { current } from '@reduxjs/toolkit';
import { useState } from 'react';

const Slider = () => {

 const data = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://cdn.shopify.com/s/files/1/0036/7306/3491/files/slide1_79dcfb4b-5024-4ac0-962c-e894a5d4d09f_2000x.jpg?v=1614330723",
];

const [currentSlide , setCurrentSlide] = useState(0);

const prevSlide = () => {
  setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
} ;

const nextSlide = () => {
  setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
};

 return (
  <>
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}} >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>  {/* container */}

      <div className="icons">
       <div className="icon" onClick={prevSlide}>
       <WestOutlinedIcon/>
       </div>
       <div className="icon" onClick={nextSlide}>
        <EastOutlinedIcon/>
       </div>
      </div>
    </div> {/* slider */}
  </>
 );
}

export default Slider;
// {/*  */}