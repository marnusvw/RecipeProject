import { useState, useContext, useEffect } from "react";
import { registerUser } from "../api/api";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles/Registration.module.css";
import { AuthContext } from "../context/AuthContext";
function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loggedIn, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  });

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      if (response.success) {
        login(formData);
        navigate("/");
      }
    } catch (err) {
      if (err.message == "Error: Email already in use") {
        setErrorMessage(err.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handlesubmit} className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          className={styles.input}
        ></input>
        <br />
        <label htmlFor="firstName" className={styles.label}>
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
          className={styles.input}
        ></input>
        <br />
        <label htmlFor="lastName" className={styles.label}>
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
          className={styles.input}
        ></input>
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
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <br />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>

      <span>
        <ul className={styles.login_redirect}>
          <li>Already signed up?</li>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
        </ul>
      </span>
    </div>
  );
}

export default Registration;
