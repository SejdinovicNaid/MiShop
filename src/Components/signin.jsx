
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../../firebase"
import Header from "../pages/header"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";



function Login() {
    
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigateTo = useNavigate();
  

    
    
       


    //SIGNIN FUNCTION
   const signIn = (e) => {
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   alert("signedIn succesfully")
 
    const user = userCredential.user;
    if (user) {
        navigateTo("/profile")
       } 
    
    })

       .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
   }

   //REGISTER FUNCTION
   const register = (e) => {
    e.preventDefault();
    
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Registerd succesfully")
   if (user) {
    navigateTo("/profile")
   }
       
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); }



  



        return(
        <div>
            <Header/>
            <div className="bg-gray-200 min-h-screen flex flex-col">
            <div className=" container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div  className="bg-gradient-to-r from-gray-200 via-black to-gray-200 px-6 py-8 rounded  text-black w-full">
                    <h1 className="mb-8 text-3xl text-center text-orange-500 font-semibold">Sign in</h1>

                    <input 
                        type="text"
                        className=" block border border-grey-light w-full p-3 rounded mb-4 "
                        id="email"
                        name="email"
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail
                            (e.target.value)}
                      />

                    <input 
                        type="password"
                        className=" block border border-grey-light w-full p-3 rounded mb-4"
                        id="password"
                        name="password"
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword
                            (e.target.value)}
                        />
                      

                    <button  onClick={signIn}
                        type="submit"
                        className=" w-full text-center py-3 rounded bg-gray-200 text-black text-lg font-semibold focus:outline-none my-1"
                    >Log in</button>

                     <button onClick={register}
                     
                        type="submit"
                        className=" w-full text-center py-3 rounded bg-gray-200 text-black text-lg font-semibold focus:outline-none my-1"
                    >Create Account</button>
                      <Link to="/forgotpassword" className="text-orange-600 text-md  mt-[-20px] ">Forgot password? </Link>
                    


                 

                </div>
                

                
            </div>
        </div>



            </div>
            
      
    )
}

export default Login