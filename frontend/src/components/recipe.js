import { Link } from "react-router-dom";
import styles from "./styles/recipes.module.css";

function Recipe({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.title}`}>
      <div className={styles.card}>
        <h1 className={styles.h1}> {recipe.title}</h1>
        <img className={styles.img} src={recipe.image_url} alt={recipe.title} />
      </div>
    </Link>
  );
}

export default Recipe;
