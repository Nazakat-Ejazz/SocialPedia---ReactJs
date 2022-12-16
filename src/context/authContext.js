import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const login = () => {
    // LOGIN
    setCurrentUser({
      id: 1,
      name: "Jace Hayes",
      profilePic:
        "https://cdn.mos.cms.futurecdn.net/VerAQJ7QaambsZS6DFcUBQ-1200-80.jpg",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
