import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import Cart from "./pages/cart"
import Home from "./pages/home"
import SignIn from "./pages/signin"
import Phones from "./pages/phones"
import Smart from "./pages/smart"
import TVs from "./pages/tv-s"
import Accessories from "./pages/accessories" ;
import app from "../firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";


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




return (
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

 </Routes>
   </div>
  )
}

export default App
