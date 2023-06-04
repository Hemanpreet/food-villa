import { createContext } from "react";

const UserContext=createContext({
    user:{
        name:"Hemanpreet Kaur",
        email:"hemanpreet7@gmail.com",
    },
});

export default UserContext;