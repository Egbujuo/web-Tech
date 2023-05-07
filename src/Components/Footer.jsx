import React from "react";
import img1 from '../Images/Vector (16).png'
import img2 from '../Images/Vector (17).png'
import img3 from '../Images/Vector (18).png'
import img4 from '../Images/Vector (19).png'
import img5 from '../Images/Vector (20).png'
import img6 from '../Images/Vector (21).png'
import img7 from '../Images/Vector (22).png'
import img8 from '../Images/Vector (23).png'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div >
        <div className="footer">
      <div className="footer-wrap1">
        <p className="footer-text1">ABOUT US</p>
        <p id="text-child">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
          amet turpis venenatis nulla dignissim scelerisque. Ut volutpat maximus
          ligula.
        </p>
        <div className="wrap1-child">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3}alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </div>

      <div className="footer-wrap1">
        <p className="footer-text1">RECENT POST</p>
        <div className="footer-wrap1-child">
            <div className="d-flex gap-2 footer-wrap1-child2">
                <p className="m-0 fw-bold fs-5 arrow ">{`>`}</p>
                <p className="m-0 child2-text">Motion Animation And VR Headset</p>
            </div>
            <p className="div"></p>

            <div className="d-flex gap-2 ">
                <p className="m-0 fw-bold fs-5 arrow">{`>`}</p>
                <p className="m-0 child2-text">Awesome Tips to Become CEO Of Big NetWork Startup</p>
            </div>
            <div className="div"></div>


            <div className="d-flex gap-2 ">
                <p className="m-0 fw-bold fs-5 arrow">{`>`}</p>
                <p className="m-0 child2-text"> Top 5 Amazing changing For The Social Media
          Industry</p>
            </div>
      
        </div>
      </div>

      <div className="footer-wrap1">
        <p className="footer-text1"> CONTACT US</p>
        <div className="third-child-wrap">
        <div className="third-child1">
            <div>
          <img src={img6} alt="" />
            </div>
          <div>
            <p className="m-0">Address:</p>
            <p>53 Hilltop Drive,Tx 79022</p>
          </div>
        </div>

        <div className="third-child1">
            <div>
          <img src={img7} alt="" />
            </div>
          <div>
            <p className="m-0 ">Phone:</p>
            <p>806-377-1600</p>
          </div>
        </div>

        <div className="third-child1">
          <div>
          <img src={img8} alt="" />
          </div>
          <div>
            <p className="m-0">Mail:</p>
            <p>example@example.com</p>
          </div>
        </div>

        </div>
      </div>
        </div>

      <div className="copyright">
        <p className="m-0">COPYRIGHT © 2021 WEBTECH</p>
      </div>
    </div>
  );
};

export default Footer;
