import { Route, Routes } from "react-router-dom";

import HomeScreen from "./screen/HomeScreen/HomeScreen";
import SearchScreen from "./screen/SearchScreen";
import CookBookScreen from "./screen/CookBookScreen";
import MenusScreen from "./screen/MenusScreen/MenusScreen";
import GroceriesScreen from "./screen/GroceriesScreen";
import RecipesScreen from "./screen/RecipesScreen";
import PageNotFound from "./screen/PageNotFound";

import NavbarMobile from "./components/mobile/NavbarMobile/NavbarMobile";

function App() {
  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/cookbook" element={<CookBookScreen />} />
          <Route path="/menus" element={<MenusScreen />} />
          <Route path="/groceries" element={<GroceriesScreen />} />

          <Route path="/recipes/:recipe" element={<RecipesScreen />} />

          <Route pathe="/page_not_found" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <NavbarMobile />
    </>
  );
}

export default App;
