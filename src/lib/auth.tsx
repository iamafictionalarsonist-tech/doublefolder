import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthStage = "logged_out" | "onboarding" | "authenticated";

interface AuthContextValue {
  stage: AuthStage;
  login: () => void;
  completeOnboarding: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Always start with logged_out to ensure proper flow demonstration
  const [stage, setStage] = useState<AuthStage>("logged_out");

  useEffect(() => {
    // Clear any existing auth state to ensure fresh start
    localStorage.removeItem("auth_stage");
  }, []);

  useEffect(() => {
    localStorage.setItem("auth_stage", stage);
  }, [stage]);

  const value = useMemo<AuthContextValue>(() => ({
    stage,
    login: () => setStage("onboarding"),
    completeOnboarding: () => setStage("authenticated"),
    logout: () => setStage("logged_out"),
  }), [stage]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

