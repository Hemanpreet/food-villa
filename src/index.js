import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
// import About from "../components/About";
import Error from "../components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Contact from "../components/Contact";
import RestaurantDetail from "../components/RestaurantDetail";
import Profile from "../components/Profile";
import {lazy,Suspense} from "react";
import Shimmer from "../components/Shimmer";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../components/utils/store";
import Cart from "../components/Cart";
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

const Instamart=lazy(()=>import("../components/Instamart"));
const About=lazy(()=>import("../components/About"));
const Contact=lazy(()=>import("../components/Contact"));
const AppLayout = () => {

  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element:
        (
          <Suspense fallout={<h1>still processing</h1>}>
          <About />
        </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element:
        (
          <Suspense>
          <Contact />
          </Suspense>
        ) ,
      },
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetail />,
      },
      {
        path: "/instamart",
        element: 
        (
          <Suspense fallback={<Shimmer/>}>
             <Instamart />
          </Suspense>
       ),
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
