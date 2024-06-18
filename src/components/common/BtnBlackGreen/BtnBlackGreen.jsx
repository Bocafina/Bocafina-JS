import { Button, Row } from "react-bootstrap";
import "./btnBlackGreen.scss";

const BtnBlackGreen = (props) => {
	return (
		<>
			<Row className="btn-BG mx-5 my-3 d-flex justify-content-center">
				<Button
					className="text-secondary bg-black rounded-5 border-1 border"
					onClick={() => props.func()}
				>
					{props.btnName}
				</Button>
			</Row>
		</>
	);
};

export default BtnBlackGreen;
