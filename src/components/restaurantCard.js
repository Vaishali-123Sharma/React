import { IMG_CONST_LINK } from "../constants";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return (
      <div className="card">
        <img
          src={
            IMG_CONST_LINK + cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
};

export default RestrauntCard;