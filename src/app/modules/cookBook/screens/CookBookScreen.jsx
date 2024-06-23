import { cookbookScreenRecipesData } from "../../../../data/cookbookScreenRecipesData";
import CookbookScreenView from "./CookbookScreenView";

export default function CookbookScreen() {
	return (
		<>
			<div>
				<CookbookScreenView recipes={cookbookScreenRecipesData} />
			</div>
		</>
	);
}
