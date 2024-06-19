import { Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import RecipesCardDisplay from "../../../shared/components/RecipeCard/RecipeCard.jsx";
import Logo from "../components/Logo/Logo.jsx";
import ProfilePic from "../../../core/layout/ProfilePic/ProfilePic.jsx";
import { notificationIcon } from "../../../../assets/svg/icon/_icon.js";

import "./homeScreen.scss";
import BtnBlackGreen from "../../../shared/components/BtnBlackGreen/BtnBlackGreen.jsx";

export default function HomeScreenView(props) {
  let homeScreenRecipes = props.recipies;

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
  // puisque chaque RecipesCardDisplay a déjà une key unique, les fragments (<> </>) ne sont pas nécessaires ici

  return (
		<>
			{/* écrans mobiles */}
			<div className="d-md-none">
				<div className="flex-between">
					<div>
						<Logo />
					</div>
					<div className="sizeNotif">
						<Image
							className="mt-1 ms-2"
							src={notificationIcon}
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
			<div className="d-none d-md-block">
				<Container>
					<div className="my-5 p-5 text-secondary text-center d-flex align-items-center justify-content-center sizeWelcomeText">
						Bienvenue sur Bocafina, votre compagnon culinaire pour des recettes
						gourmandes et personnalisées !
						<br />
						Planifiez vos repas, créez vos propres recettes et transformez vos
						ingrédients en listes de courses en un clic.
						<br />
						Bon appétit et à vos fourneaux !
					</div>
					<Row className="my-5 pb-5 d-flex align-items-center justify-content-center">
						<Col md={6} xxl={4} as={Link} to="/">
							<BtnBlackGreen btnName="Envie de petit-déjeuner ?" />
						</Col>
						<Col md={6} xxl={4} as={Link} to="/">
							<BtnBlackGreen btnName="Envie de déjeuner ?" />
						</Col>
						<Col md={6} xxl={4} as={Link} to="/">
							<BtnBlackGreen btnName="Envie de dîner ?" />
						</Col>
					</Row>
					<Row>{RecipesList}</Row>
				</Container>
			</div>
		</>
	);
}
