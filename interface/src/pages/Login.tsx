import LoginScreen from "@/components/onboarding/LoginScreen";
import { useAuth } from "@/lib/auth";

const Login = () => {
  const { login } = useAuth();
  return <LoginScreen onLogin={login} />;
};

export default Login;

