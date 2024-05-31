import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProfilePic from "../../components/common/ProfilePic/ProfilePic";
import Logo from "../../components/common/Logo/Logo";
import RecipesCardDisplay from "../../components/common/RecipesCardDisplay/RecipesCardDisplay";
import "./homeScreen.scss";

import { homeScreenRecipesData } from "../../data/homeScreenRecipesData";
import BtnBlackGreen from "../../components/common/BtnBlackGreen/BtnBlackGreen";

export default function HomeScreen() {
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
				{/* header + navbar */}
				<div className="d-flex flex-column">
					<div className="greyBlock">
						<div>
							<Logo />
						</div>

						<div className="d-flex justify-content-center">
							<div className="posProfilePic">
								<Link to="/profiles/login">
									<ProfilePic profilePicSrc="profilepiccat.png" />
								</Link>
								<p className="text-secondary mt-2">CatUserUUID</p>
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

            {/* navbar-left */}
            <div className="">
              
            </div>

						{/* ligne de séparation */}
						<hr className="text-secondary my-4 mx-3 opacity-line" />
					</div>
				</div>
				{/* FIN header + navbar */}
			</div>
		</>
	);
}

// puisque chaque RecipesCardDisplay a déjà une key unique, les fragments (<> </>) ne sont pas nécessaires ici
