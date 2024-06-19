import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { homeScreenRecipesData } from "../../../../data/homeScreenRecipesData";

const RecipeScreen = () => {
  const { recipe } = useParams();
  const navigate = useNavigate();

  const recipes = useMemo(() => {
    return homeScreenRecipesData.map((recipeData) => recipeData.recipeTitle);
  }, []);

  useEffect(() => {
    if (!recipes.includes(recipe)) {
      navigate("/page_not_found");
    }
  }, [recipe, recipes, navigate]);

  return (
    <>
      <h1 className="text-seconddary">c est la future page des recettes</h1>
      <p className="text-seconddary">tip nous pour nous aider !</p>
    </>
  );
};

export default RecipeScreen;
