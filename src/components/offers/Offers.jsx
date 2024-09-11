import React from 'react'
import './offers.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers-section'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offer For You</h1>
            <p>Only on Best Sellers Products</p>
            <button className='btn btn-danger'>Check Now</button>
        </div>

        <div className="offers-right">
            <img src={exclusive_image} className='img-fluid' alt="Exclusive" />

        </div>
    </div>
  )
}

export default Offers