import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
const About =()=>{
    return(
        <div className="bg-zinc-100 ml-7">
         <h1>About us page</h1>
        <p>hello this is food villa website welcome to our page</p>
        <Outlet/>
        <ProfileClass name={"Hemanpreet"}/>
        </div>
       
    )
};
export default About;
