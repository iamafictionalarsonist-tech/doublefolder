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
  return <div className="w-screen h-screen flex bg-background font-fustat">
      {/* Left side - 50% */}
      <div className="w-1/2 h-full flex flex-col px-82 pt-100 relative py-[120px]">
        <h1 className="text-display text-text-primary mb-28 font-fustat font-normal">
          SmartShelf.
          <br />
          Seu organizador
          <br />
          inteligente para
          <br />
          dados pessoais
        </h1>
        <p className="text-subtitle text-subtitle-gray font-fustat font-medium">
          Ferramenta de organização pessoal, com inteligência que te entende
        </p>
        
        {/* Footer message */}
        <div className="absolute bottom-8 left-82">
          <p style={{
          color: '#808080'
        }} className="font-fustat font-medium text-base py-[24px]">
            Vibe Coding Week 2025 — Cognizant
          </p>
        </div>
      </div>

      {/* Right side - 50% */}
      <div className="w-1/2 h-full flex items-center justify-center" style={{
      backgroundImage: 'url(/lovable-uploads/6ba148c4-fc42-41cb-9443-d11ca20b94d8.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="w-full max-w-sm p-8 flex flex-col items-center my-0 py-[32px]">
          <form onSubmit={handleSubmit} className="space-y-6 my-0 py-[10px]">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-fustat font-medium" style={{
              fontSize: '16px'
            }}>
                E-mail ou ID
              </Label>
              <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-white rounded-full font-fustat font-medium px-6 placeholder:text-[#C5C5C5]" style={{
              width: '360px',
              height: '60px',
              fontSize: '18px'
            }} placeholder="Digite seu e-mail aqui." required />
            </div>

            <div className="space-y-2 mb-8">
              <Label htmlFor="password" className="text-white font-fustat font-medium" style={{
              fontSize: '16px'
            }}>
                Senha
              </Label>
              <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="bg-white rounded-full font-fustat font-medium px-6 placeholder:text-[#C5C5C5]" style={{
              width: '360px',
              height: '60px',
              fontSize: '18px'
            }} placeholder="Digite sua senha aqui." required />
            </div>

            <div className="space-y-4 flex flex-col items-center mt-8 py-[20px]">
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-medium font-fustat rounded-full" style={{
              width: '260px',
              height: '64px'
            }}>
                Entrar →
              </Button>
              
              <Button type="button" variant="link" className="w-full text-white hover:text-white/80 font-fustat">
                Esqueceu sua senha? Clique aqui.
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>;
}

