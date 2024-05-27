import SearchBar from "../components/common/SearchBar/SearchBar";
import RecipesFiltersBar from "../components/common/RecipesFiltersBar/RecipesFiltersBar";

export default function CookBookScreen() {
  return (
    <>

    <div className="container-fluid">
      <SearchBar/>
      <RecipesFiltersBar/>
    </div>
      
    </>
  );
}
