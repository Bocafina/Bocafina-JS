import SearchBar from "../../../shared/components/SearchBarMobile/SearchBarMobile";
import RecipesFiltersBar from "../../../shared/components/RecipesFiltersBar/RecipesFiltersBar";
import CookBookCardDisplay from "../components/CookBookCardDisplay/CookBookCardDisplay";
import BtnBlackGreen from "../../../shared/components/BtnBlackGreen/BtnBlackGreen";



export default function CookBookScreenView(props) {
  return (
    <>
      <div>
        <SearchBar />
        <RecipesFiltersBar />
        <CookBookCardDisplay recipies={props.recipies} />
        <BtnBlackGreen btnName="ajouter une recette" />
      </div>
    </>
  );
}