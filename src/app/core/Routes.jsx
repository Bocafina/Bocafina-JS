import { Route, Routes } from "react-router-dom";

import HomeScreen from "../modules/recipesFeed/screens/HomeScreen";
import SearchScreen from "../modules/recipesSearch/screens/SearchScreen";
import CookBookScreen from "../modules/cookBook/screens/CookBookScreen";
import MenusScreen from "../modules/planner/screens/PlannerScreen";
import GroceriesScreen from "../modules/groceries/screens/GroceriesScreen";
import ProfileScreen from "../modules/profile/screens/ProfileScreen";
import RecipeScreen from "../modules/recipeDisplay/screens/RecipeScreen";

import PageNotFound from "./screen/PageNotFound";
import LoginScreen from "./screen/LoginScreen/LoginScreen";
import CreateAccountScreen from "./screen/RegisterScreen/CreateAccountScreen";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/cookbook" element={<CookBookScreen />} />
        <Route path="/planner" element={<MenusScreen />} />
        <Route path="/groceries" element={<GroceriesScreen />} />

        <Route path="/recipes">
          <Route path=":recipe" element={<RecipeScreen />} />
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
    </>
  );
};

export default Routing;
