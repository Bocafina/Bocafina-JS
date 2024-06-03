import "./cookBookCardDisplay.scss";

import RecipesCardDisplay from "../RecipesCardDisplay/RecipesCardDisplay";
import { cookBookScreenReicipesData } from "../../../data/cookbookScreenRecipesData";

const CookBookCardDisplay = () => {
  const cookBookRecipies = cookBookScreenReicipesData.map((recipes) => (
    <RecipesCardDisplay
      className="col-6"
      shadow="shadow-card"
      key={recipes.id}
      hasHeader={false}
      // imageSrc={recipes.imageSrc}
      profilName={recipes.profilName}
      recipeTitle={recipes.recipeTitle}
    />
  ));

  return (
    <>
      <div className="bg-cookbook-display py-1 my-4 row mx-1 rounded-2">
        <div className="d-flex text-secondary mx-2 mt-2">
          <h5>Mes recettes</h5>

        </div>
        {cookBookRecipies}</div>
    </>
  );
};

export default CookBookCardDisplay;
