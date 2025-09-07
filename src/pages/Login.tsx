import LoginScreen from "@/components/onboarding/LoginScreen";
import { useAuth } from "@/lib/auth";

export default function LoginPage() {
  const { login } = useAuth();
  return <LoginScreen onLogin={login} />;
}

