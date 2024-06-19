import SearchScreenView from "./SearchScreenView";

import { searchScreenRecipeData } from "../../../../data/searchScreenRecipeData.js";

export default function SearchScreen() {
  let Recipes = searchScreenRecipeData;

  return (
    <>
      <SearchScreenView Recipes={Recipes} />
    </>
  );
}

// puisque chaque RecipesCardDisplay a déjà une key unique, les fragments (<> </>) ne sont pas nécessaires ici
