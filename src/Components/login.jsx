import React,{ useState }  from 'react'
import Header from '../pages/header'

function Login() {
  return (
    <div>
        <Header/>


        <div  className="login bg-gradient-to-r from-gray-300 via-black to-gray-300 mx-[25%] my-48 rounded  text-black w-1/2  p-16 ">
                    <h1 className="mb-8 text-3xl text-center text-orange-500 font-semibold">Log in</h1>

                    <input 
                        type="text"
                        className=" block  w-[80%] p-3 rounded mb-4 ml-[10%]"
                        id="email"
                        name="email"
                        placeholder="Email" 
                        />
                  
                    <input 
                        type="password"
                        className=" block w-[80%]  p-3 rounded mb-4 ml-[10%]"
                        id="password"
                        name="password"
                        placeholder="Password" 
                        />
        
                    <button  
                        type="submit"
                        className="  text-center   bg-gray-200 text-black text-lg font-semibold   w-[80%]  p-3 rounded mb-4 ml-[10%]"
                    >Log in
                    </button>
               </div>
                  
                    
               <div  className="signup bg-gradient-to-r from-gray-200 via-black to-gray-200 px-6 py-8 rounded  text-black w-full">
                    <h1 className="mb-8 text-3xl text-center text-orange-500 font-semibold">Sign in</h1>

                    <input 
                        type="text"
                        className=" block border border-grey-light w-full p-3 rounded mb-4 "
                        id="email"
                        name="email"
                        placeholder="Email" 
                        />
                  
                    <input 
                        type="password"
                        className=" block border border-grey-light w-full p-3 rounded mb-4"
                        id="password"
                        name="password"
                        placeholder="Password" 
                   />

                      <button  
                        type="submit"
                        className=" w-full text-center py-3 rounded bg-gray-200 text-black text-lg font-semibold focus:outline-none my-1"
                    >Signup
                    </button>
                </div>
    </div>
  )
}

export default Login
