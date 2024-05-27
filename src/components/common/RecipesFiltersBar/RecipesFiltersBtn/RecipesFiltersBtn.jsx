import { Button } from "react-bootstrap";
import "./recipesFiltersBtn.scss";

const RecipesFiltersBtn = (props) => {
	return (
		<>
			<Button
				className="text-secondary rounded-5 border-1 border border-secondary"
				onClick={() => props.func()}
			>
				{props.btnName}
			</Button>
		</>
	);
};

export default RecipesFiltersBtn;
