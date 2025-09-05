import React, { useState } from 'react';
import { MessageSquare, Plus, Archive, Folder, Settings, User, ChevronDown, Copy, ArrowUp, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

const Index = () => {
  const [inputValue, setInputValue] = useState('');
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isLeftMenuExpanded, setIsLeftMenuExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('chat');
  const [currentChat, setCurrentChat] = useState({
    id: 1,
    messages: [],
    subject: 'Experiência Profissional'
  });
  const [archivedChats, setArchivedChats] = useState([]);
  
  const sidebarIcons = [{
    icon: MessageSquare,
    label: 'Chat',
    action: 'toggleRightSidebar'
  }, {
    icon: Plus,
    label: 'New Chat',
    action: 'newChat'
  }, {
    icon: Archive,
    label: 'Archive',
    action: 'showArchive'
  }, {
    icon: Folder,
    label: 'Projects',
    action: 'showProjects'
  }, {
    icon: Settings,
    label: 'Settings',
    action: 'showSettings'
  }];
  
  const handleIconClick = (action) => {
    switch (action) {
      case 'toggleRightSidebar':
        setIsRightSidebarOpen(!isRightSidebarOpen);
        break;
      case 'newChat':
        // Save current chat to archive
        if (currentChat.messages.length > 0) {
          setArchivedChats([...archivedChats, currentChat]);
        }
        // Start new chat
        setCurrentChat({
          id: Date.now(),
          messages: [],
          subject: 'New Chat'
        });
        setActiveSection('chat');
        break;
      case 'showArchive':
        setActiveSection('archive');
        setIsLeftMenuExpanded(false);
        break;
      case 'showProjects':
        setActiveSection('projects');
        setIsLeftMenuExpanded(false);
        break;
      case 'showSettings':
        setActiveSection('settings');
        setIsLeftMenuExpanded(false);
        break;
      default:
        break;
    }
  };
  const notesData = [{
    time: 'Há 5 min.',
    content: 'A análise do fluxo de Onboarding mostra abandono na etapa com a seleção das opções. Hipótese: talvez falte clareza para que o usuário siga as opções. Acho que se repensar a estratégia e reformular a usabilidade com tooltips e toast de apoio pode ajudar.'
  }, {
    time: 'Há 45 min.',
    content: 'O Mapa de Calor aponta certa dispersão no Call to Action primário. Parece que o layout atual distribui muito a atenção entre os outros elementos não acionáveis. Acho que se reavaliar a hierarquia visual e simplificar o fluxo de decisão pode melhorar :)'
  }];
  return <div className="min-h-screen flex bg-white relative">
      {/* Left Sidebar */}
      <div 
        className={cn(
          "bg-[hsl(var(--smartshelf-blue))] flex flex-col justify-between py-6 transition-all duration-300",
          isLeftMenuExpanded ? "w-[240px]" : "w-[60px]"
        )}
        onMouseEnter={() => setIsLeftMenuExpanded(true)}
        onMouseLeave={() => setIsLeftMenuExpanded(false)}
      >
        {/* Top Icons */}
        <div className="flex flex-col space-y-4">
          {sidebarIcons.map((item, index) => (
            <button 
              key={index} 
              className={cn(
                "text-white hover:bg-white/10 transition-all duration-200 flex items-center",
                isLeftMenuExpanded ? "px-4 py-3 justify-start" : "px-[18px] py-3 justify-center"
              )}
              onClick={() => handleIconClick(item.action)}
              title={item.label}
            >
              <item.icon size={24} strokeWidth={1.5} />
              {isLeftMenuExpanded && (
                <span className="ml-3 text-sm font-medium">{item.label}</span>
              )}
            </button>
          ))}
        </div>
        
        {/* User Icon at bottom */}
        <div className="mt-auto">
          <button 
            className={cn(
              "text-white hover:bg-white/10 transition-all duration-200 flex items-center",
              isLeftMenuExpanded ? "px-4 py-3 justify-start w-full" : "px-[18px] py-3 justify-center"
            )}
            title="Profile"
          >
            <User size={24} strokeWidth={1.5} />
            {isLeftMenuExpanded && (
              <span className="ml-3 text-sm font-medium">Profile</span>
            )}
          </button>
        </div>
      </div>

      {/* Central Area */}
      <div className="flex-1 flex flex-col ml-4">
        {activeSection === 'chat' && (
          <>
            {/* Header */}
            <div className="pt-[66px] pl-[8px] pb-[48px]">
              <div className="flex items-center text-[hsl(var(--smartshelf-text))] font-fustat font-light text-[32px]">
                <span>Assunto: {currentChat.subject}</span>
                <ChevronDown size={20} className="ml-2" />
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 py-[8px] px-[8px]">
              <div className="space-y-6">
                {/* User Message */}
                <div className="bg-[hsl(var(--smartshelf-light-bg))] rounded-xl p-6">
                  <div className="flex gap-3">
                    <Avatar className="w-8 h-8 bg-[hsl(var(--smartshelf-blue))] flex-shrink-0">
                      <AvatarFallback className="bg-[hsl(var(--smartshelf-blue))] text-white text-sm font-medium">
                        D
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-[hsl(var(--smartshelf-text))] leading-relaxed text-lg">
                      <p>
                        Oi! Preciso de ajuda para descrever um projeto no meu currículo. 
                        Você lembra daquele trabalho de 2022—2023 no cliente automotivo, onde apliquei <strong>Design Thinking</strong> para resolver gargalos operacionais? Queria organizar melhor as informações para destacar o impacto que geramos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* System Response */}
                <div className="bg-white relative">
                  <div className="text-[hsl(var(--smartshelf-text))] leading-relaxed space-y-4 text-lg">
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
                    <Copy size={20} />
                  </button>
                </div>
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-8 py-[64px] px-[8px]">
              <div className="w-full max-w-[960px] h-[160px] bg-[#EFEFEF] rounded-3xl flex flex-col justify-between p-6">
                {/* Top Part - Input */}
                <div className="flex-1 flex items-start">
                  <Input 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                    placeholder="Olá, em que posso ajudar?" 
                    className="w-full border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-[hsl(var(--smartshelf-text))] font-fustat font-light resize-none placeholder:text-[#4D4D4D]" 
                    style={{
                      fontSize: '24px',
                      color: '#333333'
                    }} 
                  />
                </div>
                
                {/* Bottom Part - Controls */}
                <div className="flex items-center justify-between">
                  <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <Plus size={24} />
                  </button>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 font-fustat font-normal" style={{ fontSize: '18px', color: '#4D4D4D' }}>
                      <span>AI Model</span>
                      <ChevronDown size={16} />
                    </div>
                    
                    <Button size="icon" className="w-10 h-10 rounded-full bg-[hsl(var(--smartshelf-blue))] hover:bg-[hsl(var(--smartshelf-blue))]/90" disabled={!inputValue.trim()}>
                      <ArrowUp size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeSection === 'archive' && (
          <div className="flex-1 p-8">
            <h2 className="text-3xl font-light text-[hsl(var(--smartshelf-text))] mb-8">Chat Archive</h2>
            {archivedChats.length === 0 ? (
              <p className="text-gray-500">No archived chats yet. Start a new chat and save it to see it here.</p>
            ) : (
              <div className="space-y-4">
                {archivedChats.map((chat) => (
                  <div key={chat.id} className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <h3 className="font-medium">{chat.subject}</h3>
                    <p className="text-sm text-gray-600">Chat ID: {chat.id}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="flex-1 p-8">
            <h2 className="text-3xl font-light text-[hsl(var(--smartshelf-text))] mb-8">Projects</h2>
            <p className="text-gray-500">Your projects will appear here.</p>
          </div>
        )}

        {activeSection === 'settings' && (
          <div className="flex-1 p-8">
            <h2 className="text-3xl font-light text-[hsl(var(--smartshelf-text))] mb-8">Settings</h2>
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="font-medium mb-2">Appearance</h3>
                <p className="text-gray-600">Customize your interface theme and layout.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">AI Model</h3>
                <p className="text-gray-600">Choose your preferred AI model for conversations.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Privacy</h3>
                <p className="text-gray-600">Manage your data and privacy settings.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className={cn(
        "w-[460px] bg-[#2F78C4] fixed right-0 top-0 h-screen transition-transform duration-300",
        isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Header Notas Rápidas */}
        <div className="bg-[#2F78C4] text-white px-6 py-4 flex items-center justify-between mt-16">
          <span className="font-fustat font-light text-2xl">Notas rápidas</span>
          <button 
            onClick={() => setIsRightSidebarOpen(false)}
            className="hover:opacity-75 transition-opacity"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Cards de Nota */}
        <div className="flex flex-col">
          {notesData.map((note, index) => <div key={index}>
              <div className="w-full h-[235px] bg-white p-6 hover:shadow-sm transition-shadow duration-200 cursor-pointer flex flex-col">
                <div className="font-fustat font-medium mb-4" style={{ fontSize: '15px', color: '#A5A5A5' }}>{note.time}</div>
                <div className="font-fustat font-normal leading-relaxed flex-1" style={{ fontSize: '16px', color: '#4D4D4D' }}>
                  {note.content}
                </div>
              </div>
              {/* Linha divisória horizontal entre cards */}
              {index < notesData.length - 1 && <div className="h-px bg-white/20"></div>}
            </div>)}
        </div>

        {/* Botão Adicionar Nota - Fixo no Footer */}
        <div className="fixed bottom-0 right-0 w-[460px] p-4 bg-[#2F78C4]">
          <Button className="w-full bg-[#2F78C4] hover:bg-[#2F78C4]/90 text-white border-none font-fustat font-normal" style={{ fontSize: '18px' }}>
            + Adicionar Nota
          </Button>
        </div>
      </div>
    </div>;
};
export default Index;