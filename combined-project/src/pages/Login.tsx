import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginScreen from "@/components/onboarding/LoginScreen";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    navigate("/chat", { replace: true });
  }, [navigate]);

  return <LoginScreen onLogin={handleLogin} />;
};

export default Login;

