import "./navbarMobile.scss";

import Nav from "react-bootstrap/Nav";
import NavbarMobileIcon from "./NavbarMobileIcon/NavbarMobileIcon";

const NavbarMobile = () => {
	return (
		<>
			<div className="navbar-mobile container-fluid d-md-none">
				<Nav className="justify-content-around align-items-baseline">
					<NavbarMobileIcon icon="home" name="Acceuil" to="/" />
					<NavbarMobileIcon icon="search" name="Recherche" to="/search" />
					<NavbarMobileIcon icon="cookbook" name="CookBook" to="/cookbook" />
					<NavbarMobileIcon icon="menus" name="Planificateur" to="/menus" />
					<NavbarMobileIcon icon="groceries" name="Courses" to="/groceries" />
				</Nav>
			</div>
		</>
	);
};

export default NavbarMobile;
