import { useState, useEffect } from "react";
import { getAllRecipes } from "../api/api";
import Recipe from "./Recipe";
import styles from "./styles/Recipes.module.css";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesData = await getAllRecipes();
      setRecipes(recipesData);
    };

    fetchRecipes();
  }, []);

  return (
    <div className={styles.outer_contaier}>
      <div className={styles.layout}>
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
