import React from 'react'

function Product({name , price, img}) {
  return (
    <div className="border-2 border-red-300 ml-3">
      <h1>{name}</h1>
       <p>{price}$</p>
        <img src={img}  />
    </div>
  )
}

export default Product
