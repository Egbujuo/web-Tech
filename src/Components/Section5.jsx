import React from "react";
import "../Styles/Section5.css";
import img01 from '../Images/01.png'
import img02 from '../Images/02.png'
import img03 from '../Images/03.png'

const Section5 = () => {
  return (
    <div className="section5">
        
      <div className="section5-wrap1">
        <p id="text1">|</p>
        <p id="text2">
          Few Reasons <br /> <span style={{color:'#377DFF'}}>Why Choose Us</span>{" "}
        </p>
      </div>

      <div className="section5-wrap2">
        <div className="part">
          <img className="mt-5" src={img01} alt="" />
          <p className="">Clients</p>
          <p>
            Aliquam eu ante ante. Cras rutrum massa lacinia est lobortis
            maximus. Integer pellentesque nisl at odio porta iaculis. Vestibulum
            auctor libero a quam rhoncus.
          </p>
        </div>

        <div className="part">
          <img className="mt-5" src={img02} alt="" />
          <p>Projects</p>
          <p>
            Aliquam eu ante ante. Cras rutrum massa lacinia est lobortis
            maximus. Integer pellentesque nisl at odio porta iaculis. Vestibulum
            auctor libero a quam rhoncus.
          </p>
        </div>

        <div className="part1">
          <img className="mt-5" src={img03} alt="" />
          <p>Reporting & Analysis</p>
          <p>
            Aliquam eu ante ante. Cras rutrum massa lacinia est lobortis
            maximus. Integer pellentesque nisl at odio porta iaculis. Vestibulum
            auctor libero a quam rhoncus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
