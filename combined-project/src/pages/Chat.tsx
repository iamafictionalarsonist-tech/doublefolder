import React, { useState } from "react";
import {
  Columns2,
  Plus,
  MessageSquareText,
  FolderCheck,
  Settings,
  User,
  ChevronDown,
  Copy,
  ArrowUp,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const sidebarIcons = [
    {
      icon: Columns2,
      label: "Expandir menu"
    },
    {
      icon: Plus,
      label: "Novo chat"
    },
    {
      icon: MessageSquareText,
      label: "Histórico"
    },
    {
      icon: FolderCheck,
      label: "Projetos"
    },
    {
      icon: Settings,
      label: "Configurações"
    },
    {
      icon: User,
      label: "Perfil"
    }
  ];
  const notesData = [
    {
      time: "Há 5 min.",
      content:
        "A análise do fluxo de Onboarding mostra abandono na etapa com a seleção das opções. Hipótese: talvez falte clareza para que o usuário siga as opções. Acho que se repensar a estratégia e reformular a usabilidade com tooltips e toast de apoio pode ajudar."
    },
    {
      time: "Há 45 min.",
      content:
        "O Mapa de Calor aponta certa dispersão no Call to Action primário. Parece que o layout atual distribui muito a atenção entre os outros elementos não acionáveis. Acho que se reavaliar a hierarquia visual e simplificar o fluxo de decisão pode melhorar :)"
    }
  ];
  return (
    <div className="min-h-screen flex bg-white relative">
      {/* Sidebar Esquerda */}
      <div className="w-[60px] lg:w-[60px] md:w-[50px] sm:w-[45px] bg-[hsl(var(--smartshelf-blue))] flex flex-col justify-between items-center py-4 sm:py-6 fixed lg:relative h-full z-10">
        {/* Ícones superiores */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          {sidebarIcons.slice(0, -1).map((item, index) => (
            <button
              key={index}
              className="text-white hover:opacity-75 transition-opacity duration-200 group relative"
              title={item.label}
            >
              <item.icon size={20} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
            </button>
          ))}
        </div>

        {/* Ícone User na parte inferior */}
        <div className="pb-6 sm:pb-8">
          <button
            className="text-white hover:opacity-75 transition-opacity duration-200 group relative"
            title={sidebarIcons[sidebarIcons.length - 1].label}
          >
            <User size={20} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Área Central */}
      <div className="flex-1 flex flex-col max-w-none lg:max-w-[940px] ml-[45px] sm:ml-[50px] lg:ml-20 mr-0 lg:mr-[460px]">
        {/* Header */}
        <div className="pt-8 sm:pt-12 lg:pt-[66px] pl-2 sm:pl-4 lg:pl-[8px] pb-6 sm:pb-8 lg:pb-[48px] px-4 lg:px-0">
          <div className="flex items-center text-[hsl(var(--smartshelf-text))] font-fustat font-light text-lg sm:text-xl md:text-2xl lg:text-[32px]">
            <span className="truncate">Assunto: Experiência Profissional</span>
            <ChevronDown size={16} className="ml-2 flex-shrink-0 sm:w-5 sm:h-5" />
          </div>
        </div>

        {/* Área de Mensagens */}
        <ScrollArea className="flex-1 py-2 sm:py-[8px] px-2 sm:px-4 lg:px-[8px]">
          <div className="space-y-4 sm:space-y-6">
            {/* Mensagem do Usuário */}
            <div className="bg-[hsl(var(--smartshelf-light-bg))] rounded-xl p-4 sm:p-6">
              <div className="flex gap-2 sm:gap-3">
                <Avatar className="w-6 h-6 sm:w-8 sm:h-8 bg-[hsl(var(--smartshelf-blue))] flex-shrink-0">
                  <AvatarFallback className="bg-[hsl(var(--smartshelf-blue))] text-white text-xs sm:text-sm font-medium">
                    D
                  </AvatarFallback>
                </Avatar>
                <div className="text-[hsl(var(--smartshelf-text))] leading-relaxed text-sm sm:text-base lg:text-lg">
                  <p>
                    Oi! Preciso de ajuda para descrever um projeto no meu currículo.
                    Você lembra daquele trabalho de 2022—2023 no cliente automotivo, onde apliquei <strong>Design Thinking</strong> para resolver gargalos operacionais? Queria organizar melhor as informações para destacar o impacto que geramos.
                  </p>
                </div>
              </div>
            </div>

            {/* Resposta do Sistema */}
            <div className="bg-white relative">
              <div className="text-[hsl(var(--smartshelf-text))] leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg">
                <p>
                  <strong>Claro!</strong> Você está se referindo àquele projeto estratégico no setor automotivo, onde você liderou duas frentes bem impactantes.
                </p>

                <p>
                  No primeiro projeto, você desenvolveu um aplicativo de agendamento de manutenção aplicando <strong>Design Thinking</strong>, Service Design e UX Research, tudo integrado a um Design System robusto. O resultado foi surpreendente: avaliações majoritariamente cinco estrelas e crescimento significativo nos agendamentos online já no primeiro mês, impactando a experiência de clientes em múltiplos países da América Latina e Ásia.
                </p>

                <p>
                  Paralelamente, você modernizou uma Plataforma de Gestão para Concessionárias, reestruturando processos através de Service Blueprints e Arquitetura da Informação. Os números foram expressivos: redução considerável no tempo de atendimento e espera, além de uma aceleração substancial nas rotinas operacionais. No geral, a performance da plataforma teve um crescimento muito relevante. Foi um trabalho que realmente consolidou um novo padrão de excelência no setor, combinando estratégia de negócios com design centrado no usuário de forma bem elegante.
                </p>
              </div>

              <button className="absolute bottom-0 right-0 text-gray-400 hover:text-gray-600 transition-colors">
                <Copy size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 sm:p-6 lg:p-8 py-8 sm:py-12 lg:py-[64px] px-2 sm:px-4 lg:px-[8px]">
          <div className="w-full max-w-[960px] h-auto min-h-[120px] sm:min-h-[140px] lg:h-[160px] bg-[#EFEFEF] rounded-2xl sm:rounded-3xl flex flex-col justify-between p-4 sm:p-5 lg:p-6">
            {/* Parte Superior - Placeholder */}
            <div className="flex-1 flex items-start">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Olá, em que posso ajudar?"
                className="w-full border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-[hsl(var(--smartshelf-text))] font-fustat font-light resize-none placeholder:text-[#4D4D4D] text-base sm:text-lg lg:text-2xl"
                style={{ color: "#333333" }}
              />
            </div>

            {/* Parte Inferior - Controles */}
            <div className="flex items-center justify-between mt-4 lg:mt-0">
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <Plus size={20} className="sm:w-6 sm:h-6" />
              </button>

              <div className="flex items-center space-x-2 sm:space-x-4">
                <div
                  className="hidden sm:flex items-center space-x-2 font-fustat font-normal"
                  style={{ fontSize: "16px", color: "#4D4D4D" }}
                >
                  <span>AI Model</span>
                  <ChevronDown size={14} />
                </div>

                <Button
                  size="icon"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[hsl(var(--smartshelf-blue))] hover:bg-[hsl(var(--smartshelf-blue))]/90"
                  disabled={!inputValue.trim()}
                >
                  <ArrowUp size={16} className="sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Painel Lateral Direito */}
      <div className="hidden lg:block w-[460px] xl:w-[460px] lg:w-[380px] bg-[#2F78C4] fixed right-0 top-0 h-screen overflow-y-auto">
        {/* Header Notas Rápidas */}
        <div className="bg-[#2F78C4] text-white px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between mt-12 lg:mt-16">
          <span className="font-fustat font-light text-lg lg:text-2xl">Notas rápidas</span>
          <ArrowRight size={18} className="lg:w-5 lg:h-5" />
        </div>

        {/* Cards de Nota */}
        <div className="flex flex-col pb-20">
          {notesData.map((note, index) => (
            <div key={index}>
              <div className="w-full min-h-[200px] lg:h-[235px] bg-white p-4 lg:p-6 hover:shadow-sm transition-shadow duration-200 cursor-pointer flex flex-col">
                <div
                  className="font-fustat font-medium mb-3 lg:mb-4"
                  style={{ fontSize: "14px", color: "#A5A5A5" }}
                >
                  {note.time}
                </div>
                <div
                  className="font-fustat font-normal leading-relaxed flex-1 text-sm lg:text-base"
                  style={{ color: "#4D4D4D" }}
                >
                  {note.content}
                </div>
              </div>
              {/* Linha divisória horizontal entre cards */}
              {index < notesData.length - 1 && <div className="h-px bg-white/20"></div>}
            </div>
          ))}
        </div>

        {/* Botão Adicionar Nota - Fixo no Footer */}
        <div className="fixed bottom-0 right-0 w-[380px] lg:w-[460px] p-3 lg:p-4 bg-[#2F78C4]">
          <Button className="w-full bg-[#2F78C4] hover:bg-[#2F78C4]/90 text-white border-none font-fustat font-normal text-base lg:text-lg">
            + Adicionar Nota
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;