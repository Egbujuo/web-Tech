import React from "react";
import "../Styles/Section4.css";
import img1 from "../Images/Rectangle (7).png";
import img2 from "../Images/Frame (1).png";
import img3 from "../Images/Frame (2).png";
import img4 from "../Images/Rectangle (5).png";
import img5 from "../Images/Rectangle (6).png";

const Section4 = () => {
  return (
    <div className="section4">
      <div className="section4-wrap1">
        <div className="section4-1">
          <p id="pp1" >|</p>
          <p id="pp2"><span style={{color:' #377DFF'}}>Our</span> Best Workers</p>
        </div>
        <div className="section4-wrap1-btn">
        <button>View Team</button>
        </div>
      </div>


      <div className="section4-wrap2">
        <div>
          {/* <div className="section4-wrap2-image"> */}
            <img  src={img3} alt="" />
          {/* </div> */}
          <p className="section4-text">Gary D. Greenwell</p>
          <p className="section4-text1">Head of SEO</p>
        </div>

        <div>
          {/* <div className="section4-wrap2-image"> */}
            <img  src={img4} alt="" />
          {/* </div> */}
          <p className="section4-text">Jems W. Phelps</p>
          <p className="section4-text1">UI Designer</p>
        </div>
        <div>
          {/* <div> */}
            <img  src={img5} alt="" />
          {/* </div> */}
          <p className="section4-text">Sharon A. Melton</p>
          <p className="section4-text1">Web Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
