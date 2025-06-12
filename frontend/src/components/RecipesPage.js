import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeByName } from "../api/api";
import styles from "./styles/recipesPage.module.css";

function RecipesPage() {
  const { recipe_name } = useParams();
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findRecipe = async () => {
      try {
        const recipe = await getRecipeByName(recipe_name);
        console.log("Recipe: ", recipe);
        setRecipe(recipe);
      } catch (err) {
        throw new Error(err);
      } finally {
        setLoading(false);
      }
    };
    findRecipe();
  }, [recipe_name]);
  if (loading) {
    return <div className={styles.spinner}></div>;
  }
  return (
    <ul>
      {recipe.Ingredients?.map((ing) => (
        <li key={ing.id}>{ing.ingredient}</li>
      ))}
    </ul>
  );
}

export default RecipesPage;
