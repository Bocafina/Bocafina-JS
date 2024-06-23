import { Container } from "react-bootstrap";

import SearchBar from "../../../shared/components/SearchBarMobile/SearchBarMobile";
import RecipesFiltersBar from "../../../shared/components/RecipesFiltersBar/RecipesFiltersBar";
import CookbookCardDisplay from "../components/CookbookCardDisplay/CookbookCardDisplay";
import BtnBlackGreen from "../../../shared/components/BtnBlackGreen/BtnBlackGreen";

export default function CookbookScreenView(props) {
	return (
		<>
			{/* écrans mobiles */}
			<div className="d-md-none">
				<SearchBar />
				<RecipesFiltersBar />
				<BtnBlackGreen btnName="ajouter une recette" />
				<div className="mx-1">
					<CookbookCardDisplay recipes={props.recipes} />
				</div>
			</div>

			{/* écrans dekstop */}
			<div className="d-none d-md-block">
				<Container className="pt-5">
					<section>
						<CookbookCardDisplay recipes={props.recipes} />
					</section>
				</Container>
			</div>
		</>
	);
}
