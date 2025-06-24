import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/Recipes.module.css";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";

function Recipe({ recipe }) {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/register");
    }
  }, [loggedIn, navigate]);
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
