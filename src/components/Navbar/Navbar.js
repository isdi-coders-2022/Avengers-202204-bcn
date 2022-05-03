import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faCirclePlus,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import NavbarStyle from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarStyle>
      <nav className="navbar">
        <ul className="list list-unstyled">
          <li>
            <NavLink to="/home">
              <FontAwesomeIcon
                className="icon fa-2xl"
                icon={faHouse}
              ></FontAwesomeIcon>
            </NavLink>
          </li>
          <li>
            <FontAwesomeIcon
              className="icon fa-2xl"
              icon={faMagnifyingGlass}
            ></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon
              className="icon fa-2xl"
              icon={faCirclePlus}
            ></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon
              className="icon fa-2xl"
              icon={faBookmark}
            ></FontAwesomeIcon>
          </li>
        </ul>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
