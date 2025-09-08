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
      {/* Left side - 50% */}
      <div className="w-full lg:w-1/2 h-full flex flex-col px-4 sm:px-8 md:px-16 lg:px-82 pt-8 sm:pt-16 md:pt-20 lg:pt-100 relative py-8 sm:py-16 md:py-24 lg:py-[120px] min-h-screen lg:min-h-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-display text-text-primary mb-6 sm:mb-8 md:mb-12 lg:mb-28 font-fustat font-normal leading-tight">
          SmartShelf.
          <br />
          Seu organizador
          <br />
          inteligente para
          <br />
          dados pessoais
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-subtitle text-subtitle-gray font-fustat font-medium">
          Ferramenta de organização pessoal, com inteligência que te entende
        </p>
        
        {/* Footer message */}
        <div className="mt-auto lg:absolute lg:bottom-8 lg:left-82 pt-8 lg:pt-0">
          <p style={{
          color: '#808080'
        }} className="font-fustat font-medium text-sm sm:text-base py-[24px]">
            Vibe Coding Week 2025 — Cognizant
          </p>
        </div>
      </div>

      {/* Right side - 50% */}
      <div className="w-full lg:w-1/2 h-screen lg:h-full flex items-center justify-center p-4 lg:p-0" style={{
      backgroundImage: 'url(/lovable-uploads/6ba148c4-fc42-41cb-9443-d11ca20b94d8.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="w-full max-w-sm p-4 sm:p-6 lg:p-8 flex flex-col items-center my-0 py-4 sm:py-6 lg:py-[32px]">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 my-0 py-[10px] w-full">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-fustat font-medium text-sm sm:text-base" style={{
              fontSize: '16px'
            }}>
                E-mail ou ID
              </Label>
              <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-white rounded-full font-fustat font-medium px-4 sm:px-6 placeholder:text-[#C5C5C5] w-full" style={{
              maxWidth: '360px',
              height: '50px',
              fontSize: '16px'
            }} placeholder="Digite seu e-mail aqui." required />
            </div>

            <div className="space-y-2 mb-6 sm:mb-8">
              <Label htmlFor="password" className="text-white font-fustat font-medium text-sm sm:text-base" style={{
              fontSize: '16px'
            }}>
                Senha
              </Label>
              <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="bg-white rounded-full font-fustat font-medium px-4 sm:px-6 placeholder:text-[#C5C5C5] w-full" style={{
              maxWidth: '360px',
              height: '50px',
              fontSize: '16px'
            }} placeholder="Digite sua senha aqui." required />
            </div>

            <div className="space-y-4 flex flex-col items-center mt-6 sm:mt-8 py-[20px]">
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg font-medium font-fustat rounded-full w-full max-w-[260px]" style={{
              height: '56px'
            }}>
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