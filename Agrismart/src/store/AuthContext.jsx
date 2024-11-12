import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const baseURL = "http://127.0.0.1:5000";
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
