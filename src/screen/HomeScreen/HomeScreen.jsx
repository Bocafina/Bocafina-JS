import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProfilePic from "../../components/common/ProfilePic/ProfilePic";
import Logo from "../../components/common/Logo/Logo";
import RecipesCardDisplay from "../../components/common/RecipesCardDisplay/RecipesCardDisplay";
import "./homeScreen.scss";

import { homeScreenRecipesData } from "../../data/homeScreenRecipesData";

export default function HomeScreen() {
  let homeScreenRecipes = homeScreenRecipesData;
  

  const RecipesList = homeScreenRecipes.map((recipes) => (
    <RecipesCardDisplay
      to={recipes.recipeTitle}
      key={recipes.id}
      isHomeScreen={true}
      imageSrc={recipes.imageSrc}
      profilName={recipes.profilName}
      recipeTitle={recipes.recipeTitle}
    />
  ));

  

  return (
    <>
      <div className="container-fluid">
        <div className="w-100 flex-between">
          <div>
            <Logo />
          </div>
          <div className="sizeNotif">
            <Image className="mt-1 ms-2" src="../../src/assets/svg/notification-icon.svg" alt="Notification icon" />
          </div>
          <div className="posProfilePic">
            <Link to="/login">
            <ProfilePic profilePicSrc="profilepiccat.png" />
            </Link>
          </div>
        </div>

        {RecipesList}
      </div>
    </>
  );
}

// puisque chaque RecipesCardDisplay a déjà une key unique, les fragments (<> </>) ne sont pas nécessaires ici
