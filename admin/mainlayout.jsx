import React, { useState } from 'react'
import Header from '../src/pages/header'
import { Link } from "react-router-dom";


function MainLayout() {
 
const [show, setShow] = useState(1);

const handletab = (e) => {
  setShow(e);
}
 

  return (
    <div className=" ">
<Header/>

<Link to="/login"><button>login</button></Link>

<div className="flex flex-row mt-10 ">
      {/* LEFT*/}

         {/* LEFT*/}

     <div className='w-[15%] h-screen bg-[#FF681F]'>
       <ul className='mt-10  ml-5 grid grid-row-6 gap-5'
       >
        <li ><button className= 'w-32 h-10 bg-orange-700'  onClick={() => handletab(1)} >Dashboard</button></li>
        <li ><button className=  'w-32 h-10 bg-orange-700 ' onClick={() => handletab(2)}>Orders</button></li>
        <li ><button className= 'w-32 h-10 bg-orange-700  '  onClick={() => handletab(3)}>Products</button></li>
        <li ><button className=  'w-32 h-10 bg-orange-700  '  onClick={() => handletab(4)}>AddProduct</button></li>
        <li ><button className=  'w-32 h-10 bg-orange-700  ' onClick={() => handletab(5)}>Customers</button></li>
        <li  ><button className='w-32 h-10 bg-orange-700'>Logout</button></li>
       </ul>
     </div>

     {/* RIGHT*/}
     <div className= "w-[80%] ml-[5%] h-screen  border-2 border-blue-700 ">

     <div  className={show===1 ? "section dashboard bg-red-300 w-full h-full block" : "section dashboard bg-red-300 w-full h-full hidden"}  >
       Dashboard
       </div>

       <div  className={show===2 ? "section orders bg-emerald-400 w-full h-full block" :  "section orders bg-emerald-400 w-full h-full hidden" } >
        Orders
        </div>

       <div className={show===3? "section products bg-yellow-300 w-full h-full block" : "section products bg-yellow-300 w-full h-full hidden "} >
        Products
        </div>

       <div className={show===4 ? "section addproducts bg-indigo-400 w-full h-full block" : "section addproducts bg-indigo-400 w-full h-full hidden"  }>
        AddProducts
        </div>

       <div  className= {show===5 ? "section customers bg-red-900 w-full h-full block" :  "section customers bg-red-900 w-full h-full hidden " } >
        Customers
        </div>
      
     </div>
     </div>
</div>
)}

export default MainLayout
