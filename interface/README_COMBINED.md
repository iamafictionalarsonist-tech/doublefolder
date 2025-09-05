# SmartShelf - Combined Authentication & AI Chat Application

This is a combined Vibe Coding project that integrates:

1. **Authentication Flow** - Login/signup page with multi-step onboarding
2. **AI Chat Interface** - Sophisticated chat application with sidebar and notes

## Features

### Authentication
- Login screen with email/password validation
- 5-step onboarding process for new users
- Seamless transition to main application

### AI Chat Interface
- Modern chat interface with conversation history
- Sidebar with navigation icons
- Quick notes panel on the right
- Professional SmartShelf branding and design

## Project Structure

```
src/
├── components/
│   ├── onboarding/          # Authentication components
│   │   ├── LoginScreen.tsx
│   │   ├── OnboardingContainer.tsx
│   │   └── OnboardingStep[1-5].tsx
│   └── ui/                  # Shared UI components
├── pages/
│   └── Index.tsx           # Main application with auth flow
└── ...
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Authentication Flow

1. **Login Screen**: Enter any email and password to proceed
2. **Onboarding**: Complete the 5-step setup process
3. **Main App**: Access the full AI chat interface

## Design System

The application uses a unified design system with:
- **Primary Color**: SmartShelf Blue (#2F78C4)
- **Typography**: Fustat font family
- **Consistent spacing and component styling**
- **Responsive design principles**

## User Experience

- Users must authenticate before accessing the chat interface
- Smooth transitions between authentication states
- Logout functionality available via the user icon in the sidebar
- Maintains design consistency across all screens

---

*Vibe Coding Week 2025 — Cognizant*