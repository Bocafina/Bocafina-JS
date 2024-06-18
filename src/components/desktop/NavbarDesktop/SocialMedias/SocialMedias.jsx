import { Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./socialMedias.css";

const SocialMedias = () => {
	return (
		<>
			<div className="mt-5 d-flex justify-content-between mb-4 py-2">
				<div className="">
					<Row className="g-0">
						<span className="text-secondary">Suivez-nous sur :</span>
					</Row>
					<Row className="sizeRowSocial mt-2 px-2 g-0">
						<Col md={2} className="d-flex justify-content-center me-4">
							<Link
								href="https://www.instagram.com/simonscatofficial/?hl=fr"
								target="_blank"
								rel="noopener noreferrer"
							>
								{/* tjs mettre avec target_blank : */}
								{/* "noopener" empêche la nouvelle page d'accéder à window.opener pour des raisons de sécurité */}
								{/* "noreferrer" empêche l'envoi de l'URL de la page d'origine à la nouvelle page pour protéger la confidentialité */}
								<Image
									className=""
									src="../../src/assets/svg/logoInsta.svg"
									alt="Logo Instagram"
								/>
							</Link>
						</Col>
						<Col md={2} className="d-flex justify-content-center me-4">
							<Link
								href="https://www.facebook.com/simonscat/?locale=fr_FR"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									className=""
									src="../../src/assets/svg/logoFacebook.svg"
									alt="Logo Facebook"
								/>
							</Link>
						</Col>
						<Col md={2} className="d-flex justify-content-center">
							<Link
								href="https://x.com/SimonsCat"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									className=""
									src="../../src/assets/svg/logoTwitter.svg"
									alt="Logo X (ex Twitter)"
								/>
							</Link>
						</Col>
					</Row>
				</div>
				<Image
					className="sizeCatArrow"
					src="../../src/assets/img/thatway.png"
					alt="Chat qui montre les réseaux sociaux"
				/>
			</div>
		</>
	);
};

export default SocialMedias;
