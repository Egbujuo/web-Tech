import React from "react";
import img1 from '../Images/Group 5.png'
import img2 from '../Images/businessman 1.png'
import '../Styles/Section1.css'

const Section1 = () => {
  return (
    <div className=" section1">
      <div className="section1-image">
        <img  src={img2} alt="" />
      </div>
      <div className="section1-wrap1">
        <div className="section1-wrap1-child">
          <img src={img1} alt="" />
        </div>
        <p className="text-white ">
          Always on the lookout for the hi-tech advancements. Build not only a
          product that can sell well, but a platform through which to deliver
          it.
        </p>
        <div className="wrap1-btn">
        <button className="button1">Start Now</button>
        <button className="button2">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
