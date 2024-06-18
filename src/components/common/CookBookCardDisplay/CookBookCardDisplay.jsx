import { Row } from "react-bootstrap";

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
			<Row className="bg-cookbook-display py-1 my-4 mx-1 rounded-3">
				<div className="d-flex text-secondary mx-2 mt-2">
					<h5>Mes recettes</h5>
				</div>
				{cookBookRecipies}
			</Row>
		</>
	);
};

export default CookBookCardDisplay;
