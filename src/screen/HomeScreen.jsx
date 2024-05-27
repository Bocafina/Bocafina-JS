import Logo from "../components/common/Logo/Logo";
import RecipesCardDisplay from "../components/common/RecipesCardDisplay/RecipesCardDisplay";

export default function HomeScreen() {
  return (
    <>
      <Logo />

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
      
    </>
  );
}
