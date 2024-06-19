import RecipesCardDisplay from "../../../shared/components/RecipesCardDisplay/RecipesCardDisplay";
import RecipesFiltersBar from "../../../shared/components/RecipesFiltersBar/RecipesFiltersBar";
import SearchBar from "../../../shared/components/SearchBarMobile/SearchBarMobile";

export default function SearchScreenView(props) {
  let searchScreenRecipes = props.Recipes;

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
