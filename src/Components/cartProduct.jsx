import React from 'react'
import { useStateValue } from './StateProvider';

function CartProduct( {id,name, price, img} ) {
  const [ { cart },  dispatch ] = useStateValue();

const removeFromCart = () => {
  dispatch({
    type: "REMOVE_FROM_CART",
     id: id,
     
    
  })
}


  return (
    <div className='flex flex-row justify-evenly  w-[50%] ml-[25%] mt-10 h-60 bg-white rounded-md'> 
      <img src={img} className='w-52 mt-3 h-52 ' />
      <div className=' h-52 mt-3 w-80 '>
        <h1 className='text-xl text-center mt-3 font-semibold'>{name}</h1>
        <p className='text-2xl text-center font-semibold text-orange-500'>$ {price}</p>
        <button onClick={removeFromCart} className='bg-orange-500 mt-24 w-[60%] ml-[20%] rounded-md font-semibold'>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CartProduct 
