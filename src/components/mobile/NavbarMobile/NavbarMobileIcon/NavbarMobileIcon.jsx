import { Link } from "react-router-dom";
import { NavItem } from "react-bootstrap";


import "./navbarMobileIcon.scss";


const NavbarMobileIcon = (props) => {
  return (
    <>
      <NavItem>
        <Link className="nav-link" to={props.to}>
          <div className="icon-container">
            <img src={`src/assets/svg/${props.icon}`} alt={`image ${props.icon}`} />
            <p>{props.name}</p>
          </div>
        </Link>
      </NavItem>
    </>
  );
};



export default NavbarMobileIcon;
