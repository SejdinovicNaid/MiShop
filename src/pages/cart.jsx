import { Link } from "react-router-dom"
import Header from "./header"

function Cart() {
    return(
        <div className="bg-gray-300">
            <Header/>
            {/*Top section */}
          <div className="top shadow-sm  sticky top-0 mt-10 mb-10 ml-[25%] bg-gradient-to-r from-gray-300 via-black to-gray-300  h-36 w-[50%]" >
           <h2 className="text-2xl text-orange-500 text-center pt-3">Subtotal : </h2>
          </div>

          {/*Bottom section */}
           <div className="bottom border-2 border-black ">

            </div> 
    
</div>

       
    )
}

export default Cart