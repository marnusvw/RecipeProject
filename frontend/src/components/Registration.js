import { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);

      if (response.success) {
        navigate("/login");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        ></input>
        <br />
        <label htmlFor="firstName">firstName</label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
        ></input>
        <br />
        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
        ></input>
        <br />
        <label htmlFor="password">password</label>
        <input
          type="text"
          id="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
