import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const baseURL = "https://agrismart-xomi.onrender.com";
  return (
    <AuthContext.Provider value={{ baseURL }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const contextValue = useContext(AuthContext);

  if (!contextValue) {
    throw new Error("Context is not Available");
  }
  return contextValue;
};
