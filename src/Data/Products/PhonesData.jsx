import React from 'react';
import { useStateValue } from '../../Components/StateProvider';

function PhonesData({id,name, price, button, img}) {
const [ {cart},  dispatch ] = useStateValue();

console.log("this is a cart", cart)

  const addToCart = () => {
   dispatch({
    type: "ADD_TO_CART",
    item : {
      id: id,
      name : name,
      price: price,
      button: button,
      img : img
    }
   })
  }
  
  return (
    <div className='rounded-xl w-[300px] h-[400px] mt-10  bg-gradient-to-r from-gray-300 via-gray-400  to-gray-300 ml-8 shadow-lg shadow-gray-400'>
    
      <h1  className='text-center text-2xl  pt-6  font-bold'>{name}</h1>
      <h2 className='text-lg text-center  font-semibold '>${price}</h2>
      <button onClick={addToCart} className=' bg-gradient-to-r from-black to-transparent w-28 font-bold text-[#f42b03] rounded-md ml-24 shadow-[#FF681F] shadow-md hover:scale-110 hover:shadow-xl hover:shadow-[#FF681F]'>{button}</button>
      <img className='w-60   ml-7 mt-7 ' src={img}  />
    </div>
  )
}





export default PhonesData
