import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import Cart from "./pages/cart"
import Home from "./pages/home"
import SignIn from "./Components/signin"
import Phones from "./pages/phones"
import Smart from "./pages/smart"
import TVs from "./pages/tv-s"
import Accessories from "./pages/accessories" ;
import Payment from "./pages/payment";
import {app} from "../firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Profile from "./Components/profile"
import MainLayout from "../admin/mainlayout";
import Resetpassword from "../admin/resetpassword";
import Login from "./Components/login"


import Dashboard from "../admin/dashboard";
import Forgotpasword from "../admin/forgotpasword";

function App() {

  
  
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const email = user.email;
    console.log("the user email  is", email )
  } else {
    // User is signed out
    // ...
  }
});

const initialOptions = {
  clientId: "AdThf5drKJykUTyyuo_2VcDAsNVmbaxlQVaLP3AgANI6J9UX_IpeHR-Vq7ZVzfw_j7kWo6cc7R0mOd_A",
  currency: "USD",
  intent: "capture",
};




return (
<PayPalScriptProvider options={initialOptions}>
   <div className="App">
 <Routes>
  <Route path="/"  element={ <Home/> }/>
  <Route path="shop"  element={ <Shop/> }/>
  <Route path="cart"  element={ <Cart/> }/>
  <Route path="signin"  element={ <SignIn/> }/>
  <Route path="phones" element={<Phones/>}/>
  <Route path="smart"  element={ <Smart/> }/>
  <Route path="tvs"  element={ <TVs/> }/>
  <Route path="accessories"  element={ <Accessories/> }/>
  <Route path="payment"  element={<Payment/> }/>
  <Route path="profile"  element={<Profile/> }/>
  <Route path="resetpassword"  element={<Resetpassword/> }/>
  <Route path="forgotpassword"  element={<Forgotpasword/> }/>
  <Route path="admin"  element={<MainLayout/> }>
  <Route index element={<Dashboard/>}/>
   </Route>
   <Route path="login"  element={ <Login/> }/>
  
 </Routes>
 
   </div>
   </PayPalScriptProvider>
   
  )
}

export default App
