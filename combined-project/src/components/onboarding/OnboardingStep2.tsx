import { Baby, Coffee, Brain, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OnboardingStep2Props {
  selectedVolume: string;
  onVolumeSelect: (volume: string) => void;
  onConfirm: () => void;
  onStepSelect?: (step: number) => void;
}

const volumeOptions = [
  {
    id: "reduzido",
    title: "Reduzido",
    description: "Ideal para uso leve, pessoal ou pontual.",
    icon: Baby,
  },
  {
    id: "moderado",
    title: "Moderado",
    description: "Para rotina estável com volume equilibrado.",
    icon: Coffee,
  },
  {
    id: "grande",
    title: "Grande",
    description: "Fluxo intenso e gestão frequente de arquivos.",
    icon: Brain,
  },
  {
    id: "personalizado",
    title: "Personalizado",
    description: "Adapte conforme sua demanda específica.",
    icon: SlidersHorizontal,
  },
];

export default function OnboardingStep2({ selectedVolume, onVolumeSelect, onConfirm, onStepSelect }: OnboardingStep2Props) {
  return (
    <div className="w-screen h-screen bg-background font-fustat overflow-auto">
      <div className="h-full flex flex-col lg:flex-row">
        {/* Left side - 50% on desktop, full width on mobile */}
        <div className="w-full lg:w-1/2 lg:h-full flex flex-col px-8 sm:px-12 md:px-16 lg:px-82 pt-12 sm:pt-16 md:pt-20 lg:pt-[110px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-display text-text-primary font-fustat font-normal mb-4 sm:mb-6 lg:mb-[28px] leading-tight sm:leading-normal lg:leading-[78px]">
            Qual volume
            <br />
            de documentos
            <br />
            você gostaria
            <br />
            de gerenciar?
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-subtitle text-subtitle-gray font-fustat font-medium mb-6 sm:mb-8 lg:mb-[60px] leading-normal lg:leading-[78px]">
            Escolha a opção desejada e clique em Confirmar para continuar
          </p>
          
          <Button 
            onClick={onConfirm}
            disabled={!selectedVolume}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-fustat font-medium rounded-full flex items-center justify-center gap-2 w-full sm:w-auto sm:px-8 lg:w-[210px] h-12 sm:h-14 lg:h-[64px] text-lg sm:text-xl lg:text-[22px] mb-8 lg:mb-[360px]"
          >
            Confirmar →
          </Button>
        </div>

        {/* Right side - 50% on desktop, full width on mobile */}
        <div className="w-full lg:w-1/2 lg:h-full grid grid-cols-1 sm:grid-cols-2 gap-0">
          {volumeOptions.map((option) => {
            const IconComponent = option.icon;
            const isSelected = selectedVolume === option.id;
            
            return (
              <button
                key={option.id}
                onClick={() => onVolumeSelect(option.id)}
                className="flex flex-col items-start justify-start p-4 sm:p-6 lg:p-8 transition-all duration-300 ease-out w-full min-h-[200px] sm:min-h-[250px] lg:h-full"
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
                  <div className="flex flex-col items-start gap-2 sm:gap-3 lg:gap-4 pt-2 sm:pt-3 lg:pt-4">
                    <IconComponent size={40} className="sm:w-14 sm:h-14 lg:w-[74px] lg:h-[74px]" strokeWidth={0.8} />
                    <h3 className="font-fustat font-normal text-left text-xl sm:text-2xl lg:text-[28px]">
                      {option.title}
                    </h3>
                  </div>
                  <p className="font-fustat font-normal text-left pb-4 sm:pb-6 lg:pb-8 text-sm sm:text-base">
                    {option.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="fixed bottom-8 sm:bottom-16 lg:bottom-[100px] left-8 sm:left-12 md:left-16 lg:left-82 flex gap-2 sm:gap-3">
        {[1, 2, 3, 4, 5].map((step) => (
          <button
            key={step}
            onClick={() => onStepSelect?.(step)}
            className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full transition-colors duration-300 ${
              step <= 2 ? "bg-primary" : "bg-secondary hover:bg-secondary/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}