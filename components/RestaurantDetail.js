import { createRoutesFromElements, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "./config";
import { restaurantList } from "./config";
import Shimmer from "./Shimmer";
import useRestaurantDetail from "./utils/useRestaurantDetail";
const RestaurantDetail = () => {
  const {resId} = useParams();
  // const [restaurant, setRestaurant] = useState(null);
  const restaurant=useRestaurantDetail(resId);
  
  return (!restaurant)?<Shimmer/>:(
    <div className="menu">
        <h1>Restaurant id: {resId}</h1>
       <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[0]?.card?.card?.info?.cuisines}</h3>
        <h4>{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h4>   
    </div>
  );
};

export default RestaurantDetail;
