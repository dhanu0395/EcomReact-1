import React from 'react';
import './popular.css';
import data_product from '../assets/data'
import Item from '../items/Item';

const Popular = () => {
  return (
    <div className='popular-section'>
        <h1>Popular in Women</h1>
        <hr />
        <div className="popular-item container">
            {data_product.map((item, i)=>{
                // data fetched from data.js file and passed to Item component as props below
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        
    </div>
  )
}

export default Popular