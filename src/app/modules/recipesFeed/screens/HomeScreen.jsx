import "./homeScreen.scss";
import HomeScreenView from "./HomeScreenView.jsx";

import { homeScreenRecipesData } from "../../../../data/homeScreenRecipesData.js";



export default function HomeScreen() {
  let homeScreenRecipes = homeScreenRecipesData;

  
  return (
    <>
    <HomeScreenView recipies={homeScreenRecipes}/>
    </>
  );
}
