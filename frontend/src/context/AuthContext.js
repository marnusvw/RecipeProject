import { createContext, useState, useEffect } from "react";
import { checkLogin } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const data = await checkLogin(); // From your API file

        if (data.loggedIn) {
          setUser(data.user);
          setLoggedIn(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
