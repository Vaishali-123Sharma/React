import { IMG_CONST_LINK } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestrauntCard = ({ description, entityType, imageId }) => {
  const { user } = useContext(UserContext);
  console.log("Rendering RestaurantCard");
  return (
    <div className="w-56 p-5 m-5 shadow-lg bg-pink-50">
      <img src={IMG_CONST_LINK + imageId} />
      <h2 className="font-bold text-xl">{description}</h2>
      <h3>{entityType}</h3>
      <h3 className="font-bold">{user.name}</h3>
      <h3 className="font-bold">{user.email}</h3>
    </div>
  );
};

export default RestrauntCard;
