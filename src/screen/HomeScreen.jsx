import Logo from "../components/common/Logo/Logo";
import RecipesCardDisplay from "../components/common/RecipesCardDisplay/RecipesCardDisplay";


export default function HomeScreen() {
  return (
    <>
      <Logo />
      <h1>Home Page</h1>
     
      <RecipesCardDisplay imageSrc="./src/assets/img/imgTest.png" profilName="Nom de profile" recipeTitle="Titre de la recette"/>
    </>
  );
}
