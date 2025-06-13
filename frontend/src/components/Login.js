import { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
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
      console.log("Login response: ", response);
      if (response.success) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
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
