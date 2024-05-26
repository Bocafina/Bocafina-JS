import { Image, Row, Col } from "react-bootstrap";

import "./logo.scss";

const Logo = () => {
	return (
		<>
			<div className="logo-wrapper position-relative">
				<div className="wrapper mt-3 ms-3 rounded-3 position-relative">
					<Row className="sizeWelcome">
            Bienvenue sur
          </Row>
					<Row className="d-flex flex-nowrap">
						<Col className="ms-1 sizeLogo">
							<Image
								className=""
								src="../../src/assets/img/logo.png"
								alt="Bocafina logo"
							/>
						</Col>
						<Col className="sizeHelloCat">
							<Image
								className=""
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
