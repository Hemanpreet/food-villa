import Title from "../components/Title.js";
import { NavItems } from "../components/NavItems";
import {useState} from "react";
import useOnline from "./utils/useOnline.js";
const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(true);  
  const isOnline=useOnline();
    return(
    <div className="flex justify-between bg-cyan-600 shadow-xl sm:bg-blue-100">
     <Title/>
     <NavItems/>
     <h1 className="my-10">{isOnline?"☑️":"🔼"}</h1>
     {
      
      isLoggedIn? (
        <button className="my-9 p-2 bg-pink-200 hover:bg-gray-400  rounded-lg" onClick={()=>setIsLoggedIn(false)}>Logout</button>
      ):
      (
          <button className="my-9 p-2 bg-pink-200 hover:bg-gray-400  rounded-lg" onClick={()=>setIsLoggedIn(true)}>Login</button>
      )
     }
    </div>
    );
};
  export default Header;