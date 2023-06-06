import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
const About =()=>{
    return(
        <div>
         <div className="text-xl font-bold p-5 m-2 bg-blue-300">About us page</div>
        <p className="text-xl font-bold p-5 m-2 bg-blue-300">hello this is food villa website welcome to our page</p>
        <Outlet/>
        <ProfileClass name={"Hemanpreet"}/>
        </div>
       
    )
};
export default About;
