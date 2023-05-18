import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import About from "../components/About";
import Error from "../components/Error"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "../components/Contact";
import RestaurantDetail from "../components/RestaurantDetail";
// Functional component header which will include Title/logo and right side navbar i.e NavItems


// const OmSweetsAndSnacks = {
//     name:"Om Sweets And Snacks",
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/iek05muz5f1ntrjhbqjv",
//     cuisines:["Sweets","North Indian","South Indian","Chinese","Snacks","Desserts","Bakery"],
//     rating:"4.2"

// }
// const RestaurantCard = () => (
//   <div className="card">
//     <img src={OmSweetsAndSnacks.image} />
//     <h2>{OmSweetsAndSnacks.name}</h2>
//     <h3>{OmSweetsAndSnacks.cuisines.join(",")}</h3>
//     <h4>{OmSweetsAndSnacks.rating} stars</h4>
//   </div>
// );
// restaurantList is an object


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantDetail/>
      },
    ]
  },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
