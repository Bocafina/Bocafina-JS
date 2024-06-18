import SearchBar from "../components/common/SearchBar/SearchBar";
import RecipesFiltersBar from "../components/common/RecipesFiltersBar/RecipesFiltersBar";
import CookBookCardDisplay from "../components/common/CookBookCardDisplay/CookBookCardDisplay";
import BtnBlackGreen from "../components/common/BtnBlackGreen/BtnBlackGreen";


export default function CookBookScreen() {
  return (
		<>
			<div className="">
				<SearchBar />
				<RecipesFiltersBar />
				<CookBookCardDisplay />
				<BtnBlackGreen btnName="ajouter une recette" />
			</div>
		</>
	);
}
