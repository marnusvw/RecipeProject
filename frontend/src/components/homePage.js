import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./styles/homePage.module.css";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <div className={styles.container}>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default HomePage;
