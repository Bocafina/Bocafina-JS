import RecipesCardDisplay from "../components/common/RecipesCardDisplay/RecipesCardDisplay";
import RecipesFiltersBar from "../components/common/RecipesFiltersBar/RecipesFiltersBar";

export default function SearchScreen() {
  return (
    <>
      <div className="container-fluid">

        <RecipesFiltersBar/>

        <RecipesCardDisplay
          hasHeader={false}
          imageSrc="./src/assets/img/imgTest.png"
          profilName="Nom de profil"
          recipeTitle="Titre de la recette"
        />

        <RecipesCardDisplay
          hasHeader={false}
          imageSrc="./src/assets/img/imgTest.png"
          profilName="Nom de profil"
          recipeTitle="Titre de la recette"
        />

        <RecipesCardDisplay
          hasHeader={false}
          imageSrc="./src/assets/img/imgTest.png"
          profilName="Nom de profil"
          recipeTitle="Titre de la recette"
        />

        <RecipesCardDisplay
          hasHeader={false}
          imageSrc="./src/assets/img/imgTest.png"
          profilName="Nom de profil"
          recipeTitle="Titre de la recette"
        />
      </div>
    </>
  );
}
