import React, { useContext } from 'react'
import { itemContext } from '../context/ShopContextProvider'
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/breadCrums/BreadCrums';
import ProductDisplay from '../components/productDisplay/ProductDisplay';

const Product = (props) => {

  const {all_product} = useContext(itemContext);
  const {productId} = useParams();
  // const product = all_product.find((e)=>e.id === Number(productId))
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product