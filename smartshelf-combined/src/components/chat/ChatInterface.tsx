import React, { useEffect, useMemo, useState } from 'react';
import { Plus, MessageSquareText, FolderCheck, Settings, User, ChevronDown, ArrowUp, ArrowRight, LogOut, Archive, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ChatInterface = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ id: string; role: 'user' | 'assistant'; text: string }[]>([]);
  const [archived, setArchived] = useState<{ id: string; title: string; messages: { id: string; role: 'user' | 'assistant'; text: string }[] }[]>([]);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ss:archived-chats');
      if (saved) setArchived(JSON.parse(saved));
    } catch (_) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('ss:archived-chats', JSON.stringify(archived));
    } catch (_) {}
  }, [archived]);

  const currentTitle = useMemo(() => {
    if (messages.length === 0) return 'Novo chat';
    const first = messages.find(m => m.role === 'user');
    return first ? (first.text.slice(0, 40) + (first.text.length > 40 ? '…' : '')) : 'Chat';
  }, [messages]);

  const sidebarIcons = [
    { icon: MessageSquareText, label: 'Chat', key: 'chat' },
    { icon: Plus, label: 'Novo chat', key: 'new' },
    { icon: Archive, label: 'Arquivo', key: 'archive' },
    { icon: FolderCheck, label: 'Projetos', key: 'projects' },
    { icon: Settings, label: 'Configurações', key: 'settings' },
  ];

  const handleNewChat = () => {
    if (messages.length > 0) {
      const id = `${Date.now()}`;
      setArchived(prev => [{ id, title: currentTitle, messages }, ...prev]);
    }
    setMessages([]);
    setInputValue('');
  };

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    const now = Date.now();
    const newUserMessage = { id: `${now}-u`, role: 'user' as const, text: trimmed };
    const newAssistantMessage = { id: `${now}-a`, role: 'assistant' as const, text: 'Entendi. Pode me contar mais?' };
    setMessages(prev => [...prev, newUserMessage, newAssistantMessage]);
    setInputValue('');
  };

  const handleIconClick = (key: string) => {
    if (!isMenuExpanded) {
      setIsMenuExpanded(true);
      return;
    }
    if (key === 'chat') setIsRightSidebarOpen(true);
    if (key === 'archive') setIsArchiveOpen(true);
    if (key === 'projects') setIsProjectsOpen(true);
    if (key === 'settings') setIsSettingsOpen(true);
    if (key === 'new') handleNewChat();
  };

  const notesData = [{
    time: 'Há 5 min.',
    content: 'A análise do fluxo de Onboarding mostra abandono na etapa com a seleção das opções. Hipótese: talvez falte clareza para que o usuário siga as opções. Acho que se repensar a estratégia e reformular a usabilidade com tooltips e toast de apoio pode ajudar.'
  }, {
    time: 'Há 45 min.',
    content: 'O Mapa de Calor aponta certa dispersão no Call to Action primário. Parece que o layout atual distribui muito a atenção entre os outros elementos não acionáveis. Acho que se reavaliar a hierarquia visual e simplificar o fluxo de decisão pode melhorar :)'
  }];

  return <div className="min-h-screen flex bg-white relative">
      {/* Sidebar Esquerda (coluna fixa de ícones) */}
      <div className="w-[60px] bg-[hsl(var(--smartshelf-blue))] flex flex-col justify-between items-center py-6 relative z-30">
        {/* Ícones superiores */}
        <div className="flex flex-col items-center space-y-8">
          {sidebarIcons.map((item) => (
            <button
              key={item.key}
              onClick={() => handleIconClick(item.key)}
              className="text-white hover:opacity-75 transition-opacity duration-200 group relative"
              title={item.label}
            >
              <item.icon size={24} strokeWidth={1.5} />
            </button>
          ))}
        </div>
        
        {/* Ícone User na parte inferior */}
        <div className="pb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-white hover:opacity-75 transition-opacity duration-200 group relative" title="Perfil">
                <User size={24} strokeWidth={1.5} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Painel deslizante do menu expandido */}
      <div
        className={
          `fixed left-[60px] top-0 h-screen w-[220px] bg-[hsl(var(--smartshelf-blue))] text-white shadow-lg transform transition-transform duration-300 z-20 ` +
          (isMenuExpanded ? 'translate-x-0' : '-translate-x-full')
        }
      >
        <div className="pt-6 pb-4 px-4 flex items-center justify-between">
          <span className="font-fustat font-light text-lg">Menu</span>
          <button
            onClick={() => setIsMenuExpanded(false)}
            className="text-white/80 hover:text-white transition-colors"
            title="Recolher menu"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="px-2 space-y-1">
          {sidebarIcons.map((item) => (
            <button
              key={item.key}
              onClick={() => handleIconClick(item.key)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <item.icon size={20} strokeWidth={1.5} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Painéis: Arquivo, Projetos, Configurações */}
      {isArchiveOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsArchiveOpen(false)} />
          <div className="absolute right-0 top-0 h-screen w-[380px] bg-white shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Arquivo de Chats</span>
              <button onClick={() => setIsArchiveOpen(false)} className="text-gray-500 hover:text-gray-700">
                <ArrowRight size={18} />
              </button>
            </div>
            {archived.length === 0 ? (
              <div className="text-sm text-gray-600">Nenhum chat arquivado ainda.</div>
            ) : (
              <div className="flex-1 overflow-auto">
                <ul className="space-y-2">
                  {archived.map(item => (
                    <li key={item.id} className="border rounded-md p-2">
                      <div className="text-sm font-medium mb-1">{item.title || 'Chat sem título'}</div>
                      <div className="text-[12px] text-gray-500">{item.messages.length} mensagens</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {isProjectsOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsProjectsOpen(false)} />
          <div className="absolute right-0 top-0 h-screen w-[420px] bg-white shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Projetos</span>
              <button onClick={() => setIsProjectsOpen(false)} className="text-gray-500 hover:text-gray-700">
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="text-sm text-gray-600">Área de gestão de projetos (em construção).</div>
          </div>
        </div>
      )}

      {isSettingsOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsSettingsOpen(false)} />
          <div className="absolute right-0 top-0 h-screen w-[360px] bg-white shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Configurações</span>
              <button onClick={() => setIsSettingsOpen(false)} className="text-gray-500 hover:text-gray-700">
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <div>Preferências do usuário (em construção).</div>
            </div>
          </div>
        </div>
      )}

      {/* Área Central */}
      <div className="flex-1 flex flex-col max-w-[940px] ml-20">
        {/* Header */}
        <div className="pt-[66px] pl-[8px] pb-[48px]">
          <div className="flex items-center text-[hsl(var(--smartshelf-text))] font-fustat font-light text-[32px]">
            <span>{currentTitle}</span>
            <ChevronDown size={20} className="ml-2" />
          </div>
        </div>

        {/* Área de Mensagens */}
        <ScrollArea className="flex-1 py-[8px] px-[8px]">
          <div className="space-y-6">
            {messages.map(m => (
              <div key={m.id} className={m.role === 'user' ? 'bg-[hsl(var(--smartshelf-light-bg))] rounded-xl p-6' : 'bg-white rounded-xl p-6'}>
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8 bg-[hsl(var(--smartshelf-blue))] flex-shrink-0">
                    <AvatarFallback className="bg-[hsl(var(--smartshelf-blue))] text-white text-sm font-medium">
                      {m.role === 'user' ? 'U' : 'A'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-[hsl(var(--smartshelf-text))] leading-relaxed text-lg">
                    <p>{m.text}</p>
                  </div>
                </div>
              </div>
            ))}
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
                
                <Button onClick={handleSend} size="icon" className="w-10 h-10 rounded-full bg-[hsl(var(--smartshelf-blue))] hover:bg-[hsl(var(--smartshelf-blue))]/90" disabled={!inputValue.trim()}>
                  <ArrowUp size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Painel Lateral Direito */}
      <div className={
        `fixed right-0 top-0 h-screen w-[460px] bg-[#2F78C4] transform transition-transform duration-300 ` +
        (isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full')
      }>
        {/* Header Notas Rápidas */}
        <div className="bg-[#2F78C4] text-white px-6 py-4 flex items-center justify-between mt-16">
          <span className="font-fustat font-light text-2xl">Notas rápidas</span>
          <button
            onClick={() => setIsRightSidebarOpen(false)}
            className="text-white/90 hover:text-white"
            title="Fechar painel"
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
export default ChatInterface;