import React from 'react'
//import Cart from '~/components/Cart'

const ItemInfo = () =>{
return (
    <>
      <label htmlFor="quantity">Quantity </label>
         <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
    
         />
     <label>Ring Size</label>
        <select id="list">
            <option>6 mm</option>
            <option>7 mm</option>
            <option>8 mm</option>
        </select>

      <button
        type="submit"
       
      >
        Add to Cart
      </button>
      
    </>
  )
}


export default ItemInfo
