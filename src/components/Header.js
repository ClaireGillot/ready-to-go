import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon
        className="userAstronaut"
        icon="userAstronaut"
        size="2x"
      />
      <h1>Ready To Go</h1>
    </div>
  );
};

export default Header;
