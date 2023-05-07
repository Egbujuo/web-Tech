import React from "react";
import "../Styles/Section9.css";
import img1 from '../Images/Frame (4).png'
import img2 from '../Images/Frame (5).png'
import img3 from '../Images/Frame (6).png'

const Section9 = () => {
  return (
    <div className="section9">
      <div className="section9-wrap1 d-flex justify-content-center ">
        <p id="pp-icon">|</p>
        <p id="pp-icon2">
          <span style={{color:' #377DFF'}}>Our </span>News
        </p>
      </div>
      <div className="section9-wrap2">
        <div className="pp">
        <div>
          <img src={img1} alt="" />
        </div>  

        <div className="section9-wrap3">
          <p id="section9-p1">Motion Animation And VR Headset</p>
          <div className="section9-text">
            <p>emmajohnson</p>
            <p>May 17, 2019</p>
          </div>
          <p id="section9-p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vitae est accumsan, efficitur velit eu, ullamcorper sapien.
            Suspendisse aliquam libero euismod, tempus nisl. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Aenean vitae est accumsan,
            efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero
            euismod, tempus nisl. Vivamus bibendum in risus sit amet elementum.
            Vivamus sodales .
          </p>
          <button className="btn1">VIEW DETAILS</button>
        </div>
        </div>

          <div>
        <div className="section9-wrap4">
            <img src={img2} alt="" />
            <div className="wrap4-text">
                <p id="wrap4-p1">Awesome Tips to Become CEO Of Big NetWork Startup</p>
                <div className="wrap4-text1">
                    <p>Emmajohnson</p>
                    <p>May 17, 2019</p>
                </div>
            </div>
        </div>
        <div className="section9-wrap4">
            <img src={img3} alt="" />
            <div className="wrap4-text">
                <p id="wrap4-p1">Top 5 Amazing changing For The Social Media Industry</p>
                <div className="wrap4-text1">
                    <p>emmajohnson</p>
                    <p>May 17, 2019</p>
                </div>
            </div>
        </div>
          </div>




      </div>
    </div>
  );
};

export default Section9;
