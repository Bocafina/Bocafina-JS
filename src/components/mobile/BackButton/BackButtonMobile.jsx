import { Link } from "react-router-dom";

import "./BackButtonMobile.scss";
import leftArrow from "../../../assets/svg/leftarrowicon.svg";

const BackButtonMobile = (props) => {
  return (
    <>
      <Link to={props.to}>
        <div className="back-button-mobile d-flex  m-1 p-1">
          <img className="me-3" src={leftArrow} alt="back button " />
          <span className="text-secondary">{props.btnText}</span>
        </div>
      </Link>
    </>
  );
};

export default BackButtonMobile;