import { useState } from "react";
import LoginScreen from "@/components/onboarding/LoginScreen";
import OnboardingContainer from "@/components/onboarding/OnboardingContainer";
import { useNavigate } from "react-router-dom";

type AppState = "login" | "onboarding" | "main";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("login");
  const navigate = useNavigate();

  const handleLogin = () => {
    setAppState("onboarding");
  };

  const handleOnboardingComplete = () => {
    setAppState("main");
  };

  if (appState === "login") {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (appState === "onboarding") {
    return <OnboardingContainer onComplete={handleOnboardingComplete} />;
  }

  if (appState === "main") {
    navigate("/chat");
    return null;
  }

  // Main app interface (placeholder for now)
  return null;
};

export default Index;
