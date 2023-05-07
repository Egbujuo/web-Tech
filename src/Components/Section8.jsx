import React from 'react'
import '../Styles/Section8.css'
import img1 from '../Images/Rectangle (16).png'

const Section8 = () => {
  return (
    <div className='section8'>
        <div className='section8-wrap1'>
            <img src={img1} alt="" />
        </div>

        <div className='section8-wrap2'>
            <h3>A New Era of <br /><span id='span' style={{color:'#377DFF'}}>Innovation</span></h3>
            <p>Always on the lookout for the hi-tech advancements. Build a product that will sell well</p>
            <div className='section8-btn'>
                <button id='section8-btn1'>Start Now</button>
                <button id='section8-btn2'>Learn More</button>
            </div>
        
        </div>













    </div>
  )
}

export default Section8