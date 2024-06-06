import { Image, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProfilePic from "../../components/common/ProfilePic/ProfilePic";
import Logo from "../../components/common/Logo/Logo";
import RecipesCardDisplay from "../../components/common/RecipesCardDisplay/RecipesCardDisplay";
import "./homeScreen.scss";

import { homeScreenRecipesData } from "../../data/homeScreenRecipesData";
import BtnBlackGreen from "../../components/common/BtnBlackGreen/BtnBlackGreen";
import NavbarDesktop from "../../components/desktop/NavbarDesktop/NavbarDesktop";
import SearchBarDesktop from "../../components/desktop/SearchBarDesktop/SearchBarDesktop";

export default function HomeScreen() {
	const userUUID = "catUserUUID";
	let homeScreenRecipes = homeScreenRecipesData;

	const RecipesList = homeScreenRecipes.map((recipes) => (
		<Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} key={recipes.id}>
			<RecipesCardDisplay
				to={recipes.recipeTitle}
				isHomeScreen={true}
				imageSrc={recipes.imageSrc}
				profilName={recipes.profilName}
				recipeTitle={recipes.recipeTitle}
			/>
		</Col>
	));

	return (
		<>
			{/* écrans mobiles */}
			<div className="container-fluid d-md-none">
				<div className="flex-between">
					<div>
						<Logo />
					</div>
					<div className="sizeNotif">
						<Image
							className="mt-1 ms-2"
							src="../../src/assets/svg/notification-icon.svg"
							alt="Notification icon"
						/>
					</div>
					<div className="profilePicSize">
						<Link to="/profiles/login">
							<ProfilePic profilePicSrc="profilepiccat.png" />
						</Link>
					</div>
				</div>
				{RecipesList}
			</div>

			{/* écrans dekstop */}
			<Container fluid className="d-none d-md-block desktopSize">
				<Row className="g-0 screenSize">
					{/* Colonne navbar */}
					<Col md={3} className="greyBlock rounded-3 btn-connexion">
						<div>
							<Logo />
						</div>
						<div className="d-flex justify-content-center mt-5">
							<div className="d-flex flex-column align-items-center mt-5">
								<Link to="/profiles/login">
									<ProfilePic profilePicSrc="profilepiccat.png" />
								</Link>
								<p className="text-secondary mt-2 font-bold">{userUUID}</p>
							</div>
						</div>
						{/* <div className="sizeNotif">
							<Image
								className="mt-1 ms-2"
								src="../../src/assets/svg/notification-icon.svg"
								alt="Notification icon"
							/>
						</div> */}

						<BtnBlackGreen btnName="modifier le profil" />
						{/* ligne de séparation */}
						<hr className="text-secondary my-4 mx-3 opacity-line" />
						<NavbarDesktop />
						{/* ligne de séparation */}
						<hr className="text-secondary my-4 mx-3 opacity-line" />
					</Col>
					{/* FIN colonne navbar */}

					{/* Colonne contenu principal */}
					<Col md={9} className="mainColSize">
						<Row className="bg-primary ms-4 mt-0 rounded-3 g-0 position-relative marginRightDiv">
							<Col md={6}>
								<div className="text-secondary p-2">
									<SearchBarDesktop />
								</div>
							</Col>
							<Col
								md={5}
								className="text-secondary d-flex align-items-center justify-content-end posBtn"
							>
								<div className="btn-connexion">
									<Link to="">
										<BtnBlackGreen btnName="ajouter une recette" />
									</Link>
								</div>
							</Col>
							<Col md={1}>
								<div className="posWritingCat">
									<Image
										className=""
										src="../../src/assets/img/write.png"
										alt="Image de chat qui écrit"
									/>
								</div>
							</Col>
						</Row>
						<Row className="g-0 text-secondary text-center justify-content-center align-items-center m-5 p-5">
							<h4 className="p-3">
								Bienvenue sur Bocafina,
								<br />
								votre compagnon culinaire pour des recettes gourmandes et
								personnalisées !
								<br />
								Planifiez vos repas, créez vos propres recettes et transformez
								vos ingrédients en listes de courses en un clic.
								<br />
								Bon appétit et à vos fourneaux !
							</h4>
						</Row>
						<Row className="my-5 g-0 ">
							<Col md={6} lg={4}>
								<div className="btn-connexion">
									<Link to="">
										<BtnBlackGreen btnName="envie de petit-déjeuner ?" />
									</Link>
								</div>
							</Col>
							<Col md={6} lg={4}>
								<div className="btn-connexion">
									<Link to="">
										<BtnBlackGreen btnName="envie de déjeuner ?" />
									</Link>
								</div>
							</Col>
							<Col md={12} lg={4}>
								<div className="btn-connexion">
									<Link to="">
										<BtnBlackGreen btnName="envie de dîner ?" />
									</Link>
								</div>
							</Col>
						</Row>
						<Row md={3} className="g-0 d-flex flew-wrap ms-3 marginRightDiv">
							{RecipesList}
						</Row>

						{/* footer */}
						<Row className="bg-primary ms-4 mt-0 rounded-3 g-0 mb-0 marginRightDiv">
							<Col
								md={4}
								className="my-3 d-flex flex-column align-items-end pe-4"
							>
								<span className="text-secondary font-bold p-1">
									Suivez-nous sur :
								</span>
								<div className="ms-4">
									<a
										href="https://www.instagram.com/simonscatofficial/?hl=fr"
										target="_blank"
										rel="noopener noreferrer"
									>
										{/* tjs mettre avec target_blank : */}
										{/* "noopener" empêche la nouvelle page d'accéder à window.opener pour des raisons de sécurité */}
										{/* "noreferrer" empêche l'envoi de l'URL de la page d'origine à la nouvelle page pour protéger la confidentialité */}
										<Image
											className="mt-1 me-4"
											src="../../src/assets/svg/logoInsta.svg"
											alt="Logo Instagram"
										/>
									</a>
									<a
										href="https://www.facebook.com/simonscat/?locale=fr_FR"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											className="mt-1 me-4"
											src="../../src/assets/svg/logoFacebook.svg"
											alt="Logo Facebook"
										/>
									</a>
									<a
										href="https://x.com/SimonsCat"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											className="mt-1 me-2"
											src="../../src/assets/svg/logoTwitter.svg"
											alt="Logo X (ex Twitter)"
										/>
									</a>
								</div>
							</Col>
							<Col md={1}>
								<div className="sizeArrowCat">
									<Image
										className=""
										src="../../src/assets/img/thatway.png"
										alt="Chat qui montre les réseaux sociaux"
									/>
								</div>
							</Col>
							<Col md={3}></Col>
							<Col
								md={4}
								className="my-3 d-flex align-items-center pe-4"
							>
								<div className="text-secondary pe-3">
									<span className="">Une question ? Un avis ? <br/> Contactez-nous :</span>
								</div>

								<a href="https://x.com/SimonsCat">
									<Image
										className="mt-1 me-2"
										src="../../src/assets/svg/contact.svg"
										alt="Image cliquable pour nous contacter"
									/>
								</a>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
}

// puisque chaque RecipesCardDisplay a déjà une key unique, les fragments (<> </>) ne sont pas nécessaires ici
