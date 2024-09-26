import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);
  console.log(restaurant);

  if (!restaurant) {
    return <h1>Loading...</h1>; // Display loading message if restaurant data is null
  }

  return (
    <div>
      <h1>Restaurant Id: {id}</h1>
      <h2>Restaurant Name: {restaurant.text || "Unknown Name"}</h2>
    </div>
  );
};

export default RestaurantMenu;
