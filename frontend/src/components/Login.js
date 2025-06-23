import { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { loggedIn, login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={formData.email}
          id="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <label for="password">Password</label>
        <input
          type="text"
          value={formData.password}
          id="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
