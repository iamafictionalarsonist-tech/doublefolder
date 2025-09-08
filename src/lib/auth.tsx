import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthStage = "logged_out" | "onboarding" | "authenticated";

interface AuthContextValue {
  stage: AuthStage;
  login: () => void;
  completeOnboarding: () => void;
  logout: () => void;
  clearAuth: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<AuthStage>("logged_out");

  useEffect(() => {
    const saved = localStorage.getItem("auth_stage");
    if (saved === "authenticated" || saved === "onboarding" || saved === "logged_out") {
      setStage(saved);
    } else {
      // If no valid saved state, ensure we start from logged_out
      localStorage.setItem("auth_stage", "logged_out");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("auth_stage", stage);
  }, [stage]);

  const value = useMemo<AuthContextValue>(() => ({
    stage,
    login: () => setStage("onboarding"),
    completeOnboarding: () => setStage("authenticated"),
    logout: () => {
      setStage("logged_out");
      localStorage.setItem("auth_stage", "logged_out");
    },
    clearAuth: () => {
      localStorage.removeItem("auth_stage");
      setStage("logged_out");
    },
  }), [stage]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

