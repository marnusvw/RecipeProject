import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Recipes from "./components/Recipes";
import RecipesPage from "./components/RecipesPage";
import Registration from "./components/Registration";
import Login from "./components/Login";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="recipes/:recipe_name" element={<RecipesPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
