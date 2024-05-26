import { Image, Row, Col } from "react-bootstrap";

import "./logo.scss";

const Logo = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="wrapper mt-3 rounded-3 position-relative">
					<Row className="sizeWelcome me-2 d-flex justify-content-end">Bienvenue sur</Row>
					<Row className="flex-nowrap">
						<Col className="ms-1 pb-2 sizeLogo">
							<Image
								className=""
								src="../../src/assets/img/logo.png"
								alt="Bocafina logo"
							/>
						</Col>
						<Col className="sizeHelloCat">
							<Image
								src="../../src/assets/img/hello.png"
								alt="Simon's cat hello"
							/>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
};

export default Logo;
