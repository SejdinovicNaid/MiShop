import React from 'react';
import { useStateValue } from '../../Components/StateProvider';

function HomeProduct({id,name, img}) {
const [ {cart},  dispatch ] = useStateValue();



  
  
  return (
    <div className='rounded-xl w-full h-full  bg-gradient-to-r from-gray-300 via-gray-400  to-gray-300  shadow-xl '>
     <h1  className='text-center text-xl  pt-6  font-semibold'>{name}</h1>  
    <img className='w-52   ml-4 mt-5 ' src={img}  />
    </div>
  )
}





export default HomeProduct