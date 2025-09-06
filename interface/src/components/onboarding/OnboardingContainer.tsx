import { useState } from "react";
import OnboardingStep1 from "./OnboardingStep1";
import OnboardingStep2 from "./OnboardingStep2";
import OnboardingStep3 from "./OnboardingStep3";
import OnboardingStep4 from "./OnboardingStep4";
import OnboardingStep5 from "./OnboardingStep5";

interface OnboardingContainerProps {
  onComplete: () => void;
}

export default function OnboardingContainer({ onComplete }: OnboardingContainerProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState("");
  const [selectedVolume, setSelectedVolume] = useState("");
  const [selectedCommunication, setSelectedCommunication] = useState("");

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
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