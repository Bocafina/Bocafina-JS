import { Button } from "react-bootstrap";
import "./btnBlackGreen.scss";

const BtnBlackGreen = (props) => {
  return (
    <>
    <div className="btn-BG my-3 d-flex justify-content-center">
      
      <Button className="text-secondary rounded-5 border-1 border" onClick={() => props.func()}>
        {props.btnName}
      </Button>
    </div>
      
    </>
  );
};

export default BtnBlackGreen;
