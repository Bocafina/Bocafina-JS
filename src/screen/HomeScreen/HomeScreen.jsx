import { Image } from "react-bootstrap";

import ProfilePic from "../../components/common/ProfilePic/ProfilePic";
import Logo from "../../components/common/Logo/Logo";
import RecipesCardDisplay from "../../components/common/RecipesCardDisplay/RecipesCardDisplay";
import "./homeScreen.scss";

import { homeScreenRecipesData } from "../../data/homeScreenRecipesData";

let homeScreenRecipes = homeScreenRecipesData;
const RecipesList = homeScreenRecipes.map((recipes) => (
	<>
		<RecipesCardDisplay
		  key={recipes.id}
			isHomeScreen={true}
			imageSrc={recipes.imageSrc}
			profilName={recipes.profilName}
			recipeTitle={recipes.recipeTitle}
		/>
	</>
));

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

				{RecipesList}

			</div>
		</>
	);
}
