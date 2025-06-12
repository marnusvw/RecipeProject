import { Link } from "react-router-dom";
import styles from "./styles/recipes.module.css";

function Recipe({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.recipe_name}`}>
      <div className={styles.card}>
        <h1 className={styles.h1}> {recipe.recipe_name}</h1>
        <img
          className={styles.img}
          src={recipe.recipe_image}
          alt={recipe.recipe_name}
        />
      </div>
    </Link>
  );
}

export default Recipe;
