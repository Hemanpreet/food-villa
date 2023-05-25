import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../config";
const useRestaurantDetail = (resId)=>{
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
      }, []);
      async function getRestaurantInfo() {
        const data = await fetch(
          FETCH_MENU_URL+resId
        );
        const json = await data.json();
        setRestaurant(json.data);
        //  console.log(restaurant?.cards[0]?.card?.card?.info.name);
      }
      return restaurant;
}

export default useRestaurantDetail;