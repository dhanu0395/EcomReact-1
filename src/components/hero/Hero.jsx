import React from 'react'
import './hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="Hand-icon" />
          </div>
          <p>Collections</p>
          <p>for Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div className='px-3 py-2'>Latest Collection</div>
          <img src={arrow_icon} alt="arrow-icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" className='img-fluid' />
      </div>

    </div>
  )
}

export default Hero