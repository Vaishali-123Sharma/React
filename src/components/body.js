import { restrautList } from "../constants"; 
import RestrauntCard from "./restaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((resData) =>
    resData.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restrautList);
  const [searchText, setSearchText] = useState(""); // State variable for search text

  return (
    <>
      <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search" 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button 
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restrautList); // Use original list for filtering
            setRestaurants(data);
          }}>
          Search 
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => ( // Use the state variable here
          <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
