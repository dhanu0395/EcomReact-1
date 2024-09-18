import React, {useContext} from 'react'
import './shopcategory.css'
import {itemContext} from '../context/ShopContextProvider'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/items/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(itemContext)

  console.log(all_product)
  return (
    <div className='shop-category'>
      <img src={props.banner} className='my-5 mx-auto w-100' alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {
          all_product.map((item, index)=>{
                // return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              if(props.category===item.category){
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }
              else{
                return null;
              }
          })
        }
      </div>
      <div className="shopcategory-loadMore">
          Explore More
      </div>
    </div>
  )
}

export default ShopCategory