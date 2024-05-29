import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { NavItem } from "react-bootstrap";


import "./navbarMobileIcon.scss";


const NavbarMobileIcon = (props) => {

  const resolvedPath = useResolvedPath(props.to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <>
      <NavItem>
        <Link className="nav-link" to={props.to}>
          <div className="icon-wrapper flex-between">
            <img className={isActive  ? "isActive" : ""} src={`src/assets/svg/${props.icon}`} alt={`image ${props.icon}`} />
            <p className={isActive  ? "text-tertiary" : "text-secondary"}>{props.name}</p>
          </div>
        </Link>
      </NavItem>
    </>
  );
};



export default NavbarMobileIcon;
