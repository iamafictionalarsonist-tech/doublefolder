import { useNavigate } from "react-router-dom";
import LoginScreen from "@/components/onboarding/LoginScreen";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/chat");
  };

  return <LoginScreen onLogin={handleLogin} />;
};

export default Login;

