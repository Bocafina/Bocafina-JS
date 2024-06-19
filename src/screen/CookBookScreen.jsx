import SearchBar from "../app/shared/components/SearchBar/SearchBar";
import RecipesFiltersBar from "../app/shared/components/RecipesFiltersBar/RecipesFiltersBar";
import CookBookCardDisplay from "../components/common/CookBookCardDisplay/CookBookCardDisplay";
import BtnBlackGreen from "../app/shared/components/BtnBlackGreen/BtnBlackGreen";

import { cookBookScreenReicipesData } from "../data/cookbookScreenRecipesData";

export default function CookBookScreen() {
  return (
    <>
      <div className="">
        <SearchBar />
        <RecipesFiltersBar />
        <CookBookCardDisplay recipies={cookBookScreenReicipesData} />
        <BtnBlackGreen btnName="ajouter une recette" />
      </div>
    </>
  );
}
