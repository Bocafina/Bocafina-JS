import SearchBar from "../../../shared/components/SearchBarMobile/SearchBarMobile";
import RecipesFiltersBar from "../../../shared/components/RecipesFiltersBar/RecipesFiltersBar";
import CookBookCardDisplay from "../../../../components/common/CookBookCardDisplay/CookBookCardDisplay";
import BtnBlackGreen from "../../../shared/components/BtnBlackGreen/BtnBlackGreen";

import { cookBookScreenReicipesData } from "../../../../data/cookbookScreenRecipesData";

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
