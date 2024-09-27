import { IMG_CONST_LINK } from "../constants";

const RestrauntCard = ({ description, entityType, imageId }) => {
  console.log("Rendering RestaurantCard");
  return (
    <div className="w-56 p-5 m-5 shadow-lg bg-pink-50">
      <img src={IMG_CONST_LINK + imageId} />
      <h2 className="font-bold text-xl">{description}</h2>
      <h3>{entityType}</h3>
    </div>
  );
};

export default RestrauntCard;
