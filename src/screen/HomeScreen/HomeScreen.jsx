import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProfilePic from "../../components/common/ProfilePic/ProfilePic";
import Logo from "../../components/common/Logo/Logo";
import RecipesCardDisplay from "../../components/common/RecipesCardDisplay/RecipesCardDisplay";
import "./homeScreen.scss";

import { homeScreenRecipesData } from "../../data/homeScreenRecipesData";
import BtnBlackGreen from "../../components/common/BtnBlackGreen/BtnBlackGreen";
import NavbarDesktop from "../../components/desktop/NavbarDesktop/NavbarDesktop";

export default function HomeScreen(props) {
	let homeScreenRecipes = homeScreenRecipesData;

	const RecipesList = homeScreenRecipes.map((recipes) => (
		<RecipesCardDisplay
			to={recipes.recipeTitle}
			key={recipes.id}
			isHomeScreen={true}
			imageSrc={recipes.imageSrc}
			profilName={recipes.profilName}
			recipeTitle={recipes.recipeTitle}
		/>
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
					<div className="posProfilePic">
						<Link to="/profiles/login">
							<ProfilePic profilePicSrc="profilepiccat.png" />
						</Link>
					</div>
				</div>
				{RecipesList}
			</div>

			{/* écrans dekstop */}
			<div className="container-fluid">
				<div className="row">
					{/* Colonne navbar */}
					<div className="col-md-3">
						<div className="greyBlock">
							<div>
								<Logo />
							</div>
							<div className="d-flex justify-content-center">
								<div className="posProfilePic d-flex flex-column align-items-center">
									<Link to="/profiles/login">
										<ProfilePic profilePicSrc="profilepiccat.png" />
									</Link>
									<p className="text-secondary mt-2 font-bold">
										{props.userUUID} (CatUserUUID here)
									</p>
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
						</div>
					</div>
					{/* FIN colonne navbar */}

					{/* Colonne contenu principal */}
					<div className="col-md-9">
						<div className="text-secondary ms-5">ou suis je ?</div>
						{RecipesList}
					</div>
				</div>
			</div>
		</>
	);
}

// puisque chaque RecipesCardDisplay a déjà une key unique, les fragments (<> </>) ne sont pas nécessaires ici
