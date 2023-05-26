import { IMG_CDN_URL } from "./config";
import { restaurantList } from "./config";
const RestaurantCard = (props) => {
    return (
      <div className="card w-[30rem] p-3 m-3 shadow-lg bg-cyan-600">
        <img
          src={IMG_CDN_URL +props?.restaurantItem?.data?.cloudinaryImageId}
        />
        <div className="restName font-bold text-xl">{props?.restaurantItem?.data?.name}</div>
        <div className="cuisine"> {props?.restaurantItem?.data?.cuisines.join(",")}
        </div>
        <div className="lastMil">
          {props?.restaurantItem?.data?.lastMileTravelString} minutes
        </div>
      </div>
    );
  };
  
export default RestaurantCard;