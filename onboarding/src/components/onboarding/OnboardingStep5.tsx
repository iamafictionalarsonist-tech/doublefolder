import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface OnboardingStep5Props {
  onConfirm: () => void;
  onSkip: () => void;
  onStepSelect?: (step: number) => void;
}

export default function OnboardingStep5({ onConfirm, onSkip, onStepSelect }: OnboardingStep5Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = ['.pdf', '.doc', '.docx', '.txt', '.md'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (allowedTypes.includes(fileExtension)) {
        setSelectedFile(file);
      } else {
        alert('Formato não suportado. Use PDF, DOC, DOCX, TXT ou MD.');
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const allowedTypes = ['.pdf', '.doc', '.docx', '.txt', '.md'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (allowedTypes.includes(fileExtension)) {
        setSelectedFile(file);
      } else {
        alert('Formato não suportado. Use PDF, DOC, DOCX, TXT ou MD.');
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-screen h-screen bg-background font-fustat">
      <div className="h-full flex">
        {/* Left side - 50% */}
        <div className="w-1/2 h-full flex flex-col pt-110 px-82">
          <h1 className="text-display text-text-primary mb-28 font-fustat font-normal" style={{ letterSpacing: '-1%' }}>
            Adicione um
            <br />
            documento
            <br />
            para começar
            <br />
            a experimentar
          </h1>
          <p className="text-subtitle text-subtitle-gray mb-60 font-fustat font-medium">
            Comece explorando com um arquivo nos formatos PDF, DOC, TXT ou MD.
          </p>
          
          <Button 
            onClick={onConfirm}
            disabled={!selectedFile}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-fustat font-medium rounded-full flex items-center justify-center gap-2"
            style={{ width: '210px', height: '64px', marginBottom: '360px', fontSize: '22px' }}
          >
            Confirmar →
          </Button>
        </div>

        {/* Right side - 50% */}
        <div className="w-1/2 h-full flex items-center justify-center p-16 relative" style={{ backgroundColor: '#2F78C4' }}>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-full h-full border-2 border-dashed border-white rounded-lg flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Upload size={74} className="text-white mb-8" strokeWidth={0.8} />
            
            {selectedFile ? (
              <div className="text-center">
                <p className="text-lg font-medium text-white mb-2 font-fustat">Arquivo selecionado:</p>
                <p className="text-base text-white bg-white/20 px-4 py-2 rounded-lg font-fustat">
                  {selectedFile.name}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-2xl font-medium text-white mb-4 font-fustat">
                  Arraste seus arquivos aqui
                </p>
                <p className="text-lg text-white mb-8 font-fustat">
                  ou clique abaixo para selecionar
                </p>
                
                <input
                  type="file"
                  id="file-input"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt,.md"
                  onChange={handleFileSelect}
                />
                <label htmlFor="file-input">
                  <Button 
                    asChild
                    className="bg-white text-primary hover:bg-white/90 font-fustat font-medium rounded-full cursor-pointer"
                    style={{ width: '180px', height: '48px', fontSize: '16px' }}
                  >
                    <span>Selecionar arquivo</span>
                  </Button>
                </label>
              </div>
            )}
          </div>
          
          {/* Pular etapa - bottom positioned */}
          <button 
            onClick={onSkip}
            className="absolute bottom-8 text-white hover:text-white/80 font-fustat font-medium underline transition-colors"
            style={{ fontSize: '16px' }}
          >
            Pular etapa
          </button>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="fixed bottom-100 left-82 flex gap-3">
        {[1, 2, 3, 4, 5].map((step) => (
          <button
            key={step}
            onClick={() => onStepSelect?.(step)}
            className={`w-6 h-6 rounded-full transition-colors duration-300 ${
              step <= 5 ? "bg-primary" : "bg-secondary hover:bg-secondary/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}