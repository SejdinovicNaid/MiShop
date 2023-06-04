import { Link } from "react-router-dom"
import Header from "./header"
import { useStateValue } from "../Components/StateProvider";
import { getCartTotal } from "../Components/reducer";

function Cart() {

    const [ { cart },  dispatch ] = useStateValue();



    return(
        <div className="bg-gray-300 ">
            <Header/>
            {/*Top section */}
          <div className="top   sticky top-0 mt-10 mb-10 ml-[25%] bg-gradient-to-r from-gray-300 via-black to-gray-300  h-36 w-[50%]" >
           <h2 className="text-2xl text-orange-500 text-center pt-3">Subtotal : <span> </span> </h2>
           <h2 className="text-2xl text-orange-500 text-center pt-2"> <span> { cart?.length } </span> Items = <span>${getCartTotal(cart)} </span> </h2>
           <button className="bg-orange-500 rounded-lg text-black text-xl  text-center mt-3 h-7 ml-[37%] w-52 font-semibold ">Proceed to Pay</button>
          </div>

          {/*Bottom section */}
           <div className="bottom border-2 border-black flex flex-row  ">
              <div className="ml-[15%] h-72 w-[70%] border-2 border-red-600 bg-white grid grid-cols-3">
                  <img src="" alt=""  className="border-2 border-green-600 h-[80%] w-52 mt-[7.5%] ml-20"/>
                   <p className="border-2 border-yellow-500 h-60 mt-5"> </p>
                  <div className="border-2 border-purple-800 w-64 ml-16 h-60 mt-5"></div>
              </div>

            </div> 
    
</div>

       
    )
}

export default Cart