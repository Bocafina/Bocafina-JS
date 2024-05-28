import { Card } from "react-bootstrap";

import ThreeDotBtn from "./ThreeDotBtn/TreeDotBtn";
import ProfilePic from "../ProfilePic/ProfilePic";

import "./recipesCardDisplay.scss";

const RecipesCardDisplay = (props) => {
	const hasHeader = props.isHomeScreen;
	let header;

	if (hasHeader) {
		header = (
			<>
				<Card.Header className="bg-primary">
					<div className="recipes-card-section flex-between">
						<div className="d-flex">
							<ProfilePic profilePicSrc="profilepiccat.png" />
							<h5 className="text-secondary">{props.profilName}</h5>
						</div>
						<ThreeDotBtn />
					</div>
				</Card.Header>

				<Card.Img className="rounded-0" variant="top" src={props.imageSrc} />
			</>
		);
	} else {
		header = (
			<>
				<Card.Img className="" variant="top" src={props.imageSrc} />
			</>
		);
	}

	return (
		<>
			<Card>
				{header}
				<Card.Footer className="bg-primary">
					<div className="recipes-card-section flex-between">
						<h5 className="text-secondary">{props.recipeTitle}</h5>
						<button>
							<img
								src="./src/assets/svg/addCookBookIcon.svg"
								alt="addCookBook"
							/>
						</button>
					</div>
				</Card.Footer>
			</Card>
		</>
	);
};

export default RecipesCardDisplay;
