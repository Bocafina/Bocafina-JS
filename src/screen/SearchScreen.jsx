import RecipesCardDisplay from "../components/common/RecipesCardDisplay/RecipesCardDisplay";
import RecipesFiltersBar from "../components/common/RecipesFiltersBar/RecipesFiltersBar";
import SearchBar from "../components/common/SearchBar/SearchBar";

export default function SearchScreen() {
  return (
    <>
      <div className="container-fluid">
        <SearchBar />

        <RecipesFiltersBar />

        <section>
          <div className="row">
            <div className="col-6">
              <RecipesCardDisplay
                hasHeader={false}
                imageSrc="./src/assets/img/imgTest.png"
                profilName="Nom de profil"
                recipeTitle="Titre de la recette"
              />
            </div>
            <div className="col-6">
              <RecipesCardDisplay
                hasHeader={false}
                imageSrc="./src/assets/img/imgTest.png"
                profilName="Nom de profil"
                recipeTitle="Titre de la recette"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <RecipesCardDisplay
                hasHeader={false}
                imageSrc="./src/assets/img/imgTest.png"
                profilName="Nom de profil"
                recipeTitle="Titre de la recette"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <RecipesCardDisplay
                hasHeader={false}
                imageSrc="./src/assets/img/imgTest.png"
                profilName="Nom de profil"
                recipeTitle="Titre de la recette"
              />
            </div>
            <div className="col-6">
              <RecipesCardDisplay
                hasHeader={false}
                imageSrc="./src/assets/img/imgTest.png"
                profilName="Nom de profil"
                recipeTitle="Titre de la recette"
              />
            </div>
          </div>
        </section>

        

      
      </div>
    </>
  );
}
