import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextValue {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Persist auth in localStorage so reload keeps user logged in
    return localStorage.getItem("smartshelf-auth") === "true";
  });

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("smartshelf-auth", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("smartshelf-auth");
  };

  // for debugging you may expose auth state in devtools
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // @ts-ignore
      window.__AUTH_STATE = { isAuthenticated, login, logout };
    }
  }, [isAuthenticated]);

  const value: AuthContextValue = {
    isAuthenticated,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};