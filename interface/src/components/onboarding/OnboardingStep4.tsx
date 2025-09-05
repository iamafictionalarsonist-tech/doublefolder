import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface OnboardingStep4Props {
  onConfirm: () => void;
  onStepSelect?: (step: number) => void;
}

export default function OnboardingStep4({ onConfirm, onStepSelect }: OnboardingStep4Props) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-screen h-screen bg-background font-fustat">
      <div className="h-full flex">
        {/* Left side - 50% */}
        <div className="w-1/2 h-full flex flex-col pt-110 px-82">
          <h1 className="text-display text-text-primary mb-28 font-fustat font-normal" style={{ letterSpacing: '-1%' }}>
            Sua privacidade
            <br />
            é essencial, e
            <br />
            aqui você está
            <br />
            no controle.
          </h1>
          <p className="text-subtitle text-subtitle-gray mb-60 font-fustat font-medium">
            Leia os termos de consentimento antes de iniciar o uso da ferramenta.
          </p>
          
          <Button
            onClick={onConfirm}
            disabled={!isChecked}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-fustat font-medium rounded-full flex items-center justify-center gap-2"
            style={{ width: '210px', height: '64px', marginBottom: '360px', fontSize: '22px' }}
          >
            Confirmar →
          </Button>
        </div>

        {/* Right side - 50% */}
        <div className="w-1/2 h-full bg-terms-background flex flex-col justify-center">
          <div className="p-82 px-[140px]">
            <div className="text-justify space-y-4 text-text-primary font-fustat">
              <h2 className="text-2xl font-semibold mb-8 text-center">TERMOS DE CONSENTIMENTO</h2>
              
              <p className="font-fustat font-medium" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                Este sistema opera com base em um modelo de processamento 100% local, o que significa que todas as análises e atividades realizadas por funcionalidades de inteligência artificial ocorrem exclusivamente no seu dispositivo. Nenhuma informação pessoal, documento, conversa ou qualquer outro dado gerado por você é enviado para a internet, servidores remotos ou acessado por terceiros.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Processamento 100% local no dispositivo</h3>
              <p className="font-fustat font-medium" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                Todas as atividades de análise e processamento são realizadas no próprio dispositivo do usuário, sem qualquer envio de dados para servidores, nuvens ou redes públicas. Esse funcionamento assegura que o tratamento ocorra apenas no ambiente local, garantindo privacidade e segurança. O sistema não faz coleta remota, rastreamento ou sincronização automática, mantendo toda a operação restrita ao seu equipamento.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Controle absoluto sobre integrações opcionais</h3>
              <p className="font-fustat font-medium" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                Este sistema pode oferecer recursos que exijam conexão com serviços externos (como pesquisa na web ou ferramentas de geração de conteúdo). No entanto, essas integrações são totalmente opcionais e dependem do consentimento do usuário. Nenhuma funcionalidade externa será ativada sem autorização clara, e sempre haverá transparência quanto aos dados envolvidos e à finalidade do uso.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Nenhum dado enviado para externos</h3>
              <p className="font-fustat font-medium" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                O sistema foi projetado para funcionar isoladamente, sem estabelecer comunicação com agentes externos. Isso inclui não transmitir documentos, conversas, registros de interação ou qualquer dado pessoal que comprometa sua privacidade. A ausência total de tráfego de dados elimina riscos de interceptação ou vazamento de informações confidenciais.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Seus arquivos permanecem exclusivamente seus</h3>
              <p className="font-fustat font-medium" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                Todos os arquivos e conteúdos gerados ou processados permanecem sob sua propriedade. Não existe vínculo com infraestrutura externa que limite acesso ou controle. Você pode exportar, fazer backups ou excluir dados permanentemente. Essa autonomia garante pleno controle e respeito à privacidade individual.
              </p>
            </div>

            <div
              className={`bg-white p-4 mt-8 transition-all duration-300 ${isChecked ? 'border-2' : 'border border-gray-200'}`}
              style={{ borderRadius: '6px', ...(isChecked ? { borderColor: '#2F78C4' } : {}) }}
            >
              <div className="flex items-start space-x-3 py-[4px] px-[4px]">
                <Checkbox id="consent" checked={isChecked} onCheckedChange={(checked) => setIsChecked(checked === true)} className="mt-1" />
                <label
                  htmlFor="consent"
                  style={{ fontSize: '15px', lineHeight: '1.5' }}
                  className="font-fustat font-medium cursor-pointer text-text-primary px-[2px]"
                >
                  Declaro que compreendo e concordo que meus dados são processados exclusivamente no meu
                  dispositivo, conforme as condições acima descritas.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="fixed bottom-100 left-82 flex gap-3">
        {[1, 2, 3, 4, 5].map(step => (
          <button key={step} onClick={() => onStepSelect?.(step)} className={`w-6 h-6 rounded-full transition-colors duration-300 ${step <= 4 ? "bg-primary" : "bg-secondary hover:bg-secondary/80"}`} />
        ))}
      </div>
    </div>
  );
}

