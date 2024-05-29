import "./navbarMobile.scss";

import Nav from "react-bootstrap/Nav";
import NavbarMobileIcon from "./NavbarMobileIcon/NavbarMobileIcon";

const NavbarMobile = () => {
	return (
		<>
			<div className="navbar-mobile container-fluid">
				<Nav className="justify-content-around align-items-baseline">
					<NavbarMobileIcon icon="homeIcon.svg" name="Acceuil" to="/" />
					<NavbarMobileIcon
						icon="searchIcon.svg"
						name="Recherche"
						to="/search"
					/>
					<NavbarMobileIcon
						icon="cookbookIcon.svg"
						name="CookBook"
						to="/cookbook"
					/>
					<NavbarMobileIcon
						icon="menusIcon.svg"
						name="Planificateur"
						to="/menus"
					/>
					<NavbarMobileIcon
						icon="groceriesIcon.svg"
						name="Courses"
						to="/groceries"
					/>
				</Nav>
			</div>
		</>
	);
};

export default NavbarMobile;
