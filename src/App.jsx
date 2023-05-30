import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import Cart from "./pages/cart"
import Signup from "./pages/signup"
import Home from "./pages/home"
import Login from "./pages/login"
import Phones from "./Data/Products/phones"
import Smart from "./Data/Products/smart"
import TVs from "./Data/Products/tv-s"
import Accessories from "./Data/Products/accessories" ;

function App() {
return (
   <div className="App">
 <Routes>
  <Route path="/"  element={ <Home/> }/>
  <Route path="shop"  element={ <Shop/> }/>
  <Route path="cart"  element={ <Cart/> }/>
  <Route path="signup"  element={ <Signup/> }/>
  <Route path="login"  element={ <Login/> }/>
  <Route path="phones"  element={ <Phones/> }/>
  <Route path="smart"  element={ <Smart/> }/>
  <Route path="tvs"  element={ <TVs/> }/>
  <Route path="accessories"  element={ <Accessories/> }/>
 </Routes>
   </div>
  )
}

export default App
