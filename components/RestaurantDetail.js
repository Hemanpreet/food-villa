import { createRoutesFromElements, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "./config";
import { restaurantList } from "./config";
import Shimmer from "./Shimmer";
import useRestaurantDetail from "./utils/useRestaurantDetail";
import { addItem } from "./utils/cartSlice";
import {useDispatch} from "react-redux";
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
return menuInfo;
}
const RestaurantDetail = () => {
  const {resId} = useParams();
  // const [restaurant, setRestaurant] = useState(null);
  const restaurant=useRestaurantDetail(resId);
 const dispatch=useDispatch();
 const addFoodItem = (menuInfo) =>{
  dispatch(addItem(menuInfo));
 }
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
         <>
          <div className="text-lg">{menuInfo.name}</div>
          <div className="text-lg">{menuInfo.category}</div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          <button className="p-1 mb-2 bg-blue-300 hover:bg-gray-400  rounded-lg text-xl font-bold" 
          onClick={()=>addFoodItem(menuInfo)}>Add Item</button>
          <hr class="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
          <hr class="h-1 mx-auto mt-2 mb-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
         </>
        );
       })}
       

       </div>
    </div>
  );  
};

export default RestaurantDetail;
