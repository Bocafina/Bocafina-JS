import { Image, Row, Col } from "react-bootstrap";

import "./header.scss";

import SearchBarDesktop from "../../../../shared/components/SearchBarDesktop/SearchBarDesktop";
import BtnBlackGreen from "../../../../shared/components/BtnBlackGreen/BtnBlackGreen";

const Header = () => {
	return (
		<>
				<header className="bg-primary rounded-3 p-2 me-2 sizeHeader position-relative d-none d-md-block">
					<Row>
						<Col md={6} className="d-flex align-items-center">
							<SearchBarDesktop />
						</Col>
						<Col
							md={6}
							className="d-flex align-items-center justify-content-center"
						>
							<div>
								<BtnBlackGreen btnName="ajouter une recette" />
							</div>
							<div className="writingCat">
								<Image
									className=""
									src="write.png"
									alt="Chat en train d'écrire une nouvelle recette"
								/>
							</div>
						</Col>
					</Row>
				</header>
		</>
	);
};

export default Header;
