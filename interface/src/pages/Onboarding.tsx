import OnboardingContainer from "@/components/onboarding/OnboardingContainer";
import { useAuth } from "@/lib/auth";

const Onboarding = () => {
  const { completeOnboarding } = useAuth();
  return <OnboardingContainer onComplete={completeOnboarding} />;
};

export default Onboarding;

