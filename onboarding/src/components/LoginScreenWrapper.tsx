import React from "react";
import LoginScreen from "@/components/onboarding/LoginScreen";
import { useAuth } from "@/context/AuthContext";

const LoginScreenWrapper: React.FC = () => {
  const { login } = useAuth();
  return <LoginScreen onLogin={login} />;
};

export default LoginScreenWrapper;