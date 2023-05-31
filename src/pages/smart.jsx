import React from 'react'
import Header from "./header"
import Footer from "./footer"
import { Link } from "react-router-dom"
import PhonesData from '../Data/Products/PhonesData'



function SmartDevices() {
  return (
    <div className='bg-gray-300'>
          <Header/>
<div className="flex justify-center  mt-28 space-x-32 pt-5 text-xl bg-gradient-to-r from-orange-500 to-transparent h-32 ">
   <div className="text-center"> <Link to="/phones"> Phones <img src="https://fscl01.fonpit.de/userfiles/7687254/image/Xiaomi_Smartphones_2023.jpg" className=" h-16 w-16 mt-2 rounded-full" /></Link></div>
   <div className=" text-center "> <Link to="/tvs"> TV-s <img src="data:image/jpeg;base64,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" className="h-16 w-16 mt-2 rounded-full" /> </Link> </div>
   <div className=" text-center "><Link to="/smart"> Smart Device <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEp71HheSyezxCMybJhMM94gj6Y0OUN1uqA" className=" h-16 w-16 mt-2 rounded-full ml-7" /></Link> </div> 
   <div className="  text-center"><Link to="/accessories"> Accessories <img src="https://english.onlinekhabar.com/wp-content/uploads/2022/07/Xiaomi-accessories-1.jpg" className="h-16 w-16 mt-2 rounded-full ml-5" /></Link> </div> 
</div>

<h1 className="text-5xl bg-gradient-to-r from-orange-500 to-transparent h-20 text-center mt-16 pt-3 ">Smart Devices</h1>

<div className='bg-gray-300 grid grid-cols-4  gap-10 place-content-evenly'>

<div className=''>
     <PhonesData 
     name="Smart door lock"
     price={100}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1673923841.7781291.png?width=400&height=400"
     />
    </div>

    <div className=''>
     <PhonesData 
     name="Automatic Door Lock"
     price={167}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1673923636.67345556.png?width=400&height=400"
     />
    </div>

    <div className=''>
     <PhonesData 
     name="Camera AW300"
     price={221}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1673868028.34594072.png?width=400&height=400"
     />
    </div>


    <div className=''>
     <PhonesData 
     name="Smart Speaker"
     price={89}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1673833596.47662450.png?width=400&height=400"
     />
    </div>


    <div className=''>
     <PhonesData 
     name="Smart Lightstrip"
     price={30}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666872990.91731927.png?width=400&height=400"
     />
    </div>


    <div className=''>
     <PhonesData 
     name="Smart Doorbell 3"
     price={120}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666841374.53546011.png?width=400&height=400"
     />
    </div>


    <div className=''>
     <PhonesData 
     name="Smart Speaker"
     price={139}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666841971.73162728.png?width=400&height=400"
     />
    </div>


    <div className=''>
     <PhonesData 
     name="Outdoor Camera"
     price={265}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666844708.29229624.png?width=400&height=400"
     />
    </div>


    <div className=''>
     <PhonesData 
     name="Smart LED Bulb"
     price={29}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666845334.22448296!348x348.png?f=webp"
     />
    </div>


    <div className=''>
     <PhonesData 
     name="Smart Purifier"
     price={600}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666877097.25618851.png?width=400&height=400"
     />
    </div>


    <div className=''>
     <PhonesData 
     name="Bedside Lamp"
     price={60}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666851036.5562318!348x348.png?f=webp"
     />
    </div>


    <div className=''>
     <PhonesData 
     name="Smart Air Fryer"
     price={120}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666839330.77322402!348x348.png?f=webp"
     />
    </div>


    <div className=''>
     <PhonesData 
     name="Cooking Robot"
     price={267}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1676532236.15369437!348x348.png?f=webp"
     />
    </div>


    <div className=''>
     <PhonesData 
     name="Desk Lamp 1S"
     price={33}
     button="Add to Cart"
     img="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666850673.95389721.png?width=400&height=400"
     />
    </div>

    </div>



<Footer/>
    </div>
  )
}

export default SmartDevices
