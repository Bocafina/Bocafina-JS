import { Image } from "react-bootstrap";

import ListGroup from "react-bootstrap/ListGroup";

import "./listBtn.scss";

const ListBtn = (props) => {
  return (
		<>
			<ListGroup.Item as="button" className=" text-secondary listBtnStyle">
				<div className="flex-between font-bold">
					<span>{props.dayName}</span>
					<Image
						className=""
						src="../../src/assets/svg/rightarrowicon.svg"
						alt="Icone flèche vers la droite"
					/>
				</div>
			</ListGroup.Item>
		</>
	);
};

export default ListBtn;

// as="button". 
// applique les styles et comportements du bouton tout en conservant
// l'apparence et la fonctionnalité du ListGroup.Item.