import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireOnboarding?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireOnboarding = true 
}) => {
  const { isAuthenticated, hasCompletedOnboarding } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireOnboarding && !hasCompletedOnboarding) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
};