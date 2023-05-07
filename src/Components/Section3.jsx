import React from 'react'
import '../Styles/Section3.css'
import img1 from '../Images/Vector (11).png'
import img2 from '../Images/Vector (12).png'
import img3 from '../Images/Vector (13).png'
import img4 from '../Images/Vector (14).png'
import img5 from '../Images/Vector (15).png'
import img6 from '../Images/Group.png'

const Section3 = () => {
  return (
    <div className='section3'>
        <div className='wrap1 '>
            <div>
                <img src={img1} alt="" />
            </div>
            <div>
            <p className='text1'>SEO Ready Code</p>
            <p>Tincidunt felis dignissim justo congue, non rutrum tortor volutpat.</p>
            </div>
        </div>
        <div className='wrap1'>
            <div>
                <img src={img3} alt="" />
            </div>
            <div>
            <p className='text1'>Fully Responsive</p>
            <p>Fully responsive on notebook, tablets and smartphones ant other .</p>
            </div>
        </div>
        <div className='wrap1'>
            <div>
                <img src={img4} alt="" />
            </div>
            <div>
            <p className='text1'>Awesome Features</p>
            <p>Easy-to-use, dynamic colors, grid, video, map and much more .</p>
            </div>
        </div>
        <div className='wrap1'>
            <div>
                <img src={img2} alt="" />
            </div>
            <div>
            <p className='text1'>5-star-support</p>
            <p>Always ready to help you create the best solution .</p>
            </div>
        </div>
        <div className='wrap1'>
            <div>
                <img src={img6} alt="" />
            </div>
            <div>
            <p className='text1'>High Customizibility</p>
            <p>Create, display everything that you want in few seconds .</p>
            </div>
        </div>
        <div className='wrap1'>
            <div>
                <img src={img5} alt="" />
            </div>
            <div>
            <p className='text1'>Up-to-date Software</p>
            <p>lorem er dolor sit amet, teso adipiscing elit. Mauris .</p>
            </div>
        </div>
    </div>
  )
}

export default Section3