import Header from "../../pages/header"
import { Link } from "react-router-dom"
import Footer from "../../pages/footer"

function TVs () {
    return(
 <div className="bg-gray-300">
<Header/>

<div className="flex justify-center  mt-28 space-x-32 pt-5 text-xl bg-gradient-to-r from-orange-500 to-transparent h-32 ">
    
   <div className="text-center"> <Link to="/phones"> Phones <img src="https://fscl01.fonpit.de/userfiles/7687254/image/Xiaomi_Smartphones_2023.jpg" className=" h-16 w-16 mt-2 rounded-full" /></Link></div>
   <div className=" text-center"> <Link to="/tvs"> TV-s <img src="data:image/jpeg;base64,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" className="h-16 w-16 mt-2 rounded-full" /> </Link> </div>
   <div className=" text-center"><Link to="/smart"> Smart Device <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEp71HheSyezxCMybJhMM94gj6Y0OUN1uqA" className=" h-16 w-16 mt-2 rounded-full ml-7" /></Link> </div> 
   <div className="  text-center"><Link to="/accessories"> Accessories <img src="https://english.onlinekhabar.com/wp-content/uploads/2022/07/Xiaomi-accessories-1.jpg" className="h-16 w-16 mt-2 rounded-ful ml-5" /></Link> </div> 
</div>
         <h1 className="text-5xl bg-gradient-to-r from-orange-500 to-transparent h-20 text-center mt-16 pt-3 ">TVs</h1>

         <div className="flex flex-col space-y-[100px]  mt-32">
        
        <div className="grid grid-cols-4 gap-12 w-full  mt-16">

         <div className=" bg-gradient-to-r from-black to-gray-300 ml-14  w-[300px] h-[400px]  rounded-3xl  bg-white">
            <p className="text-center text-2xl  pt-6">Xiaomi Mi TV P1 43"</p>
            <p className="text-lg text-center">$ 700</p>
            <button className=" bg-gradient-to-r from-black to-transparent w-28 font-bold text-orange-600 rounded-md ml-24">Add to cart</button>
            <img className="w-60   ml-7 mt-7" src="https://digitrend.ba/media/catalog/product/x/i/xiaomi-mi-tv-p1-43-android-4k_3_.jpg"  />
          
         </div>

            <div className=" bg-gradient-to-r from-black to-gray-300 w-[300px] h-[400px]  rounded-3xl  bg-white">
            <p className="text-center text-2xl  pt-6">Xiaomi TV 55" P1 4K</p>
            <p className="text-lg text-center">$600</p>
            <button className=" bg-gradient-to-r from-black to-transparent w-28 font-bold text-orange-600 rounded-md ml-24">Add to cart</button>
            <img className="w-60   ml-7 mt-7" src="https://shop.ctech.ba/bs/wp-content/uploads/2021/10/xiaomi_mi_tv_55_4k_smart_tv_android_os_01_l.jpg" alt="" />
         </div>

         <div className=" bg-gradient-to-r from-black to-gray-300 w-[300px] h-[400px]  rounded-3xl  bg-white">
            <p  className="text-center text-2xl  pt-6">Xiaomi Morocco </p>
            <p className="text-lg text-center">$350</p>
            <button className=" bg-gradient-to-r from-black to-transparent w-28 font-bold text-orange-600 rounded-md ml-24">Add to cart</button>
            <img className="w-60   ml-7 mt-7" src="data:image/jpeg;base64,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"  />
         </div>

         <div className=" bg-gradient-to-r from-black to-gray-300 w-[300px] h-[400px]  rounded-3xl  bg-white">
            <p className="text-center text-2xl  pt-6">Xiaomi TV Q1E 55 </p>
            <p className="text-lg text-center">$520</p>
            <button className=" bg-gradient-to-r from-black to-transparent w-28 font-bold text-orange-600 rounded-md ml-24">Add to cart</button>
            <img className="w-60   ml-7 mt-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRib81PHLKqLtDi1nHBzNbrSi_6YX_1kgKPbA" alt="" />
         </div>
         </div>

<div className=" grid grid-cols-4 gap-12 w-full   ">
<div className=" bg-gradient-to-r ml-14 from-black to-gray-300 w-[300px] h-[400px] rounded-3xl  bg-white">
            <p className="text-center text-2xl  pt-6">Xiaomi Mi TV 3 60″</p>
            <p className="text-lg text-center">$600</p>
            <button className=" bg-gradient-to-r from-black to-transparent w-28 font-bold text-orange-600 rounded-md ml-24">Add to cart</button>
            <img className="w-60   ml-7 mt-7" src="https://miot-global.com/uploads/CatalogueImage/pvm_TV60n5_13869_1447419402.jpg" alt="" />
         </div>

         <div className=" bg-gradient-to-r from-black to-gray-300 w-[300px] h-[400px] rounded-3xl   bg-white">
            <p className="text-center text-2xl  pt-6">Xiaomi Mi Tv 4s 55"</p>
            <p className="text-lg text-center">$700</p>
            <button className=" bg-gradient-to-r from-black to-transparent w-28 font-bold text-orange-600 rounded-md ml-24">Add to cart</button>
            <img className="w-60   ml-7 mt-7" src="https://sc04.alicdn.com/kf/H752daa7e3597465bac7ac233b69188961.jpg" alt="" />
         </div>
           

         <div className=" bg-gradient-to-r from-black to-gray-300 w-[300px] h-[400px] rounded-3xl  bg-white">
            <p className="text-center text-2xl  pt-6">Redmi Max 86" TV</p>
            <p className="text-lg text-center" >$575</p>
            <button className=" bg-gradient-to-r from-black to-transparent w-28 font-bold text-orange-600 rounded-md ml-24">Add to cart</button>
            <img className="w-60  ml-7 mt-7"  src="https://cdn.shopify.com/s/files/1/0384/9718/9932/products/RedmiMax86InchTV_WBG_1_1000x1000.jpg?v=1644547086" alt="" />
         </div>

         <div className=" bg-gradient-to-r from-black to-gray-300 w-[300px] h-[400px] rounded-3xl bg-white">
            <p className="text-center text-2xl  pt-6" >Xiaomi Mi TV 4S 43"</p>
            <p className="text-lg text-center">$499</p>
            <button className=" bg-gradient-to-r from-black to-transparent w-28 font-bold text-orange-600 rounded-md ml-24">Add to cart</button>
            <img  className="w-60   ml-7 mt-7" src="https://www.geekmall.eu/7211-large_default/xiaomi-mi-tv-4s-43-4k-smart-tv-global-version.jpg" alt="" />
         </div>

         </div>


<div className=" grid grid-cols-4 gap-12 w-full  ">
<div className=" bg-gradient-to-r from-black to-gray-300 ml-14 w-[300px] h-[400px] rounded-3xl  bg-white">
            <p className="text-center text-2xl  pt-6">L43M5-ARU 4K</p>
            <p className="text-lg text-center">$360</p>
            <button className=" bg-gradient-to-r from-black to-transparent w-28 font-bold text-orange-600 rounded-md ml-24">Add to cart</button>
            <img className="w-60   ml-7 mt-7" src="https://chowdhuryelectronics.com/wp-content/uploads/2022/06/Mi-tv-4S-a.jpg" alt="" />
            </div>

         <div className=" bg-gradient-to-r from-black to-gray-300 w-[300px] h-[400px] rounded-3xl  bg-white">
            <p className="text-center text-2xl  pt-6">Xiaomi 5A 80 cm</p>
            <p className="text-lg text-center">$199</p>
            <button className=" bg-gradient-to-r from-black to-transparent w-28 font-bold text-orange-600 rounded-md ml-24">Add to cart</button>
            <img className="w-60   ml-7 mt-7 " src="https://www.jiomart.com/images/product/420x420/493285619/xiaomi-81-28-cm-32-inch-hd-ready-smart-tv-5a-series-ela4819in-digital-o493285619-p593389009-0-202208041807.jpeg" alt="" />
         </div>


       

       
         
         </div>
       
   <Footer/>
         </div>


 </div>

    )
}

export default TVs