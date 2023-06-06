import { createRoutesFromElements, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "./config";
import { restaurantList } from "./config";
import Shimmer from "./Shimmer";
import useRestaurantDetail from "./utils/useRestaurantDetail";
const functionCheck=(restaurant)=>{
  let menuInfo=[];
if(restaurant!==null){
let cards=restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
if(cards!==null){
  for(let i=0;i<cards.length;i++){ 
    let itemCards=cards[i]?.card?.card?.itemCards;
      if (Array.isArray(itemCards)) {
          for(let j=0;j<itemCards.length;j++){
        menuInfo.push({
          name:itemCards[j].card?.info?.name,
          category:itemCards[j].card?.info?.category,
        })
      }
      } 
    
    }
  }
}
 console.log(menuInfo,"heman the cutie");
return menuInfo;
}
const RestaurantDetail = () => {
  const {resId} = useParams();
  // const [restaurant, setRestaurant] = useState(null);
  const restaurant=useRestaurantDetail(resId);
let menuArray=functionCheck(restaurant);
  return (!restaurant)?<Shimmer/>:(
    <div className="menu">
        <div className="text-xl font-bold p-5 m-2 bg-blue-300">Restaurant id: {resId}</div>
       <div className="text-xl font-bold p-5 m-2 bg-blue-300">{restaurant?.cards[0]?.card?.card?.info?.name}</div>
        <img className="p-5 m-2 border-blue-800 border-2"
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <div className="text-xl font-bold p-5 m-2 bg-blue-300">{restaurant?.cards[0]?.card?.card?.info?.cuisines}</div>
        <div className="text-xl font-bold p-5 m-2 bg-blue-300">{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</div> 
          <br></br>
        <div className="text-xl font-bold p-5 m-2 bg-pink-200 text-center">MENU OF {restaurant?.cards[0]?.card?.card?.info?.name}</div>

       <div className="font-bold p-5 m-2 bg-pink-200 pl-10">
       {menuArray.map((menuInfo,index)=>{
        return(
         <div>
          <h3>{menuInfo.name}</h3>
          <h3>{menuInfo.category}</h3>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          </div>
        );
       })}
       </div>
    </div>
  );  
};

export default RestaurantDetail;
