import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-chat flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            AI Chat Assistant
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Converse com uma inteligência artificial avançada. Faça perguntas, peça ajuda ou apenas bata um papo!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <div className="p-6 rounded-2xl bg-card border shadow-sm">
            <MessageSquare className="w-8 h-8 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Chat Natural</h3>
            <p className="text-sm text-muted-foreground">
              Interface intuitiva e conversas fluidas
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-card border shadow-sm">
            <Zap className="w-8 h-8 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Respostas Rápidas</h3>
            <p className="text-sm text-muted-foreground">
              Powered by Gemini 2.5
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-card border shadow-sm">
            <Sparkles className="w-8 h-8 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">IA Avançada</h3>
            <p className="text-sm text-muted-foreground">
              Tecnologia de ponta em linguagem natural
            </p>
          </div>
        </div>

        <Button
          onClick={() => navigate("/chat")}
          size="lg"
          className="mt-8 px-8 py-6 text-lg rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
        >
          Começar a Conversar
          <MessageSquare className="ml-2" size={20} />
        </Button>

        <p className="text-sm text-muted-foreground mt-6">
          Pronto para integração com backend Python (FastAPI + Agno + Gemini)
        </p>
      </div>
    </div>
  );
};

export default Index;
