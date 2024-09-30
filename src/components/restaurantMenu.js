import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { foodItems } from "../constants";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);
  console.log(restaurant);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (!restaurant) {
    return <h1>Loading...</h1>; // Display loading message if restaurant data is null
  }

  return (
    <div>
      <h1>Restaurant Id: {id}</h1>
      <h2>Restaurant Name: {restaurant.text || "Unknown Name"}</h2>
      <div>
        <h1>Menu</h1>
        <ul className="flex" data-testid="menu">
          {foodItems.map((item) => (
            <li className="p-3 m-3" key={item.id}>
              <h3 className="font-bold">{item.name}</h3>
              <img src={item.imageUrl} alt={item.name} width="100" />
              <p className="font-serif">{item.description}</p>
              <button
                data-testid="addBtn"
                className="bg-green-500 p-1"
                onClick={() => addFoodItem(item)}
              >
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
