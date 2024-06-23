import { Accordion } from "react-bootstrap";

import "./listWrapper.scss";

const ListWrapper = () => {
	const daysOfWeek = [
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
		"Dimanche",
	];
	const daysMeal = ["Petit-déjeuner", "Déjeuner", "Dîner"];

	return (
		<>
			<div className="accordionStyle">
				<Accordion className="bg-primary" defaultActiveKey="0" flush alwaysOpen>
					{daysOfWeek.map((day, index) => (
						<Accordion.Item
							key={index}
							className="bg-secondary"
							eventKey={index.toString()}
						>
							<Accordion.Header>{day}</Accordion.Header>
							<Accordion.Body>
								<Accordion defaultActiveKey="0" flush alwaysOpen>
									{daysMeal.map((meal, mealIndex) => (
										<Accordion.Item
											key={mealIndex}
											eventKey={mealIndex.toString()}
										>
											<Accordion.Header>{meal}</Accordion.Header>
											<Accordion.Body>
												Content for {meal.toLowerCase()}
											</Accordion.Body>
										</Accordion.Item>
									))}
								</Accordion>
							</Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion>
			</div>
		</>
	);
};

export default ListWrapper;
