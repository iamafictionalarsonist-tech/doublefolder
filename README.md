# SmartShelf - Organizador Inteligente

SmartShelf é uma ferramenta de organização pessoal com inteligência artificial que funciona como seu "cérebro digital", ajudando a organizar e acessar informações pessoais de forma inteligente.

## 🚀 Funcionalidades

### ✅ Implementadas
- **Sistema de Autenticação**: Login seguro com validação
- **Fluxo de Onboarding**: Processo guiado de configuração inicial em 5 etapas
- **Interface de Chat**: Conversação inteligente com IA
- **Notas Rápidas**: Sistema de anotações integrado
- **Design Responsivo**: Interface moderna usando Tailwind CSS e shadcn/ui
- **Roteamento Protegido**: Navegação baseada no estado de autenticação

### 🎯 Fluxo de Usuário
1. **Login**: Tela de entrada com validação
2. **Onboarding**: 5 etapas de configuração personalizada
3. **Interface Principal**: Chat com IA + painel de notas laterais

## 🛠️ Tecnologias

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Fonts**: Fustat (Google Fonts)

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ ou Bun
- npm, yarn, pnpm ou bun

### Passos

1. **Clone o repositório**
```bash
git clone <repository-url>
cd smartshelf
```

2. **Instale as dependências**
```bash
# Com npm
npm install

# Com yarn
yarn install

# Com pnpm
pnpm install

# Com bun
bun install
```

3. **Execute o projeto**
```bash
# Desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. **Acesse a aplicação**
- Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 🏗️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Build de desenvolvimento
npm run build:dev

# Lint
npm run lint

# Preview da build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── onboarding/     # Componentes do fluxo de onboarding
│   └── ui/             # Componentes base (shadcn/ui)
├── hooks/              # React hooks customizados
├── lib/                # Utilitários e configurações
├── pages/              # Páginas da aplicação
└── main.tsx           # Ponto de entrada
```

### Componentes Principais

#### Onboarding
- `LoginScreen.tsx`: Tela de login
- `OnboardingContainer.tsx`: Container principal do onboarding
- `OnboardingStep1-5.tsx`: Etapas individuais do processo

#### Páginas
- `Index.tsx`: Interface principal com chat
- `Login.tsx`: Página de login
- `Onboarding.tsx`: Página do processo de onboarding
- `NotFound.tsx`: Página 404

## 🎨 Design System

### Cores Principais
- **Azul Principal**: `#2F78C4` (smartshelf-blue)
- **Texto Primário**: `#333333`
- **Texto Secundário**: `#4D4D4D`
- **Cinza Subtítulo**: `#808080`
- **Fundo Claro**: `#F5F5F5`

### Tipografia
- **Fonte**: Fustat (Google Fonts)
- **Pesos**: 300 (Light), 400 (Normal), 500 (Medium), 600 (SemiBold), 700 (Bold)

## 🔐 Autenticação

O sistema utiliza um contexto de autenticação com três estados:
- `logged_out`: Usuário não autenticado
- `onboarding`: Usuário autenticado mas precisa completar onboarding
- `authenticated`: Usuário totalmente autenticado

## 🛣️ Rotas

- `/login`: Página de login
- `/onboarding`: Processo de configuração inicial
- `/`: Interface principal (protegida)
- `/*`: Página 404

## 🔧 Configuração de Desenvolvimento

### ESLint
Configuração moderna com TypeScript e React hooks.

### Tailwind CSS
Configuração customizada com:
- Cores do design system
- Fonte Fustat
- Animações customizadas

### TypeScript
Configuração strict com paths absolutos (`@/`).

## 📱 Responsividade

A aplicação é totalmente responsiva e otimizada para:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (320px - 767px)

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

### Variáveis de Ambiente
Crie um arquivo `.env.local` para variáveis locais:
```
VITE_API_URL=your_api_url_here
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido para a **Vibe Coding Week 2025 — Cognizant**.

## 🆘 Suporte

Para dúvidas ou problemas:
1. Verifique a seção de Issues
2. Consulte a documentação dos componentes
3. Entre em contato com a equipe de desenvolvimento

---

**SmartShelf** - Seu organizador inteligente para dados pessoais 🧠✨