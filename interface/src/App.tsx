import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AuthProvider, useAuth } from "@/lib/auth";
import LoginPage from "@/pages/Login";
import OnboardingPage from "@/pages/Onboarding";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { stage } = useAuth();
  if (stage === "logged_out") return <Navigate to="/login" replace />;
  if (stage === "onboarding") return <Navigate to="/onboarding" replace />;
  return children;
}

function AuthRouter() {
  const { stage } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={stage === "logged_out" ? <LoginPage /> : <Navigate to={stage === "onboarding" ? "/onboarding" : "/"} replace />} />
      <Route path="/onboarding" element={stage === "onboarding" ? <OnboardingPage /> : <Navigate to={stage === "authenticated" ? "/" : "/login"} replace />} />
      <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AuthRouter />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
