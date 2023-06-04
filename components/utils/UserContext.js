import { createContext } from "react";

const UserContext=createContext({
    user:{
        name:"Hemanpreet Kaur",
        email:"hemanpreet7gmail.com",
    },
});

export default UserContext;