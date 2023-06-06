import React,{ useContext } from "react";
import UserContext from "./utils/UserContext"
const Footer = () => {
   const {user}=useContext(UserContext);
return (
 <h1 className="text-center sm:bg-blue-100 text-xl font-bold p-5 m-2">Copyright © {user.name}-{user.email}</h1> 
);
};
  export default Footer;