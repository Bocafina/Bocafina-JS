import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { NavItem } from "react-bootstrap";

import homeIcon from "../../../../assets/svg/homeIcon.svg";
import searchIcon from "../../../../assets/svg/searchIcon.svg";
import cookbookIcon from "../../../../assets/svg/cookbookIcon.svg";
import menusIcon from "../../../../assets/svg/menusIcon.svg";
import groceriesIcon from "../../../../assets/svg/homeIcon.svg";

import "./navbarMobileIcon.scss";

const NavbarMobileIcon = (props) => {

const iconMapping = {
	home: homeIcon,
	search: searchIcon,
	cookbook: cookbookIcon,
	menus: menusIcon,
	groceries: groceriesIcon, 
}  

  const resolvedPath = useResolvedPath(props.to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const Icon = iconMapping[props.icon]

  return (
    <>
      <NavItem>
        <Link className="nav-link" to={props.to}>
          <div className="icon-wrapper flex-between">
            <img className={isActive ? "isActive" : ""} src={Icon} alt={`image ${props.icon}`} />
            <p className={isActive ? "text-tertiary font-bold" : "text-secondary font-bold"}>{props.name}</p>
          </div>
        </Link>
      </NavItem>
    </>
  );
};

export default NavbarMobileIcon;
