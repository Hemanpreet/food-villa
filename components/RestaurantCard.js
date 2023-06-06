import { IMG_CDN_URL } from "./config";
import { restaurantList } from "./config";
const RestaurantCard = (props) => {
  //  const {user}=useContext(UserContext);
    return (
      <div className="card text-xl font-bold p-5 m-2 bg-blue-300">
        <img
          src={IMG_CDN_URL +props?.restaurantItem?.data?.cloudinaryImageId}
        />
        <div className="restName font-bold text-xl">{props?.restaurantItem?.data?.name}</div>
        <div className="cuisine"> {props?.restaurantItem?.data?.cuisines.join(",")}
        </div>
        <div className="lastMil">
          {props?.restaurantItem?.data?.lastMileTravelString}
        </div>

      </div>
    );
  };
  
export default RestaurantCard;