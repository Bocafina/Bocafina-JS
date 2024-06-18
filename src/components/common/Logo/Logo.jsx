import { Image, Row, Col } from "react-bootstrap";

import "./logo.scss";

const Logo = () => {
	return (
		<>
			<div className="bg-primary rounded-3 logoRow">
				<Row>
					<span className="text-secondary d-flex justify-content-end pe-2">
						Bienvenue sur
					</span>
				</Row>
				<Row>
					<Col xs={8} className="d-flex align-items-center">
						<Image
							className="sizeLogo mx-2"
							src="../../src/assets/img/logo.png"
							alt="Bocafina logo"
						/>
					</Col>
					<Col xs={4} className="d-flex align-items-center">
						<Image
							className="sizeHelloCat"
							src="../../src/assets/img/hello.png"
							alt="Simon's cat dit bonjour"
						/>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Logo;



