import "./navbarIcon.scss";

import * as navbarIcon from "../../../assets/svg/icon/_navbarIcon";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { NavItem } from "react-bootstrap";

const NavbarIcon = (props) => {
  const iconMapping = {
    home: navbarIcon.homeIcon,
    search: navbarIcon.searchIcon,
    cookbook: navbarIcon.cookbookIcon,
    menus: navbarIcon.menusIcon,
    groceries: navbarIcon.groceriesIcon,
  };

  const resolvedPath = useResolvedPath(props.to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const Icon = iconMapping[props.icon];

  return (
    <>
      <NavItem className="sizeNavbarDesktopIcon">
        <Link className="nav-link d-flex flex-column justify-content-center text-decoration-none" to={props.to}>
          <div className="icon-wrapper d-flex align-items-center">
            <img className={isActive ? "isActive" : ""} src={Icon} alt={`image ${props.icon}`} />
            <p className={isActive ? "text-tertiary font-bold" : "text-secondary font-bold"}>{props.name}</p>
          </div>
        </Link>
      </NavItem>
    </>
  );
};

export default NavbarIcon;
