import React, { createContext, useContext, useMemo, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface AuthContextValue {
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
  login: () => void;
  completeOnboarding: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean>(false);

  const value = useMemo<AuthContextValue>(() => ({
    isAuthenticated,
    hasCompletedOnboarding,
    login: () => setIsAuthenticated(true),
    completeOnboarding: () => setHasCompletedOnboarding(true),
    logout: () => {
      setIsAuthenticated(false);
      setHasCompletedOnboarding(false);
    }
  }), [isAuthenticated, hasCompletedOnboarding]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const RequireAuth: React.FC = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export const RequireOnboarding: React.FC = () => {
  const { hasCompletedOnboarding } = useAuth();
  if (!hasCompletedOnboarding) return <Navigate to="/onboarding" replace />;
  return <Outlet />;
};

