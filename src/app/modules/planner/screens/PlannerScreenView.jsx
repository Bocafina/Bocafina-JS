import { Container, Row } from "react-bootstrap";

import DateNavigator from "../components/DateNavigator/DateNavigator";
import ListWrapper from "../components/ListWrapper/ListWrapper";

export default function PlannerScreenView() {
	return (
		<>
			{/* écrans mobiles */}
			<div className="d-md-none">
				<h4 className="text-secondary my-3">Planificateur de repas</h4>
				<div className="mb-3">
					<DateNavigator />
				</div>
				<div className="mx-1">
					<ListWrapper />
				</div>
			</div>

			{/* écrans dekstop */}
			<div className="d-none d-md-block">
				<Container className="pt-3">
					<h4 className="text-secondary text-center my-3">
						Planificateur de repas
					</h4>
					<Row className="mx-5 mb-3">
						<DateNavigator />
					</Row>
					<Row className="mx-5">
						<ListWrapper />
					</Row>
				</Container>
			</div>
		</>
	);
}
