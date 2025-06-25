import { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "./styles/Login.module.css";

function Login() {
  const { loggedIn, login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);
      if (response.loggedIn) {
        login(formData);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (loggedIn) {
    navigate("/");
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          value={formData.email}
          id="email"
          name="email"
          onChange={handleChange}
          className={styles.input}
        />
        <br />
        <div className={styles.password_wrapper}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            className={styles.input}
          ></input>
          <span
            onClick={togglePassword}
            className={styles.icon}
            role="button"
            aria-label="Toggle password visibility"
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <br />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
