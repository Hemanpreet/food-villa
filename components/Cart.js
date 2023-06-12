 import { useDispatch, useSelector } from "react-redux";
 import FoodItems from "./FoodItems";
 import { clearCart } from "./utils/cartSlice.js";
const Cart=()=>{
    const cartItems=useSelector(store=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    };
    return(
    <div>
        <h1 className="font-bold text-3xl">Cart Items -{cartItems.length}</h1>
        <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()} >Clear cart</button>
        <div>
        {cartItems.map((item)=>(
            <FoodItems key={item.id} {...item}/>
        ))}
        </div>
    </div>
)
};
export default Cart;