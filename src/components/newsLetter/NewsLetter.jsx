import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribe to our news letter and stay updated </p>
      <div>
        <input type="email" name="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter