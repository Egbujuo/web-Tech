import React from 'react'
import '../Styles/Navbar.css'
import path from '../Images/Path.png'
import path2 from '../Images/Path2.png'
import path3 from '../Images/Path3.png'
import path4 from '../Images/Path4.png'

const Navbar1 = () => {
  return (
          
    <div className='background'>
      <div className='navbar1'>
        <div className='navbar1-text'>
        <p className='text-white '>+123 456 789</p>
        </div >
        <div className='d-flex  gap-4 justify-content-center navbar1-img'>
          <div>
            <img src={path} alt="" />
          </div>
          <div>
            <img src={path2} alt="" />
          </div>
          <div>
            <img src={path3} alt="" />
          </div>
          <div>
            <img src={path4} alt="" />
          </div> 
        </div>

      </div>

      </div>
  
  )
}

export default Navbar1