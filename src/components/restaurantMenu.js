import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log({ id });

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const [restaurant, setRestaurant] = useState({});

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card);
  }

  return (
    <div>
      <h1>Restaurant Id : {id}</h1>
      <h2>Restaurant Name: {restaurant.text}</h2>
    </div>
  );
};

export default RestaurantMenu;
