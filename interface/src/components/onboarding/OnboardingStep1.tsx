import { Search, Gem, Sparkles, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OnboardingStep1Props {
  selectedProfile: string;
  onProfileSelect: (profile: string) => void;
  onConfirm: () => void;
  onStepSelect?: (step: number) => void;
}

const profileOptions = [
  { id: "pesquisador", title: "Pesquisador", description: "Encontre informações em artigo e estudos autorais", icon: Search },
  { id: "profissional", title: "Profissional", description: "Conecte ideias entre relatórios e documentos", icon: Gem },
  { id: "criativo", title: "Criativo", description: "Sintetize insights e inspirações para projetos criativos", icon: Sparkles },
  { id: "pessoal", title: "Pessoal", description: "Organize anotação e informações centralizadas", icon: Quote },
];

export default function OnboardingStep1({ selectedProfile, onProfileSelect, onConfirm, onStepSelect }: OnboardingStep1Props) {
  return (
    <div className="w-screen h-screen bg-background font-fustat">
      <div className="h-full flex">
        {/* Left side - 50% */}
        <div className="w-1/2 h-full flex flex-col" style={{ paddingTop: '110px', paddingLeft: '82px' }}>
          <h1 className="text-display text-text-primary font-fustat font-normal" style={{ marginBottom: '28px', lineHeight: '78px', letterSpacing: '-1%' }}>
            Vamos começar!
            <br />
            Qual estilo mais
            <br />
            combina com seu
            <br />
            jeito de pensar?
          </h1>
          <p className="text-subtitle text-subtitle-gray font-fustat font-medium" style={{ marginBottom: '60px', lineHeight: '78px' }}>Escolha a opção desejada e clique em Confirmar para continuar</p>
          
          <Button
            onClick={onConfirm}
            disabled={!selectedProfile}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-fustat font-medium rounded-full flex items-center justify-center gap-2"
            style={{ width: '210px', height: '64px', marginBottom: '360px', fontSize: '22px' }}
          >
            Confirmar →
          </Button>
        </div>

        {/* Right side - 50% */}
        <div className="w-1/2 h-full grid grid-cols-2 gap-0" style={{ gridRowGap: '0', gridColumnGap: '0' }}>
          {profileOptions.map((option) => {
            const IconComponent = option.icon;
            const isSelected = selectedProfile === option.id;
            return (
              <button
                key={option.id}
                onClick={() => onProfileSelect(option.id)}
                className="flex flex-col items-start justify-start p-8 transition-all duration-300 ease-out w-full h-full"
                style={{
                  background: isSelected ? '#2F78C4' : 'linear-gradient(45deg, #FFFFFF 0%, #EAEAEA 100%)',
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
                  <div className="flex flex-col items-start gap-4 pt-4 py-0">
                    <IconComponent size={74} strokeWidth={0.8} />
                    <h3 className="font-fustat font-normal text-left" style={{ fontSize: '28px' }}>
                      {option.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '16px' }} className="font-fustat font-normal text-left pb-8 py-[10px]">
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
        {[1, 2, 3, 4, 5].map(step => (
          <button key={step} onClick={() => onStepSelect?.(step)} className={`w-6 h-6 rounded-full transition-colors duration-300 ${step <= 1 ? "bg-primary" : "bg-secondary hover:bg-secondary/80"}`} />
        ))}
      </div>
    </div>
  );
}

