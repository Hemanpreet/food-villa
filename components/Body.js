import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchTxt, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
     );
}

Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {

    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4089123&lng=77.3177894&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // when page loads for the first time we want to set/populate with both all restaurants and filtered restaurants
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants.length===0?<Shimmer/>: (
    <>
      <div className="search-container">
        {/* make an input box */}
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>No restaurant match your filter</h1>
        ) : (
          filteredRestaurants.map((restaurantItem, index) => {
            return <RestaurantCard restaurantItem={restaurantItem}  key={index} />;
          })
          /* here restaurants is the array created using restaurantList and state variable */
          /* restaurantItem is the item one by one present in restaurants array  */
          /* restaurant is the prop passed to RestaurantCard  */

          /* <RestaurantCard restaurant={restaurants[0]} />
        <RestaurantCard restaurant={restaurants[1]} />
        <RestaurantCard restaurant={restaurants[2]} />
        <RestaurantCard restaurant={restaurants[3]} />
        <RestaurantCard restaurant={restaurants[4]} />
        <RestaurantCard restaurant={restaurants[5]} />
        <RestaurantCard restaurant={restaurants[6]} />
        <RestaurantCard restaurant={restaurants[7]} /> */
        )}
        ;
      </div>
    </>
  );
};

export default Body;