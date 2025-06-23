import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";

import styles from "./styles/homePage.module.css";
import NavBar from "./NavBar";
import { AuthContext } from "../context/AuthContext";

function HomePage() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <NavBar loggedIn={loggedIn} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default HomePage;
