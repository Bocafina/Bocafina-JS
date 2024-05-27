import RecipesCardDisplay from "../components/common/RecipesCardDisplay/RecipesCardDisplay";

export default function SearchScreen() {
  return (
    <>
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
    </>
  );
}
