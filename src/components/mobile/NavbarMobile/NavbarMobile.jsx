import "./navbarMobile.scss";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { NavItem } from "react-bootstrap";

const NavbarMobile = () => {
  return (
    <>
      <div className="navbar-mobile container-fluid">
        <Nav className="justify-content-around">
          <NavItem>
            <Link to="/">
              <img src="src\assets\svg\homeIcone.svg" alt="" />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/cookbook">
              <img src="src\assets\svg\searchIcone.svg" alt="" />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/search">
              <img src="src\assets\svg\cookbookIcone.svg" alt="" />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/menus">
              <img src="src\assets\svg\menusIcone.svg" alt="" />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/groceries">
              <img src="src\assets\svg\groceriesIcone.svg" alt="" />
            </Link>
          </NavItem>
        </Nav>
      </div>
    </>
  );
};

export default NavbarMobile;
