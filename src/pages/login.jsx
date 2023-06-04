import Header from "./header"
import { Link } from "react-router-dom"
import React from "react";



function Login() {

   
        return(
        <div>
            <Header/>
            <div className="bg-gray-200 min-h-screen flex flex-col">
            <div className=" container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div  className="bg-gradient-to-r from-black to-gray-200 px-6 py-8 rounded  text-black w-full">
                    <h1 className="mb-8 text-3xl text-center text-orange-600">Log in</h1>

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 "
                        name="email"
                        placeholder="Email" 
                        onChange={(e) => setEmail
                            (e.target.value)}
                      />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        onChange={(e) => setPassword
                            (e.target.value)}
                        />

                    <button 
                        type="submit"
                        className=" w-full text-center py-3 rounded bg-gray-200 text-black text-lg font-semibold focus:outline-none my-1"
                    >Log in</button>
                </div>

                <div className="text-black text-lg mt-6">
                    Not a member?  
                    <a className="ml-1 text-orange-500 font-semibold " >
                     <Link to="/signup">Sign up!</Link>   
                    </a>
                </div>
            </div>
        </div>



            </div>
            
      
    )
}

export default Login