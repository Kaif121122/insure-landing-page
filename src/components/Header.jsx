import React from 'react'
import heroImgDesk from '../images/image-intro-desktop.jpg'
import heroImgMob from '../images/image-intro-mobile.jpg'

const Header = () => {
  return (
    <div className="header container">
      <div className="left-header flex flex-col">
        <h1 className="common-h1">
          Humanizing your insurance.
        </h1>

        <p className="common-para">
          Get your life insurance coverage easier and faster. We blend our expertise
          and technology to help you find the plan that’s right for you. Ensure you
          and your loved ones are protected.
        </p>

        <div className='header-btn-div'><button className="btn common-btn">
          View plans
        </button></div>
      </div>

      <div className="right-header">
        <img src={heroImgDesk} alt="" className="hero-img" />
      </div>
    </div>
  )
}

export default Header