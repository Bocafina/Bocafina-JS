import { Button } from "react-bootstrap";
import "./btnBlackGreen.scss";

const BtnBlackGreen = (props) => {
  return (
    <>
      <Button className="text-secondary rounded-5 border-1 border btn-BG" onClick={() => props.func()}>
        {props.btnName}
      </Button>
    </>
  );
};

export default BtnBlackGreen;
