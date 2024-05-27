import { Image } from "react-bootstrap";

import ProfilePic from "../components/common/ProfilePic/ProfilePic";
import Logo from "../components/common/Logo/Logo";
import RecipesCardDisplay from "../components/common/RecipesCardDisplay/RecipesCardDisplay";
import "./styles/homeScreen.scss";

export default function HomeScreen() {
  return (
		<>
			<div className="container-fluid">
				<div className="d-flex">
					<div>
						<Logo />
					</div>
					<div className="d-flex align-items-start justify-content-start">
						<Image
							className="mt-5  ms-2 w-50"
							src="../../src/assets/svg/notification-icon.svg"
							alt="Notification icon"
						/>
					</div>
					<div className="posProfilePic">
						<ProfilePic profilePicSrc="profilepiccat.png" />
					</div>
				</div>

				<RecipesCardDisplay
					isHomeScreen={true}
					imageSrc="./src/assets/img/imgTest.png"
					profilName="Nom de profil"
					recipeTitle="Titre de la recette"
				/>

				<RecipesCardDisplay
					isHomeScreen={true}
					imageSrc="./src/assets/img/imgTest.png"
					profilName="Nom de profil"
					recipeTitle="Titre de la recette"
				/>

				<RecipesCardDisplay
					isHomeScreen={true}
					imageSrc="./src/assets/img/imgTest.png"
					profilName="Nom de profil"
					recipeTitle="Titre de la recette"
				/>
			</div>
		</>
	);
}
