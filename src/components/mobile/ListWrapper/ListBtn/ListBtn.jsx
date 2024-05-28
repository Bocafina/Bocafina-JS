import { Image } from "react-bootstrap";

import ListGroup from "react-bootstrap/ListGroup";

import "./listBtn.scss";

const ListBtn = (props) => {
  return (
    <>
    
        <ListGroup.Item className=" text-secondary listBtnStyle">
          <div className="flex-between">
            <span>{props.dayName}</span>
            <Image className="" src="../../src/assets/svg/rightarrowicon.svg" alt="Icone flèche vers la droite" />
          </div>
        </ListGroup.Item>
      
    </>
  );
};

export default ListBtn;
