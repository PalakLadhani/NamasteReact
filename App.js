import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "lavender" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660" +
          resData.data.cloudinaryImageId
        }
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>{resData.data.avgRating}</h4>
      <h4>{resData.data.costForTwo / 100}</h4>
      <h4>{resData.data.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/restaurant")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {restaurants
          ? restaurants.map((res) => (
              <RestaurantCard key={res.data.id} resData={res} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
