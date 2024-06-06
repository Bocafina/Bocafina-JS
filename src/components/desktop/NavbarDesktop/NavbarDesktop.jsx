import NavbarIcon from "../../common/NavbarIcon/NavbarIcon";
import "./navbarDesktop.scss";
// import "./../Navbaricon/navbaricon.scss";


import Nav from "react-bootstrap/Nav";

const NavbarDesktop = () => {
	return (
		<>
			<div className="navbar-desktop">
			<Nav className="my-5 mx-4 flex-column align-content-baseline gap-5 w-75">
				<NavbarIcon icon="home" name="Accueil" to="/" />
				<NavbarIcon icon="search" name="Recherche" to="/search" />
				<NavbarIcon icon="cookbook" name="CookBook" to="/cookbook" />
				<NavbarIcon icon="menus" name="Planner" to="/menus" />
				<NavbarIcon icon="groceries" name="Courses" to="/groceries" />
			</Nav>
			</div>
		</>
	);
};

export default NavbarDesktop;
