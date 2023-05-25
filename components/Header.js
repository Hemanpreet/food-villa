import Title from "../components/Title.js";
import { NavItems } from "../components/NavItems";
import {useState} from "react";
import useOnline from "./utils/useOnline.js";
const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(true);  
  const isOnline=useOnline();
    return(
    <div className="header">
     <Title/>
     <NavItems/>
     <h1>{isOnline?"☑️":"🔼"}</h1>
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