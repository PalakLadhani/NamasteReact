import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import restaurantData from "../utils/mockData";
const Body = () => {
  // Local State Variable-Super Powerful variable

  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantData);
  // //Normal Javascript variable

  // const [restaurants, setRestaurants] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3001/restaurant")
  //     .then((response) => response.json())
  //     .then((data) => setRestaurants(data))
  //     .catch((error) => console.error("Error fetching data: ", error));
  // }, []);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
