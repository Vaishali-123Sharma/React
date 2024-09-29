import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./foodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold p-2 m-2 text-xl">Welcome to Cart </h1>
      <button
        className="bg-green-700 p-3 m-3"
        onClick={() => handleClearCart()}
      >
        {" "}
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((items) => (
          <FoodItem key={items.id} {...items}></FoodItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
