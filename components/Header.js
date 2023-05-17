import Title from "../components/Title.js";
import { NavItems } from "../components/NavItems";
import {useState} from "react";
const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(true);  
    return(
    <div className="header">
     <Title/>
     <NavItems/>
     {
      isLoggedIn? (
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
      ):
      (
          <button onClick={()=>setIsLoggedIn(true)}>Login</button>
      )
     }
    </div>
    );
};
  export default Header;