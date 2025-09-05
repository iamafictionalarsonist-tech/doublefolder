import { useState } from "react";
import LoginScreen from "@/components/onboarding/LoginScreen";
import OnboardingContainer from "@/components/onboarding/OnboardingContainer";

type AppState = "login" | "onboarding" | "main";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("login");

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

  // Main app interface (placeholder for now)
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">SmartShelf - Interface Principal</h1>
        <p className="text-xl text-muted-foreground">Bem-vindo ao seu cérebro digital!</p>
      </div>
    </div>
  );
};

export default Index;
