import React, { useCallback, useMemo, useState } from 'react';
import { Plus, MessageSquareText, Archive, FolderCheck, Settings, User, ChevronDown, Copy, ArrowUp, ArrowRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
const Index = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLeftMenuExpanded, setIsLeftMenuExpanded] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [archivedChats, setArchivedChats] = useState<Array<{ id: number; title: string; createdAt: string }>>([]);

  const sidebarIcons = useMemo(() => ([{
    key: 'chat',
    icon: MessageSquareText,
    label: 'Chat'
  }, {
    key: 'new',
    icon: Plus,
    label: 'Novo chat'
  }, {
    key: 'archive',
    icon: Archive,
    label: 'Arquivo'
  }, {
    key: 'projects',
    icon: FolderCheck,
    label: 'Projetos'
  }, {
    key: 'settings',
    icon: Settings,
    label: 'Configurações'
  }]), []);

  const handleIconClick = useCallback((key: string) => {
    setIsLeftMenuExpanded(true);
    if (key === 'chat') {
      setIsRightSidebarOpen(true);
    } else if (key === 'new') {
      const id = Date.now();
      const title = 'Chat atual';
      setArchivedChats(prev => [{ id, title, createdAt: new Date().toLocaleString() }, ...prev]);
      setInputValue('');
    } else if (key === 'archive') {
      setIsArchiveOpen(true);
    } else if (key === 'projects') {
      setIsProjectsOpen(true);
    } else if (key === 'settings') {
      setIsSettingsOpen(true);
    }
  }, []);
  const notesData = [{
    time: 'Há 5 min.',
    content: 'A análise do fluxo de Onboarding mostra abandono na etapa com a seleção das opções. Hipótese: talvez falte clareza para que o usuário siga as opções. Acho que se repensar a estratégia e reformular a usabilidade com tooltips e toast de apoio pode ajudar.'
  }, {
    time: 'Há 45 min.',
    content: 'O Mapa de Calor aponta certa dispersão no Call to Action primário. Parece que o layout atual distribui muito a atenção entre os outros elementos não acionáveis. Acho que se reavaliar a hierarquia visual e simplificar o fluxo de decisão pode melhorar :)'
  }];
  return <div className="min-h-screen flex bg-white relative">
      {/* Sidebar Esquerda */}
      <div className="w-[60px] bg-[hsl(var(--smartshelf-blue))] flex flex-col justify-between items-center py-6 z-20 relative">
        {/* Ícones superiores */}
        <div className="flex flex-col items-center space-y-8">
          {sidebarIcons.map((item) => <button key={item.key} onClick={() => handleIconClick(item.key)} className="text-white hover:opacity-75 transition-opacity duration-200 group relative" title={item.label}>
              <item.icon size={24} strokeWidth={1.5} />
            </button>)}
        </div>
        
        {/* Ícone User na parte inferior */}
        <div className="pb-8">
          <button className="text-white hover:opacity-75 transition-opacity duration-200 group relative" title={sidebarIcons[sidebarIcons.length - 1].label}>
            <User size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Painel de expansão do menu esquerdo */}
      <div className={`fixed left-[60px] top-0 h-screen bg-white shadow-lg transition-transform duration-200 ease-linear z-10 ${isLeftMenuExpanded ? 'translate-x-0' : '-translate-x-full'} w-[220px]`}>
        <div className="pt-6">
          <div className="px-4 pb-4 flex items-center justify-between">
            <span className="text-[hsl(var(--smartshelf-text))] font-fustat">Menu</span>
            <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsLeftMenuExpanded(false)}>
              <ChevronLeft size={18} />
            </button>
          </div>
          <div className="flex flex-col">
            {sidebarIcons.map((item) => (
              <button key={item.key} onClick={() => handleIconClick(item.key)} className="flex items-center gap-3 py-3 px-4 text-[hsl(var(--smartshelf-text))] hover:bg-[hsl(var(--smartshelf-light-bg))]">
                <item.icon size={18} />
                <span className="font-fustat">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Área Central */}
      <div className="flex-1 flex flex-col max-w-[940px] ml-20" onClick={() => isLeftMenuExpanded && setIsLeftMenuExpanded(false)}>
        {/* Header */}
        <div className="pt-[66px] pl-[8px] pb-[48px]">
          <div className="flex items-center text-[hsl(var(--smartshelf-text))] font-fustat font-light text-[32px]">
            <span>Assunto: Experiência Profissional</span>
            <ChevronDown size={20} className="ml-2" />
          </div>
        </div>

        {/* Área de Mensagens */}
        <ScrollArea className="flex-1 py-[8px] px-[8px]">
          <div className="space-y-6">
            {/* Mensagem do Usuário */}
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

            {/* Resposta do Sistema */}
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
          <div className="w-[960px] h-[160px] bg-[#EFEFEF] rounded-3xl flex flex-col justify-between p-6">
            {/* Parte Superior - Placeholder */}
            <div className="flex-1 flex items-start">
              <Input value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Olá, em que posso ajudar?" className="w-full border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-[hsl(var(--smartshelf-text))] font-fustat font-light resize-none placeholder:text-[#4D4D4D]" style={{
              fontSize: '24px',
              color: '#333333'
            }} />
            </div>
            
            {/* Parte Inferior - Controles */}
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
      </div>

      {/* Painel Lateral Direito */}
      <div className={`w-[460px] bg-[#2F78C4] fixed right-0 top-0 h-screen transform transition-transform duration-200 ease-linear ${isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header Notas Rápidas */}
        <div className="bg-[#2F78C4] text-white px-6 py-4 flex items-center justify-between mt-16">
          <span className="font-fustat font-light text-2xl">Notas rápidas</span>
          <button className="text-white/90 hover:text-white" onClick={() => setIsRightSidebarOpen(false)}>
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

      {/* Dialog: Arquivo */}
      <Dialog open={isArchiveOpen} onOpenChange={setIsArchiveOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Chats arquivados</DialogTitle>
          </DialogHeader>
          <div className="max-h-[50vh] overflow-auto">
            {archivedChats.length === 0 ? (
              <div className="text-sm text-muted-foreground">Nenhum chat arquivado ainda.</div>
            ) : (
              <ul className="space-y-2">
                {archivedChats.map(c => (
                  <li key={c.id} className="flex items-center justify-between rounded-md border px-3 py-2">
                    <span className="text-sm">{c.title}</span>
                    <span className="text-xs text-muted-foreground">{c.createdAt}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog: Projetos */}
      <Dialog open={isProjectsOpen} onOpenChange={setIsProjectsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Projetos</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-muted-foreground">Seção de gerenciamento de projetos (em breve).</div>
        </DialogContent>
      </Dialog>

      {/* Dialog: Configurações */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Configurações</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-muted-foreground">Painel de configurações do usuário (em breve).</div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default Index;