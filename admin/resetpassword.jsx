import React from 'react'
import Header from '../src/pages/header';

function Resetpassword() {
  return (
    <div className=''>
     <Header/>
       <div  className="bg-gradient-to-r from-gray-300 via-black to-gray-300 px-6 py-8 rounded  text-black w-[25%] h-[25%] ml-[37.5%] mt-[15%] ">
                    <h1 className="mb-8 text-3xl text-center text-orange-500 font-semibold">Change password</h1>

                    <input 
                        type="text"
                        className="w-[70%] ml-[15%] block border border-grey-light  p-3 rounded mb-4 "
                        id="email"
                        name="email"
                        placeholder="Enter new password" 
                        />
                      
                      <input 
                        type="text"
                        className="w-[70%] ml-[15%] block border border-grey-light  p-3 rounded mb-4 "
                        id="email"
                        name="email"
                        placeholder="Confirm password" 
                        />
                      
                     

                 
                    <button  
                        type="submit"
                        className=" w-[70%] ml-[15%] text-center py-3 rounded bg-gray-200 text-black text-lg font-semibold focus:outline-none my-1"
                    >Set new password</button>

                    


                 
                </div>
    </div>
  )
}

export default Resetpassword
