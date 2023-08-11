import Header from "./header"
import pic from "../pics/Home/img13.webp"
import { Link } from "react-router-dom"
import tvpic from "../pics/tvs/tv.webp"
import budspic from "../pics/tvs/bud.webp"
import HomeProduct from "../Data/Products/home-product-data"


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

           
                                                
{/* */}
  <div class="  mt-10 flex flex-row  h-[35rem] w-[97%] ml-[1.5%] space-x-[1%] ">
      
      <div className="TV  bg-white
        w-[49.5%] hover:shadow-lg hover:shadow-gray-300 ">
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
      
      <div className=" bg-white  w-[49.5%] hover:shadow-lg hover:shadow-gray-300 ">
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


  <div className="grid grid-cols-6  gap-4 place-content-evenly w-[97%] ml-[1.5%] mt-10">
  <div className=""> 
  <HomeProduct
   id=" afldklsfnjk"
   name="Xiaomi 13 Pro"
   img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677427639.01867146!200x200.png?f=webp"
  />
   </div>

  <div className="">
  <HomeProduct 
      id=" adfasdfaf"
     name="Outdoor Camera"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666844708.29229624.png?width=400&height=400"
     />
  </div>


  <div className="">
  <HomeProduct 
      id="ghsvbghgfjn"
     name="TV Max 86"
     img=" https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1669027257.44077078.png?width=400&height=400  "
     />
  </div>


  <div className="">
    <HomeProduct 
    id=" apldflsdf"
     name="Xiomi 12S Ultra"
     
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666613862.55361324.png?width=400&height=400"
/>
</div>

  <div className="">
  <HomeProduct 
     id="akdlkjsdlf"
     name="Hair Clipper"
     img=" https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666840245.99165624.png?width=400&height=400 "
     />
  </div>


  <div className=" text-2xl font-bold text-center pt-24 rounded-xl w-full h-full  bg-gradient-to-r from-gray-300 via-gray-400  to-gray-300  shadow-xl shadow-gray-400">All Products <Link to="/shop"> <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f42b03" className="h-10 mt-3  hover:scale-125 ml-24  ">
         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
         </svg> 
         </Link></div>

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