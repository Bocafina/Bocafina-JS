import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navbarDesktop.scss";

import NavbarIcon from "../../common/NavbarIcon/NavbarIcon";
import Logo from "../../common/Logo/Logo";
import ProfilePic from "../../common/ProfilePic/ProfilePic";
import Contact from "./Contact/Contact";
import BtnBlackGreen from "../../common/BtnBlackGreen/BtnBlackGreen";
import SocialMedias from "./SocialMedias/SocialMedias";

const NavbarDesktop = () => {
  return (
    <>
      <aside className="bg-primary me-2 p-1 rounded-3 d-none d-md-block">
        <div className="d-flex flex-column justify-content-between h-100">
          <div className="d-flex flex-column">
            <Logo />
            <ProfilePic profilePicSrc="profilepiccat.png" />
            <BtnBlackGreen btnName="modifier le profil" />
            <hr className="text-secondary mx-3 border border-1" />

            <Nav className="gap-4 my-5">
              <NavbarIcon icon="home" name="Accueil" as={Link} to="/" />
              <NavbarIcon icon="search" name="Recherche" as={Link} to="/search" />
              <NavbarIcon icon="cookbook" name="Cookbook" as={Link} to="/cookbook" />
              <NavbarIcon icon="menus" name="Planner" as={Link} to="/planner" />
              <NavbarIcon icon="groceries" name="Courses" as={Link} to="/groceries" />
            </Nav>
            <hr className="text-secondary mx-3 border border-1" />
          </div>
          <div className="d-flex flex-column align-items-center">
            <SocialMedias />
            <Contact />
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavbarDesktop;

// as={Link} si NavbarIcon est conçu pour être utilisé avec React Router,
// alors oui, vous devez inclure as={Link} dans votre code.
// Cela garantira que les liens sont correctement gérés par React Router
// et qu'ils utilisent la navigation de l'application au lieu du comportement par défaut des liens HTML.
