import "./listWrapper.scss";

import ListBtn from "./ListBtn/ListBtn";
import ListGroup from "react-bootstrap/ListGroup";

const ListWrapper = () => {
	return (
		<>
			<div className="bg-primary p-2 m-2 mt-4 rounded-2 listGroupColor ">
				<ListGroup variant="flush">
					<ListBtn dayName="Lundi" />
					<ListBtn dayName="Mardi" />
					<ListBtn dayName="Mercredi" />
					<ListBtn dayName="Jeudi" />
					<ListBtn dayName="Vendredi" />
					<ListBtn dayName="Samedi" />
					<ListBtn dayName="Dimanche" />
				</ListGroup>
			</div>
		</>
	);
};

export default ListWrapper;
