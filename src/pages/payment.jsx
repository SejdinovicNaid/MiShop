import React, {useEffect, useState} from 'react'
import Header from './header'
import { useStateValue } from '../Components/StateProvider'
import {Link} from "react-router-dom";
import CartProduct from '../Components/cartProduct';
import { getCartTotal } from '../Components/reducer';
import { loadStripe } from '@stripe/stripe-js';




function Payment() {
const [stripePromise, setStripepromise] = useState(null);
    const [{cart, user}, dispatch] = useStateValue();

useEffect(() => {
  fetch("/config").then(async (r) => {
    const {publishableKey} = await r.json();
    console.log(publishableKey)
  } )
},
[])

return (
    <div className='bg-gray-300'>
     <Header/>
        
     <div className='ml-4 text-xl font-semibold mt-10  text-black  '>
          <h3>Review items and delivery </h3>
          <h1 className=''>Checkout <Link to="/cart" ><span className='text-2xl font-bold'>({cart?.length})</span> items :</Link></h1>
       </div >

     {/* ITEMS SECTION*/}
    <div className=' mt-16'>
       <div className='mb-10'>
        {cart.map(item => (
            <CartProduct
            id={item.id}
            img = {item.img}
            name = {item.name}
            price = {item.price}
            
            />
         ))} 
        </div>

    </div>


    {/* PAYMANT SECTION */}
    <div className=" bg-gradient-to-r from-gray-300 via-black to-gray-300  w-[60%] ml-[20%] h-full">
            
            
       
             <div>
               
                  
                    <div className='ddd text-2xl text-orange-600 font-semibold ml-3  pt-10'>
                    < span className='ml-[40%]'> { cart?.length }  Items = $ {getCartTotal(cart)} </span> 
                  <div className='w-[70%] ml-[15%] mt-8'>
                    <form action="submit" className='grid grid-rows-7 gap-5'>
                      <input type="text" className='text-lg h-10 rounded-lg bg-slate-200 text-[#FF681F] pl-3 ' placeholder='  FirstName' />
                      <input type="text" className='text-lg h-10 rounded-lg bg-slate-200 text-[#FF681F] pl-3 ' placeholder='  LastName'/>
                      <input type="text" className='text-lg h-10 rounded-lg bg-slate-200 text-[#FF681F] pl-3 ' placeholder='  Adress'/>
                      <input type="number" className='text-lg h-10 rounded-lg bg-slate-200 text-[#FF681F] pl-3 ' placeholder='  Postal Code'/>
                      <input type="text" className='text-lg h-10 rounded-lg bg-slate-200 text-[#FF681F] pl-3 ' placeholder='  City'/>
                      <input type="text" className='text-lg h-10 rounded-lg bg-slate-200 text-[#FF681F] pl-3 ' placeholder='  Email'/>
                      <input type="text" className='text-lg h-10 rounded-lg bg-slate-200 text-[#FF681F] pl-3 'placeholder='  Phone'/>
                      <button className='text-[#FF681F] bg-slate-200 w-[30%] ml-[35%] mt-5 mb-10 rounded-lg hover:shadow-lg hover:shadow-[#FF681F] hover:scale-110'>Deliver</button>
                    </form>
                    </div> 

                    </div>
                   

            
             </div>
    </div>

</div>
  )
}


export default Payment
