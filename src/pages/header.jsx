import { Link } from "react-router-dom";
import pic from "../pics/phones/704cb-2000px-xiaomi_logo.svg_.png"
import { useStateValue } from "../Components/StateProvider";


function Header() {

  const [ { cart, user },  dispatch ] = useStateValue();
 





    return(
      <div className="header  w-full  h-14   bg-gradient-to-r from-[#FF681F] via-gray-900  to-[#FF681F] sticky top-0 " >
<h1 className="float-left ml-3 mt-2 text-3xl text-black font-sans flex justify-center">
   <img src={pic} className="logo mr-1 w-10 rounded-3xl shadow-lg shadow-gray-900 drop-shadow-xl"  /> <Link to="/" className="ml-3 hover:scale-105  "> Mi shop</Link>
</h1>

<div className="links space-x-6  mr-10 mt-3.5 flex flex-row items-center  float-right">
  <ul className="">
    <li  className="text-black text-md font-medium hover:scale-110 "><Link to="/">Home</Link></li>
  </ul>
  <ul>
    <li className="text-black text-md font-medium hover:scale-110"><Link to="/shop">Shop</Link></li>
  </ul>
  <ul>
    <li  className="text-black text-md font-medium hover:scale-110"><Link  to= '/signin' > Sign In </Link></li>
  </ul>
  <ul>
    <li><Link to="/cart">
      <i> 
      
  <div class="relative scale-75 hover:scale-90">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-black">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
    <span class="absolute -top-2 left-4 rounded-full bg-orange-500 p-0.5 px-2 text-sm text-black font-semibold shadow-lg shadow-gray-900 border-2 border-orange-400  "> { cart?.length } </span>
  </div> 
  

</i>
      </Link></li>
  </ul>

</div>


      </div>
      
        
    )
}

export default Header