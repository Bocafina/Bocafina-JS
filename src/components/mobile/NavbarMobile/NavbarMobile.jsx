import "./navbarMobile.scss";

import Nav from "react-bootstrap/Nav";
import NavbarMobileIcone from "./NavbarMobileIcone/NavbarMobileIcone";

const NavbarMobile = () => {
  return (
    <>
      <div className="navbar-mobile container-fluid">
        <Nav className="justify-content-around">
          <NavbarMobileIcone icone="homeIcone.svg" name="Acceuil" to="/" />
          <NavbarMobileIcone icone="searchIcone.svg" name="Recherche" to="/search" />
          <NavbarMobileIcone icone="cookbookIcone.svg" name="CookBook" to="/cookbook" />
          <NavbarMobileIcone icone="menusIcone.svg" name="Planificateur" to="/menus" />
          <NavbarMobileIcone icone="groceriesIcone.svg" name="Courses" to="/groceries" />
        </Nav>
      </div>
    </>
  );
};

export default NavbarMobile;
