import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles/NavBar.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Logo from "./resources/Logo.png";

function NavBar({ loggedIn }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Logout current user:
  const handleLogout = (e) => {
    e.preventDefault(); // prevent actual link navigation
    logout(); // clear context/session
    navigate("/"); // redirect manually
  };
  return (
    <div>
      <header className={styles.navWrapper}>
        <NavLink to="/">
          <img className={styles.logo} src={Logo} alt="Chef hat logo"></img>
        </NavLink>
        <ul className={styles.navLeft}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Recipes
            </NavLink>
          </li>
        </ul>
        <ul className={styles.navRight}>
          {!loggedIn ? (
            <>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Sign up{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Login
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/"
                  onClick={handleLogout}
                  className={styles.logout}
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
