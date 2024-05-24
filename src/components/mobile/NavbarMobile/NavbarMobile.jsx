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
            <Link className="nav-link" to="/">
              <div className="icon-container">
                <img src="src\assets\svg\homeIcone.svg" alt="" />
                <p>Acceuil</p>
              </div>
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/search">
              <div className="icon-container">
                <img src="src\assets\svg\searchIcone.svg" alt="" />
                <p>Recherche</p>
              </div>
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/cookbook">
              <div className="icon-container">
                <img src="src\assets\svg\cookbookIcone.svg" alt="" />
                <p>Cookbook</p>
              </div>
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/menus">
              <div className="icon-container">
               <img src="src\assets\svg\menusIcone.svg" alt="" />
               <p>Planificateur</p> 
              </div>
              
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/groceries">
              <div className="icon-container">
                 <img src="src\assets\svg\groceriesIcone.svg" alt="" />
                 <p>Courses</p>
              </div>
             
            </Link>
          </NavItem>
        </Nav>
      </div>
    </>
  );
};

export default NavbarMobile;
