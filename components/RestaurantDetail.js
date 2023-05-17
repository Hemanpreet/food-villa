import { createRoutesFromElements, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "./config";
import { restaurantList } from "./config";
const RestaurantDetail = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4089123&lng=77.3177894&restaurantId=22487&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurant(json.data);
    //  console.log(restaurant?.cards[0]?.card?.card?.info.name);
  }
  return (
    <div className="menu">
        <h1>Restaurant id: {params.id}</h1>
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
