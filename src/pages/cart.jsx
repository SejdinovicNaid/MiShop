
import Header from "./header"
import { useStateValue } from "../Components/StateProvider";
import { getCartTotal } from "../Components/reducer";
import  CartProduct  from "../Components/cartProduct"
import { useNavigate} from "react-router-dom";

function Cart() {
const navigate = useNavigate()
    const [ { cart, user },  dispatch ] = useStateValue();



    return(
        <div className="bg-gray-300 ">
            <Header/>

      
            {/*Top section */}

         <div className="top   sticky top-24 mt-10 mb-10 ml-[25%] bg-gradient-to-r from-gray-300 via-black to-gray-300  h-36 w-[50%]" >
           <h2 className="text-2xl text-orange-500 text-center pt-3">Subtotal : <span> </span> </h2>
           <h2 className="text-2xl text-orange-500 text-center pt-2"> <span> { cart?.length } </span> Items = <span>$ {getCartTotal(cart)} </span> </h2>
           <button onClick={(e) => navigate('/payment')} className="bg-orange-600 rounded-lg text-black text-xl  text-center mt-3 h-7 ml-[37%] w-52 font-semibold shadow-md shadow-orange-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-500 ">Proceed to Delivery</button>
          </div>

          {/*Bottom section */}
           <div className="bottom  flex flex-col  ">
           {cart.map(item => (
            <CartProduct
            id={item.id}
            img = {item.img}
            name = {item.name}
            price = {item.price}
            
            />
           ) )}
          </div>

        </div>

       
    )
}

export default Cart