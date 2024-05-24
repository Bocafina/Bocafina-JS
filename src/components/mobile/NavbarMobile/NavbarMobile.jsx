import './navbarMobile.scss'
import { Link } from "react-router-dom";
import  Nav  from "react-bootstrap/Nav";
import { NavItem } from "react-bootstrap";

const NavbarMobile = () => {
  return (
    <>
   
      <Nav className="justify-content-center">
        <NavItem>
          <Link to="/">home</Link>  
        </NavItem>
        <NavItem>
          <Link to="/search">Tu veux quoi ?</Link>  
        </NavItem>
        
        <Link to="/cookbook">Le livre de recettes de mamie</Link>
        <Link to="/menus">On va planifier, quoi</Link>
        <Link to="/groceries">Les courses tavu</Link>
      </Nav>
    </>
  );
};

export default NavbarMobile;
