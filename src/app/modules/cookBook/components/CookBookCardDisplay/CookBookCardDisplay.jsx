import { Row, Col } from "react-bootstrap";

import "./cookbookCardDisplay.scss";

import RecipesCardDisplay from "../../../../shared/components/RecipeCard/RecipeCard";

const CookbookCardDisplay = (props) => {
	const cookbookRecipes = props.recipes.map((recipes) => (
		<Col xs={6} sm={6} md={6} lg={6} xl={4} xxl={3} key={recipes.id}>
			<RecipesCardDisplay
				shadow="shadow-card"
				hasHeader={false}
				imageSrc={recipes.imageSrc}
				profilName={recipes.profilName}
				recipeTitle={recipes.recipeTitle}
			/>
		</Col>
	));

	return (
		<>
			<Row className="bg-cookbook-display py-1 my-4 mx-1 rounded-3">
				<div className="d-flex text-secondary mx-2 mt-2">
					<h5>Mes recettes</h5>
				</div>
				{cookbookRecipes}
			</Row>
		</>
	);
};

export default CookbookCardDisplay;
