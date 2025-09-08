import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
interface LoginScreenProps {
  onLogin: () => void;
}
export default function LoginScreen({
  onLogin
}: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login - aceita qualquer email/senha
    if (email && password) {
      onLogin();
    }
  };
  return <div className="w-screen h-screen flex flex-col lg:flex-row bg-background font-fustat">
      {/* Left side - 50% on desktop, full width on mobile */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col px-8 sm:px-12 md:px-16 lg:px-82 pt-12 sm:pt-16 md:pt-20 lg:pt-100 relative py-12 sm:py-16 md:py-20 lg:py-[120px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display text-text-primary mb-6 sm:mb-12 md:mb-20 lg:mb-28 font-fustat font-normal">
          SmartShelf.
          <br />
          Seu organizador
          <br />
          inteligente para
          <br />
          dados pessoais
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-subtitle text-subtitle-gray font-fustat font-medium">
          Ferramenta de organização pessoal, com inteligência que te entende
        </p>
        
        {/* Footer message - hidden on mobile */}
        <div className="hidden lg:block absolute bottom-8 left-82">
          <p style={{
          color: '#808080'
        }} className="font-fustat font-medium text-base py-[24px]">
            Vibe Coding Week 2025 — Cognizant
          </p>
        </div>
      </div>

      {/* Right side - 50% on desktop, full width on mobile */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center" style={{
      backgroundImage: 'url(/lovable-uploads/6ba148c4-fc42-41cb-9443-d11ca20b94d8.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="w-full max-w-sm p-4 sm:p-6 md:p-8 flex flex-col items-center my-0 py-4 sm:py-6 md:py-[32px]">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 my-0 py-2 sm:py-4 md:py-[10px] w-full">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-fustat font-medium text-sm sm:text-base">
                E-mail ou ID
              </Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className="bg-white rounded-full font-fustat font-medium px-4 sm:px-6 placeholder:text-[#C5C5C5] w-full h-12 sm:h-14 md:h-[60px] text-base sm:text-lg" 
                placeholder="Digite seu e-mail aqui." 
                required 
              />
            </div>

            <div className="space-y-2 mb-4 sm:mb-6 md:mb-8">
              <Label htmlFor="password" className="text-white font-fustat font-medium text-sm sm:text-base">
                Senha
              </Label>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                className="bg-white rounded-full font-fustat font-medium px-4 sm:px-6 placeholder:text-[#C5C5C5] w-full h-12 sm:h-14 md:h-[60px] text-base sm:text-lg" 
                placeholder="Digite sua senha aqui." 
                required 
              />
            </div>

            <div className="space-y-4 flex flex-col items-center mt-4 sm:mt-6 md:mt-8 py-4 sm:py-[10px] md:py-[20px]">
              <Button 
                type="submit" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg font-medium font-fustat rounded-full w-full sm:w-[220px] md:w-[260px] h-12 sm:h-14 md:h-[64px]"
              >
                Entrar →
              </Button>
              
              <Button type="button" variant="link" className="w-full text-white hover:text-white/80 font-fustat text-sm sm:text-base">
                Esqueceu sua senha? Clique aqui.
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>;
}