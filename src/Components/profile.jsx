import React from 'react'
import { getAuth, signOut } from 'firebase/auth';
import {app} from "../../firebase"
import { useNavigate } from 'react-router-dom';



function Profile() {

    const auth = getAuth(app);
    const navigateTo = useNavigate();
    

    const signout = async () => {
      try {
        await signOut(auth)
        navigateTo("/")
        alert("signout succesfully")
      }catch (error) {

      }
    }
    
  

  return (
    <div>
      <h1>Profile</h1>
      <button className='scale-110' onClick={signout} >Signout</button>
    </div>
  )
}

export default Profile
