import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  completeOnboarding: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check localStorage for existing auth state
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    // Check localStorage for onboarding completion
    return localStorage.getItem('hasCompletedOnboarding') === 'true';
  });

  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call
    // For now, we'll accept any email/password
    if (email && password) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      throw new Error('Email and password are required');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setHasCompletedOnboarding(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('hasCompletedOnboarding');
  };

  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
    localStorage.setItem('hasCompletedOnboarding', 'true');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        hasCompletedOnboarding,
        login, 
        logout, 
        completeOnboarding 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};