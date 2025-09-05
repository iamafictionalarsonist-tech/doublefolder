# SmartShelf - AI Chat Application with Authentication

A modern AI chat application with user authentication and onboarding flow built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **User Authentication**: Login system with persistent session management
- **Onboarding Flow**: 5-step personalized onboarding process
- **AI Chat Interface**: Beautiful chat interface with SmartShelf AI assistant
- **Notes Panel**: Quick notes sidebar for saving important information
- **Responsive Design**: Modern UI with Fustat font and SmartShelf brand colors

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

1. Navigate to the project directory:
```bash
cd /workspace/smartshelf-combined
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication components
│   ├── chat/           # Chat interface components
│   ├── onboarding/     # Onboarding flow components
│   └── ui/             # Reusable UI components
├── contexts/
│   └── AuthContext.tsx # Authentication state management
├── pages/
│   ├── Index.tsx       # Main page (deprecated)
│   └── NotFound.tsx    # 404 page
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## User Flow

1. **Login**: Users start at the login page (`/login`)
2. **Onboarding**: After login, users go through a 5-step onboarding process
3. **Chat Interface**: Once onboarding is complete, users access the main AI chat interface

## Authentication

The application uses localStorage to persist authentication state. In a production environment, this should be replaced with proper JWT tokens and secure API authentication.

## Development

- The project uses Vite for fast development and hot module replacement
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui components for consistent UI
- React Router for navigation

## Building for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

The built files will be in the `dist/` directory.

## Notes

- For demo purposes, the login accepts any email/password combination
- Authentication state is stored in localStorage
- The chat interface is currently static and doesn't connect to a real AI backend