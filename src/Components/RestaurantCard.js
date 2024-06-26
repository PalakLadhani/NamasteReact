import { CON_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "lavender" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CON_URL + resData.data.cloudinaryImageId}
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>{resData.data.avgRating}</h4>
      <h4>{resData.data.costForTwo / 100}</h4>
      <h4>{resData.data.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
