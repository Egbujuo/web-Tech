import "../Styles/Section7.css";
import img1 from '../Images/Group (1).png'
import img5 from '../Images/Group (2).png'
import img4 from '../Images/Rectangle (13).png'
import img3 from '../Images/Rectangle (14).png'
import img2 from '../Images/Rectangle (15).png'
import { useState } from "react";


const Section7 = () => {
  const [slide, setSlide] = useState('')

  const image = () =>{
    img4 ='../Images/Rectangle (13).png'
    img3 ='../Images/Rectangle (14).png'
    img2 ='../Images/Rectangle (15).png'
  }






  return (
    <div className="section7">
      <div className="section7-wrap1">
        <p id="pp-1">|</p>
        <p id="pp-2"><span style={{color:'#377DFF'}}>Our </span>Testimonials</p>
      </div>

      <div className="section7-wrap2">
        <div>
          <img id="section7-icon" src={img1} alt="" />
        </div>
        <div>
          <img id="section7-img" src={img2} alt="" />
        </div>
        <div>
          <img id="section7-img" src={img3} alt="" />
        </div>
        <div>
          <img id="section7-img" src={img4} alt="" />
        </div>
        <div>
          <img id="section7-icon" src={img5} alt="" />
        </div>
      </div>
      <div className="section7-wrap3">
      <p id="pp-3">
        Donec eget elit vel urna varius pharetra. Suspendisse sodales venenatis
        lorem nec tincidunt. Donec dignissim purus ut nulla ultricies.
      </p>
      <p id="pp-4">Ronald C. Hartung</p>
      <p >MARKETER</p>
      </div>
    </div>
  );
};

export default Section7;
