import { IMG_CONST_LINK } from "../constants";

const RestrauntCard = ({
    description,
    entityType,
    imageId,
  }) => {
    return (
      <div className="card">
        <img
          src={
            IMG_CONST_LINK + imageId
          }
        />
        <h2>{description}</h2>
        <h3>{entityType}</h3>
      </div>
    );
};

export default RestrauntCard;