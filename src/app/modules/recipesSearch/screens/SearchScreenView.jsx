import { Container, Row, Col } from "react-bootstrap";

import RecipesCardDisplay from "../../../shared/components/RecipeCard/RecipeCard";
import RecipesFiltersBar from "../../../shared/components/RecipesFiltersBar/RecipesFiltersBar";
import SearchBar from "../../../shared/components/SearchBarMobile/SearchBarMobile";

export default function SearchScreenView(props) {
	let searchScreenRecipes = props.Recipes;

	const recipesList = searchScreenRecipes.map((recipes) => (
		<Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={3} key={recipes.id}>
			<RecipesCardDisplay
				hasHeader={false}
				imageSrc={recipes.imageSrc}
				profilName={recipes.profilName}
				recipeTitle={recipes.recipeTitle}
			/>
		</Col>
	));

	return (
		<>
			{/* écrans mobiles */}
			<div className="d-md-none">
				<SearchBar />
				<RecipesFiltersBar />
				<section>
					<Row>{recipesList}</Row>
				</section>
			</div>

			{/* écrans dekstop */}
			<div className="d-none d-md-block">
				<Container className="pt-3">
					<Row className="desktopSearchFilters mt-5 mx-5">
						<RecipesFiltersBar />
					</Row>
					<section>
						<Row className="mt-5">{recipesList}</Row>
					</section>
				</Container>
			</div>
		</>
	);
}

// puisque chaque RecipesCardDisplay a déjà une key unique, les fragments (<> </>) ne sont pas nécessaires ici
