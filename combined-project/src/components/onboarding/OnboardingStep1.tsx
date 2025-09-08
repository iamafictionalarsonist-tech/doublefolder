import { Search, Gem, Sparkles, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
interface OnboardingStep1Props {
  selectedProfile: string;
  onProfileSelect: (profile: string) => void;
  onConfirm: () => void;
  onStepSelect?: (step: number) => void;
}
const profileOptions = [{
  id: "pesquisador",
  title: "Pesquisador",
  description: "Encontre informações em artigo e estudos autorais",
  icon: Search
}, {
  id: "profissional",
  title: "Profissional",
  description: "Conecte ideias entre relatórios e documentos",
  icon: Gem
}, {
  id: "criativo",
  title: "Criativo",
  description: "Sintetize insights e inspirações para projetos criativos",
  icon: Sparkles
}, {
  id: "pessoal",
  title: "Pessoal",
  description: "Organize anotação e informações centralizadas",
  icon: Quote
}];
export default function OnboardingStep1({
  selectedProfile,
  onProfileSelect,
  onConfirm,
  onStepSelect
}: OnboardingStep1Props) {
  return <div className="w-screen h-screen bg-background font-fustat overflow-auto">
      <div className="h-full flex flex-col lg:flex-row">
        {/* Left side - 50% on desktop, full width on mobile */}
        <div className="w-full lg:w-1/2 lg:h-full flex flex-col px-8 sm:px-12 md:px-16 lg:px-82 pt-12 sm:pt-16 md:pt-20 lg:pt-[110px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-display text-text-primary font-fustat font-normal mb-4 sm:mb-6 lg:mb-[28px] leading-tight sm:leading-normal lg:leading-[78px]">
            Vamos começar!
            <br />
            Qual estilo mais
            <br />
            combina com seu
            <br />
            jeito de pensar?
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-subtitle text-subtitle-gray font-fustat font-medium mb-6 sm:mb-8 lg:mb-[60px] leading-normal lg:leading-[78px]">
            Escolha a opção desejada e clique em Confirmar para continuar
          </p>
          
          <Button 
            onClick={onConfirm} 
            disabled={!selectedProfile} 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-fustat font-medium rounded-full flex items-center justify-center gap-2 w-full sm:w-auto sm:px-8 lg:w-[210px] h-12 sm:h-14 lg:h-[64px] text-lg sm:text-xl lg:text-[22px] mb-8 lg:mb-[360px]"
          >
            Confirmar →
          </Button>
        </div>

        {/* Right side - 50% on desktop, full width on mobile */}
        <div className="w-full lg:w-1/2 lg:h-full grid grid-cols-1 sm:grid-cols-2 gap-0">
          {profileOptions.map((option, index) => {
          const IconComponent = option.icon;
          const isSelected = selectedProfile === option.id;
          return <button 
            key={option.id} 
            onClick={() => onProfileSelect(option.id)} 
            className="flex flex-col items-start justify-start p-4 sm:p-6 lg:p-8 transition-all duration-300 ease-out w-full min-h-[200px] sm:min-h-[250px] lg:h-full" 
            style={{
              background: isSelected ? '#2F78C4' : 'linear-gradient(45deg, #FFFFFF 0%, #EAEAEA 100%)',
              color: isSelected ? 'white' : '#000000'
            }} 
            onMouseEnter={e => {
              if (!isSelected) {
                e.currentTarget.style.background = '#2F78C4';
                e.currentTarget.style.color = 'white';
              }
            }} 
            onMouseLeave={e => {
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
              <p className="font-fustat font-normal text-left pb-4 sm:pb-6 lg:pb-8 py-2 lg:py-[10px] text-sm sm:text-base">
                {option.description}
              </p>
            </div>
          </button>;
        })}
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="fixed bottom-8 sm:bottom-16 lg:bottom-[100px] left-8 sm:left-12 md:left-16 lg:left-82 flex gap-2 sm:gap-3">
        {[1, 2, 3, 4, 5].map(step => (
          <button 
            key={step} 
            onClick={() => onStepSelect?.(step)} 
            className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full transition-colors duration-300 ${
              step <= 1 ? "bg-primary" : "bg-secondary hover:bg-secondary/80"
            }`} 
          />
        ))}
      </div>
    </div>;
}