import UserContext from "../utils/userContext";
import { useContext } from "react";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <span className="p-10 m-10 font-bold">
        This site is developed by {user.name}-{user.email}
      </span>
    </div>
  );
};

export default Footer;
