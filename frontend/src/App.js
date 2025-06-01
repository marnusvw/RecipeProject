import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Users from "./components/users";
import HomePage from "./components/homePage";
import Recipes from "./components/recipes";
import RecipesPage from "./components/RecipesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route path="users" element={<Users />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="recipes/:title" element={<RecipesPage />} />
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
