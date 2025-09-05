import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import OnboardingStep1 from "./OnboardingStep1";
import OnboardingStep2 from "./OnboardingStep2";
import OnboardingStep3 from "./OnboardingStep3";
import OnboardingStep4 from "./OnboardingStep4";
import OnboardingStep5 from "./OnboardingStep5";

export default function OnboardingContainer() {
  const navigate = useNavigate();
  const { completeOnboarding } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState("");
  const [selectedVolume, setSelectedVolume] = useState("");
  const [selectedCommunication, setSelectedCommunication] = useState("");

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
      navigate("/");
    }
  };

  const handleSkip = () => {
    completeOnboarding();
    navigate("/");
  };

  const handleStepSelect = (step: number) => {
    setCurrentStep(step);
  };

  switch (currentStep) {
    case 1:
      return (
        <OnboardingStep1
          selectedProfile={selectedProfile}
          onProfileSelect={setSelectedProfile}
          onConfirm={handleNext}
          onStepSelect={handleStepSelect}
        />
      );
    case 2:
      return (
        <OnboardingStep2
          selectedVolume={selectedVolume}
          onVolumeSelect={setSelectedVolume}
          onConfirm={handleNext}
          onStepSelect={handleStepSelect}
        />
      );
    case 3:
      return (
        <OnboardingStep3
          selectedCommunication={selectedCommunication}
          onCommunicationSelect={setSelectedCommunication}
          onConfirm={handleNext}
          onStepSelect={handleStepSelect}
        />
      );
    case 4:
      return (
        <OnboardingStep4
          onConfirm={handleNext}
          onStepSelect={handleStepSelect}
        />
      );
    case 5:
      return (
        <OnboardingStep5
          onConfirm={handleNext}
          onSkip={handleSkip}
          onStepSelect={handleStepSelect}
        />
      );
    default:
      return null;
  }
}