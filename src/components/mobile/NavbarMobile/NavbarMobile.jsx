import "./navbarMobile.scss";

import Nav from "react-bootstrap/Nav";
import NavbarMobileIcone from "./NavbarMobileIcone/NavbarMobileIcone";

const NavbarMobile = () => {
  return (
    <>
      <div className="navbar-mobile container-fluid">
        <Nav className="justify-content-around">
          <NavbarMobileIcone icone="homeIcon.svg" name="Acceuil" to="/" />
          <NavbarMobileIcone icone="searchIcon.svg" name="Recherche" to="/search" />
          <NavbarMobileIcone icone="cookbookIcon.svg" name="CookBook" to="/cookbook" />
          <NavbarMobileIcone icone="menusIcon.svg" name="Planificateur" to="/menus" />
          <NavbarMobileIcone icone="groceriesIcon.svg" name="Courses" to="/groceries" />
        </Nav>
      </div>
    </>
  );
};

export default NavbarMobile;
