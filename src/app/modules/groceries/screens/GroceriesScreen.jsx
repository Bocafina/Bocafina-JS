import GroceriesScreenView from "./GroceriesScreenView";
import { ingredientsListData } from "../../../../data/groceriesListData.js";

import "./groceriesScreen.scss";

export default function GroceriesScreen() {
	return (
		<>
			<GroceriesScreenView ingredients={ingredientsListData} />
		</>
	);
}
