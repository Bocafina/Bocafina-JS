import { Link } from "react-router-dom";
import { NavItem } from "react-bootstrap";


import "./navbarMobileIcone.scss";

const NavbarMobileIcone = (props) => {
  return (
    <>
      <NavItem>
        <Link className="nav-link" to={props.to}>
          <div className="icon-container">
            <img src={`src/assets/svg/${props.icone}`} alt={`image ${props.icone}`} />
            <p>{props.name}</p>
          </div>
        </Link>
      </NavItem>
    </>
  );
};


export default NavbarMobileIcone;
