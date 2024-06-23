import NavbarIcon from "../NavbarIcon/NavbarIcon";
import "./navbarMobile.scss";

import Nav from "react-bootstrap/Nav";

const NavbarMobile = () => {
  return (
    <>
      <div className="navbar-mobile container-fluid d-md-none">
        <Nav className="justify-content-around align-items-baseline">
          <NavbarIcon icon="home" name="Acceuil" to="/" />
          <NavbarIcon icon="search" name="Recherche" to="/search" />
          <NavbarIcon icon="cookbook" name="Cookbook" to="/cookbook" />
          <NavbarIcon icon="menus" name="Planner" to="/planner" />
          <NavbarIcon icon="groceries" name="Courses" to="/groceries" />
        </Nav>
      </div>
    </>
  );
};

export default NavbarMobile;
