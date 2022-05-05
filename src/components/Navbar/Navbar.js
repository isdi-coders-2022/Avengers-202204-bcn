import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faCirclePlus,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import NavbarStyles from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarStyles>
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
            <NavLink to="/selected">
              <FontAwesomeIcon
                className="icon fa-2xl"
                icon={faBookmark}
              ></FontAwesomeIcon>
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavbarStyles>
  );
};

export default Navbar;
