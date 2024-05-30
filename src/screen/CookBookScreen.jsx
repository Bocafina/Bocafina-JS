import SearchBar from "../components/common/SearchBar/SearchBar";
import RecipesFiltersBar from "../components/common/RecipesFiltersBar/RecipesFiltersBar";
import CookBookCardDisplay from "../components/common/CookBookCardDisplay/CookBookCardDisplay";


export default function CookBookScreen() {
  return (
    <>

    <div className="container-fluid">
      <SearchBar/>
      <RecipesFiltersBar/>
      <CookBookCardDisplay/>
    </div>
      
    </>
  );
}
