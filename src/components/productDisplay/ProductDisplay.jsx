import React from 'react'
import './productDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

const ProductDisplay = (props) => {

    const {product} = props;
    console.log(product)

  return (
    <div className='product-display'>
        <div className="product-display-left">
            <div className="product-display-image-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="product-display-image">
               <img className='product-display-main-image' src={product.image} alt="" /> 
            </div>
        </div>
        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="product-display-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p className='mt-3'>(122)</p>
            </div>
            <div className="product-display-prices">
                <div className="old-price">${product.old_price}</div>
                <div className="new-price">${product.new_price}</div>
            </div>
            <div className="product-description">
                Lorem ipsum dolor sit amet consectetur spiciatis aliquam hic magnam illum magni!
            </div>
            <div className="product-size">
                <h1>Select Size</h1>
                <div className='product-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button className='cart-button'>Add to Cart</button>
            <p className="product-right-category">
                <span>Category:</span> Women, T-Shirt, Crop Top
            </p>
            <p className="product-right-category">
                <span>Tags:</span> Modern, Latest
            </p>
        </div>

    </div>
  )
}

export default ProductDisplay