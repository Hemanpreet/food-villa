import { IMG_CDN_URL } from "./config";
import { restaurantList } from "./config";
const FoodItems = ({name}) => {
    return (
      <div className="card text-xl font-bold p-5 m-2 bg-blue-300">
        <div className="font-bold text-xl">{name}</div>
      </div>
    );
  };
  
export default FoodItems;