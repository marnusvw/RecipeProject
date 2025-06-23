import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles/NavBar.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function NavBar({ loggedIn }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logging out");
    logout();
    navigate("/");
  };
  return (
    <div className={styles.banner}>
      <header>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
          {!loggedIn ? (
            <>
              <li>
                <NavLink to="/register">Sign up </NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <button type="submit" onClick={handleLogout}>
                  Log Out
                </button>
              </li>
            </>
          )}
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
