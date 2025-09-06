import { Target, Cable, Compass, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OnboardingStep3Props {
  selectedCommunication: string;
  onCommunicationSelect: (communication: string) => void;
  onConfirm: () => void;
  onStepSelect?: (step: number) => void;
}

const communicationOptions = [
  {
    id: "objetiva",
    title: "Objetiva",
    description: "Informações precisas e focadas.",
    icon: Target,
  },
  {
    id: "conectiva",
    title: "Conectiva",
    description: "Descoberta de relações e padrões ocultos.",
    icon: Cable,
  },
  {
    id: "exploratoria",
    title: "Exploratória",
    description: "Insights detalhados e contextualizados.",
    icon: Compass,
  },
  {
    id: "resumida",
    title: "Resumida",
    description: "Síntese clara e acionável.",
    icon: FileText,
  },
];

export default function OnboardingStep3({ selectedCommunication, onCommunicationSelect, onConfirm, onStepSelect }: OnboardingStep3Props) {
  return (
    <div className="w-screen h-screen bg-background font-fustat">
      <div className="h-full flex">
        {/* Left side - 50% */}
        <div className="w-1/2 h-full flex flex-col" style={{ paddingTop: '110px', paddingLeft: '82px' }}>
          <h1 className="text-display text-text-primary font-fustat font-normal" style={{ marginBottom: '28px', lineHeight: '78px', letterSpacing: '-1%' }}>
            Como você
            <br />
            prefere que a IA
            <br />
            se comunique
            <br />
            com você?
          </h1>
          <p className="text-subtitle text-subtitle-gray font-fustat font-medium" style={{ marginBottom: '60px', lineHeight: '78px' }}>
            Escolha a opção desejada e clique em Confirmar para continuar
          </p>
          
          <Button 
            onClick={onConfirm}
            disabled={!selectedCommunication}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-fustat font-medium rounded-full flex items-center justify-center gap-2"
            style={{ width: '210px', height: '64px', marginBottom: '360px', fontSize: '22px' }}
          >
            Confirmar →
          </Button>
        </div>

        {/* Right side - 50% */}
        <div className="w-1/2 h-full grid grid-cols-2 gap-0" style={{ gridRowGap: '0', gridColumnGap: '0' }}>
          {communicationOptions.map((option) => {
            const IconComponent = option.icon;
            const isSelected = selectedCommunication === option.id;
            
            return (
              <button
                key={option.id}
                onClick={() => onCommunicationSelect(option.id)}
                className="flex flex-col items-start justify-start p-8 transition-all duration-300 ease-out w-full h-full"
                style={{ 
                  background: isSelected 
                    ? '#2F78C4' 
                    : 'linear-gradient(45deg, #FFFFFF 0%, #EAEAEA 100%)',
                  color: isSelected ? 'white' : '#000000'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = '#2F78C4';
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = 'linear-gradient(45deg, #FFFFFF 0%, #EAEAEA 100%)';
                    e.currentTarget.style.color = '#000000';
                  }
                }}
              >
                <div className="flex flex-col items-start h-full justify-between w-full">
                  <div className="flex flex-col items-start gap-4 pt-4">
                    <IconComponent size={74} strokeWidth={0.8} />
                    <h3 className="font-fustat font-normal text-left" style={{ fontSize: '28px' }}>
                      {option.title}
                    </h3>
                  </div>
                  <p className="font-fustat font-normal text-left pb-8" style={{ fontSize: '16px' }}>
                    {option.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="fixed left-82 flex gap-3" style={{ bottom: '100px' }}>
        {[1, 2, 3, 4, 5].map((step) => (
          <button
            key={step}
            onClick={() => onStepSelect?.(step)}
            className={`w-6 h-6 rounded-full transition-colors duration-300 ${
              step <= 3 ? "bg-primary" : "bg-secondary hover:bg-secondary/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}