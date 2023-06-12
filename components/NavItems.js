import {Link} from "react-router-dom";
import Instamart from "./Instamart";
import {useSelector} from "react-redux";
// functional component 2-NavItems of Header i.e navbar
export const NavItems = () => {
  const cartItems=useSelector(store=>store.cart.items);
    return(
    <div>
      <ul className="flex py-10">
      <Link to="/">
      <li className="px-3 hover:bg-slate-200 text-xl font-bold">Home</li>
      </Link> 
       <Link to="/about">
       <li className="px-3 hover:bg-slate-200 text-xl font-bold">About</li>
       </Link>
       <Link to="/contact">
        <li className="px-3 hover:bg-slate-200 text-xl font-bold">Contact</li>
        </Link>
        <Link to="/instamart">
          <li className="px-3 hover:bg-slate-200 text-xl font-bold">Instamart</li>
        </Link>
        <Link to="/cart">
        <li className="px-3 hover:bg-slate-200 text-xl font-bold">Cart-{cartItems.length} items</li>
        </Link>
       
  
      </ul>
    </div>
    );
};
//   named export can export multiple components in a file
