import { Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import RecipesCardDisplay from "../../components/common/RecipesCardDisplay/RecipesCardDisplay";
import "./homeScreen.scss";

import { homeScreenRecipesData } from "../../data/homeScreenRecipesData";

import Logo from "../../components/common/Logo/Logo";
import ProfilePic from "../../components/common/ProfilePic/ProfilePic";
import { notificationIcon } from "../../assets/svg/icon/_icon.js";


export default function HomeScreen() {
  let homeScreenRecipes = homeScreenRecipesData;

  const RecipesList = homeScreenRecipes.map((recipes) => (
    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} key={recipes.id}>
      <RecipesCardDisplay
        to={recipes.recipeTitle}
        isHomeScreen={true}
        imageSrc={recipes.imageSrc}
        profilName={recipes.profilName}
        recipeTitle={recipes.recipeTitle}
      />
    </Col>
  ));
  // puisque chaque RecipesCardDisplay a déjà une key unique, les fragments (<> </>) ne sont pas nécessaires ici

  return (
    <>
      {/* écrans mobiles */}
      <div className="d-md-none">
        <div className="flex-between">
          <div>
            <Logo />
          </div>
          <div className="sizeNotif">
            <Image className="mt-1 ms-2" src={notificationIcon} alt="Notification icon" />
          </div>
          <div className="profilePicSize">
            <Link to="/profiles/login">
              <ProfilePic profilePicSrc="profilepiccat.png" />
            </Link>
          </div>
        </div>
        {RecipesList}
      </div>

      {/* écrans dekstop */}
      <div className="d-none d-md-block">{/* main ici */}</div>
    </>
  );
}
