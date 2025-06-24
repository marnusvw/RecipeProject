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
    <div className={styles.recipe_container}>
      <div className={styles.recipe}>
        <h1>{recipe.recipe_name}</h1>
        <h4>{recipe.recipe_description}</h4>
        <div className={styles.ingredients_box}>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing.recipe_id}>{ing.ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <img
        style={{ "margin-left": "10rem", width: "8rem", height: "8rem" }}
        src={recipe.recipe_image}
        alt={recipe.recipe_description}
      ></img>
    </div>
  );
}

export default RecipesPage;
