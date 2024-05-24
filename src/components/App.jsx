import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import HomeScreen from '../screen/HomeScreen'
import SearchScreen from '../screen/SearchScreen';
import CookBookScreen from '../screen/CookBookScreen';
import MenusScreen from '../screen/MenusScreen';
import GroceriesScreen from '../screen/GroceriesScreen';
import PageNotFound from '../screen/PageNotFound';


function App() {
  
  return (
    <>
      <Link to="/">home</Link>
      <Link to="/search">Tu veux quoi ?</Link>
      <Link to="/cookbook">Le livre de recettes de mamie</Link>
      <Link to="/menus">On va planifier, quoi</Link>
      <Link to="/groceries">Les courses tavu</Link>

      

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/cookbook" element={<CookBookScreen />} />
        <Route path="/menus" element={<MenusScreen />} />
        <Route path="/groceries" element={<GroceriesScreen />} />
        <Route path="*" element={< PageNotFound />} />
      </Routes>
    </>
  );
}

export default App
