import SearchScreenView from "./SearchScreenView.jsx";

import { searchScreenRecipesData } from "../../../../data/searchScreenRecipesData.js";

export default function SearchScreen() {
	let Recipes = searchScreenRecipesData;

	return (
		<>
			<SearchScreenView Recipes={Recipes} />
		</>
	);
}


