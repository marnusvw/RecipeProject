import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.banner}>
      <header>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
