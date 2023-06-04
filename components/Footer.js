import React,{ useContext } from "react";
import UserContext from "./utils/UserContext"
const Footer = () => {
   const {user}=useContext(UserContext);
return (
 <h1 className="text-center sm:bg-blue-100">Copyright © {user.name}-{user.email}</h1> 
);
};
  export default Footer;