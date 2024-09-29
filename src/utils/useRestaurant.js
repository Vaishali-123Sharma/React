import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, [id]);

  async function getRestaurantDetails() {
    try {
      const data = await fetch(FETCH_MENU_URL + id);
      const json = await data.json();
      setRestaurant(json?.data?.cards[0]?.card?.card);
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  }

  return restaurant;
};

export default useRestaurant;
