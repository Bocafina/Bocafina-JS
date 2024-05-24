import { Route, Routes } from "react-router-dom";

import HomeScreen from "./screen/HomeScreen";
import SearchScreen from "./screen/SearchScreen";
import CookBookScreen from "./screen/CookBookScreen";
import MenusScreen from "./screen/MenusScreen";
import GroceriesScreen from "./screen/GroceriesScreen";
import PageNotFound from "./screen/PageNotFound";


import "./assets/styles/App.scss";
import NavbarMobile from "./components/mobile/NavbarMobile/NavbarMobile";

function App() {
  return (
    <>
      <div className="container text-center">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/cookbook" element={<CookBookScreen />} />
          <Route path="/menus" element={<MenusScreen />} />
          <Route path="/groceries" element={<GroceriesScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
     

      <NavbarMobile />
    </>
  );
}

export default App;