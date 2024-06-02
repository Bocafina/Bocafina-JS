import { Image, Row, Col } from "react-bootstrap";

import useDateNavigator from "../../../hooks/useDateNavigator";

import "./dateNavigator.scss";

const DateNavigator = () => {
  const { currentDate, getWeekRange, changeWeek } = useDateNavigator();

	return (
			<Row className="rowHeight align-items-center g-0">
				<Col xs={3} className="d-flex justify-content-center">
					<Image
						as="button"
						onClick={() => changeWeek(-1)}
						src="../../src/assets/svg/leftarrowicon.svg"
						alt="Icone flèche vers la gauche"
					/>
				</Col>
				<Col xs={6} className="d-flex justify-content-center">
					<span className="text-secondary">{getWeekRange(currentDate)}</span>
				</Col>
				<Col xs={3} className="d-flex justify-content-center">
					<Image
						as="button"
						onClick={() => changeWeek(1)}
						src="../../src/assets/svg/rightarrowicon.svg"
						alt="Icone flèche vers la droite"
					/>
				</Col>
			</Row>
	);
};

export default DateNavigator;


// pas besoin de fragments ici (<> </>) car une seule balise Row