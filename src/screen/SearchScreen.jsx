import RecipesCardDisplay from "../components/common/RecipesCardDisplay/RecipesCardDisplay";
import RecipesFiltersBar from "../components/common/RecipesFiltersBar/RecipesFiltersBar";
import SearchBar from "../components/common/SearchBar/SearchBar";

import { searchScreenRecipeData } from "../data/searchScreenRecipeData";

export default function SearchScreen() {
  let searchScreenRecipes = searchScreenRecipeData;

  const recipesList = searchScreenRecipes.map((recipes) => (
      <RecipesCardDisplay
        key={recipes.id}
        hasHeader={false}
        imageSrc={recipes.imageSrc}
        profilName={recipes.profilName}
        recipeTitle={recipes.recipeTitle}
      />
  ));

  return (
    <>
      <div className="">
        <SearchBar />
        <RecipesFiltersBar />
        <section>{recipesList}</section>
      </div>
    </>
  );
}

// puisque chaque RecipesCardDisplay a déjà une key unique, les fragments (<> </>) ne sont pas nécessaires ici 