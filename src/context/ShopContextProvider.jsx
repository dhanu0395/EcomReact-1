import React from 'react'
import all_product from '../components/assets/all_product'

export const itemContext = React.createContext();

const ShopContextProvider = (props) => {
  // importing json data from assets and passing into provider
    const contextValue = {all_product}

  return (
    <div>
        <itemContext.Provider value={contextValue}>
          {props.children}
        </itemContext.Provider>
    </div>
  )
}

export default ShopContextProvider