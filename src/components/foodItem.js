import { useContext } from "react";
import UserContext from "../utils/userContext";

const FoodItem = ({ name, imageUrl, id, description }) => {
  const { user } = useContext(UserContext);

  return (
    <div key={id} className="w-56 p-5 m-5 shadow-lg bg-pink-50">
      <img src={imageUrl} />
      <h3 className="font-bold text-xl">{name}</h3>
      <h2 className="font-serif text-lg">{description}</h2>
    </div>
  );
};

export default FoodItem;
