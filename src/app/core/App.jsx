import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import HomeScreen from "../features/recipesFeed/screens/HomeScreen";
import SearchScreen from "../features/recipesSearch/screens/SearchScreen";
import CookBookScreen from "../../screen/CookBookScreen";
import MenusScreen from "../../screen/MenusScreen/MenusScreen";
import GroceriesScreen from "../../screen/GroceriesScreen";
import RecipesScreen from "../../screen/RecipesScreen";
import PageNotFound from "../../screen/PageNotFound";
import NavbarDesktop from "./layout/desktop/NavbarDesktop/NavbarDesktop";
import ProfileScreen from "../../screen/ProfileScreen";
import LoginScreen from "./screen/LoginScreen/LoginScreen";
import CreateAccountScreen from "./screen/RegisterScreen/CreateAccountScreen";
import NavbarMobile from "./layout/NavbarMobile/NavbarMobile";
import Header from "./layout/desktop/Header/Header";

function App() {
  return (
    <>
      <Container fluid className="app-container d-flex g-0">
        <NavbarDesktop />
        <div className="d-flex flex-column flex-grow-1">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/cookbook" element={<CookBookScreen />} />
              <Route path="/planner" element={<MenusScreen />} />
              <Route path="/groceries" element={<GroceriesScreen />} />

              <Route path="/recipes">
                <Route path=":recipe" element={<RecipesScreen />} />
              </Route>

              <Route path="/profiles">
                <Route path="login" element={<LoginScreen />} />
                <Route path="account-register" element={<CreateAccountScreen />} />
                <Route path="my-profile" element={<ProfileScreen />} />
                <Route path=":profile" element={<ProfileScreen />} />
              </Route>

              <Route pathe="/page_not_found" element={<PageNotFound />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </div>
      </Container>

      <NavbarMobile />
    </>
  );
}

export default App;
