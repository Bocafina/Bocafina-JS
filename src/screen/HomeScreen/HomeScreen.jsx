import { Image } from "react-bootstrap";

import ProfilePic from "../../components/common/ProfilePic/ProfilePic";
import Logo from "../../components/common/Logo/Logo";
import RecipesCardDisplay from "../../components/common/RecipesCardDisplay/RecipesCardDisplay";
import "./homeScreen.scss";

export default function HomeScreen() {
  return (
		<>
			<div className="container-fluid">
				<div className="w-100 flex-between">
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
