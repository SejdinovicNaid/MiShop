import React from 'react'

function cartProduct( {name, price, image} ) {
  return (
    <div >
      <img src={image} alt="" />
      <div>
        <h1>{name}</h1>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default cartProduct 
