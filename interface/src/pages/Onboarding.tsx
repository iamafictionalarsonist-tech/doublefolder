import OnboardingContainer from "@/components/onboarding/OnboardingContainer";
import { useAuth } from "@/lib/auth";

export default function OnboardingPage() {
  const { completeOnboarding } = useAuth();
  return <OnboardingContainer onComplete={completeOnboarding} />;
}

