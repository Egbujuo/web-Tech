import React from 'react'
import img1 from '../Images/Rectangle (1).png'
import img2 from '../Images/Rectangle (2).png'
import img3 from '../Images/Rectangle (3).png'
import img4 from '../Images/Frame.png'
import img5 from '../Images/Rectangle (4).png'
import img6 from '../Images/image 1.svg'
import img7 from '../Images/image 2.svg'
import '../Styles/Section2.css'


const Section2 = () => {
  return (
    <div className='section2'>
        <div className='section2-wrap1'>
            <img width='1%' src={img5} alt="" />
            <img width='90%' src={img4} alt="" />
        </div>
        <div className='section2-wrap2'>
        <div>
            <img width='90%' src={img1} alt="" />
            <p>Planning</p>
        </div>
        <div className='img-icon2'>
            <img width='90%' src={img6} alt="" />
        </div>
        <div>
            <img width='90%' src={img2} alt="" />
            <p>Design</p>
        </div>
        <div className='img-icon2'>
            <img src={img7} alt="" />
        </div>
        <div>
            <img width='90%' src={img3} alt="" />
            <p>Development</p>
        </div>
        </div>
    </div>
  )
}

export default Section2