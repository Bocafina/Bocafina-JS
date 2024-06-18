import "./recipesFiltersBar.scss";

import RecipesFiltersBtn from "./RecipesFiltersBtn/RecipesFiltersBtn";

const RecipesFiltersBar = () => {
  // exemple de fonction pour le tri à passer par le props
  function triIngredient() {
    console.log("ça marche");
  }

  return (
    <>
      <div className="flex-between mx-1">
        <RecipesFiltersBtn btnName="ingrédients" func={triIngredient} />
        <RecipesFiltersBtn btnName="difficulté" func={triIngredient} />
        <RecipesFiltersBtn btnName="type de repas" func={triIngredient} />
      </div>
    </>
  );
};

export default RecipesFiltersBar;
