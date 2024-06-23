import { Container, Row } from "react-bootstrap";

import GroceriesList from "../components/GroceriesList/GroceriesList";
import BtnBlackGreen from "../../../shared/components/BtnBlackGreen/BtnBlackGreen";

export default function GroceriesScreenView(props) {
	return (
		<>
			{/* écrans mobiles */}
			<div className="d-md-none">
				<h4 className="text-secondary mt-3 mb-2">Liste de courses</h4>
				<BtnBlackGreen btnName="ajouter un ingrédient" />
				<div className="mx-1">
					<GroceriesList ingredients={props.ingredients} />
				</div>
				
			</div>

			{/* écrans dekstop */}
			<div className="d-none d-md-block">
				<Container className="pt-3 GroceriesRowBtn">
					<h4 className="text-secondary text-center my-3">Liste de courses</h4>
					<Row className="mt-4 mx-5">
						<GroceriesList ingredients={props.ingredients} />
					</Row>
					<Row className="no-flex-shrink">
						<BtnBlackGreen btnName="ajouter un ingrédient" />
					</Row>
				</Container>
			</div>
		</>
	);
}
