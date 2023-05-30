import Header from "./header"
import pic from "../pics/Home/img13.webp"
import { Link } from "react-router-dom"
import tvpic from "../pics/tvs/tv.webp"
import budspic from "../pics/tvs/bud.webp"

function Home() {
    return(
        <div className="bg-gray-200 ">
            <Header/>
            <div className=" news h-[45rem]  flex flex-row pt-24 w-[97%] ml-[1.5%]">
                <div className=" bg-white flex flex-col justify-center items-center text-xl  w-1/3  font-semibold  ">
                    <h1 className=" text-4xl">Redmi note <span className="text-red-600 text-4xl">12</span> Pro+ 5G</h1>
                    <h3>200MP world-leading camera with OIS</h3>
                    <h3>120W HyperCharge</h3>
                    <button className="bg-black text-white mt-5 pb-1 h-10 w-40 rounded-2xl"> <a href="https://www.mi.com/global/product/redmi-note-12-pro-plus-5g/" target="_blank">Learn more</a> </button>
                </div>
                <div className=" w-2/3 "
                ><img src={pic} className="h-full w-ful "  /></div>
            </div>


            <div className="flex justify-center  mt-28 space-x-32 pt-5 text-xl bg-gradient-to-r from-orange-500 to-transparent h-32 ">
    
    <div className="text-center"> <Link to="/phones"> Phones <img src="https://fscl01.fonpit.de/userfiles/7687254/image/Xiaomi_Smartphones_2023.jpg" className=" h-16 w-16 mt-2 rounded-full" /></Link></div>
    <div className=" text-center"> <Link to="/tvs"> TV-s <img src="data:image/jpeg;base64,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" className="h-16 w-16 mt-2 rounded-full" /> </Link> </div>
    <div className=" text-center"><Link to="/smart"> Smart Device<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEp71HheSyezxCMybJhMM94gj6Y0OUN1uqA" className=" h-16 w-16 mt-2 rounded-full ml-5" /></Link> </div> 
    <div className=" "><Link to="/accessories"> Accessories <img src="https://english.onlinekhabar.com/wp-content/uploads/2022/07/Xiaomi-accessories-1.jpg" className="h-16 w-16 mt-2 rounded-full ml-5" /></Link> </div> 
     <div className="h-16 w-16 mt-7 rounded-full bg-white flex justify-center items-center ">
     <Link to="/shop"> <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="h-12  hover:h-14 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg> </Link>
</div>
 </div>
           
                                                
{/* */}
  <div class="  mt-40 flex flex-row  h-[35rem] w-[97%] ml-[1.5%] space-x-[1%] ">
      
      <div className="TV  bg-white
        w-[49.5%] ">
        <div className="flex justify-center flex-col items-center h-[40%] ">
      <h1 className="text-4xl font-bold">XIAOMI TV A Pro 55</h1>
      <h3 className="text-2xl">Smart life,limitless vision</h3>
      <a className=" inline-flex pt-4 text-lg text-orange-400" href="https://www.mi.com/global/product/xiaomi-tv-a-pro-55/">Learn more<span className="pt-1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg></span>
 </a> 
 </div>
 <div className="flex justify-center">
 <img src={tvpic} className="h-full w-80" />
 </div>
      </div>
      
      <div className=" bg-white  w-[49.5%]   ">
        <div className="flex justify-center flex-col items-center h-[40%] ">
          <h1 className="text-4xl font-bold ">XIAOMI Buds 4 Pro</h1>
          <h3 className="text-2xl">Immersive in every way</h3>
          <a className="inline-flex pt-4 text-lg text-orange-400" href="https://www.mi.com/global/product/xiaomi-buds-4-pro/">Learn more <span className="pt-1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg></span>
 </a>
</div >
<div className="flex justify-center items-center  " >
<img src={budspic} className="h-64   "   />
</div>
      </div>

  </div>



{/* FOOTER START */}
<div className=" footer flex flex-row items-center justify-evenly h-60 text-white mt-40 bg-gray-700 text-lg">
    <div >
        <h1 className="text-2xl mb-4"> SUPPORT</h1> 
        <ul>
             <li> <a target="_blank" href="https://www.mi.com/global/support/contact">Contact us</a> </li>
             <li> <a target="_blank" href="https://www.mi.com/global/support/user-guide/"> User Guide </a> </li>
             <li> <a target="_blank" href="https://www.mi.com/global/support/warranty"> Warranty </a></li>
             <li> <a target="_blank" href="https://www.mi.com/global/support/xiaomi-iws"> Internationl Warranty </a></li>
             <li> <a target="_blank" href="https://www.mi.com/global/service/support/declaration.html"> Eu Declaration of Conformity </a></li>
        </ul>
    </div>

    <div>
         <h1 className="text-2xl mb-4">ABOUT US</h1> 
         <ul>
            <li> <a target="_blank" href=""> Xiaomi </a> </li>
            <li> <a target="_blank" href=""> Leadership Team </a>  </li>
            <li> <a target="_blank" href=""> Privacy Policy </a>  </li>
            <li> <a target="_blank" href=""> Trust Center </a>  </li>
            <li> <a target="_blank" href=""> MIUI </a>  </li>
         </ul>
    </div>
    
      <div className="mt-3  h-48 ">
        <h1 className="pl-4 text-2xl  ">FOLLOW US</h1>
        <ul className="pt-2 flex justify-evenly w-48 ">
            <li className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"> <a target="_blank" href="https://www.facebook.com/XiaomiGlobal/"> <span> <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></span> </a> </li>
            <li className="bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"> <a target="_blank" href="https://www.youtube.com/user/XiaomiChina"> <span><svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /></svg></span> </a> </li>
            <li className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"> <a target="_blank" href="https://twitter.com/Xiaomi"> <span><svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg></span> </a> </li>
            <li> <a target="_blank" href="https://www.instagram.com/xiaomi.global/"> <i class="fab fa-facebook"></i> </a> </li>
        </ul>
      </div>

</div>
        </div>
    )
}

export default Home