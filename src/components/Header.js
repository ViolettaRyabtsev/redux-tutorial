import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui-fixed-menu">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
