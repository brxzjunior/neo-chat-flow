import { useState } from "react";
import { ChatBox } from "@/components/ChatBox";
import { InputBar } from "@/components/InputBar";
import { Message } from "@/components/MessageBubble";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/chat";

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mensagem: content }),
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.resposta || "Desculpe, não consegui gerar uma resposta.",
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Erro ao conectar com o servidor. Verifique se a API está rodando.";
      
      setError(errorMessage);
      toast.error(errorMessage);
      
      console.error("Erro ao enviar mensagem:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-chat">
      <header className="border-b bg-chat-background shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold">AI Chat Assistant</h1>
              <p className="text-sm text-muted-foreground">
                Powered by Gemini 2.5
              </p>
            </div>
          </div>
        </div>
      </header>

      <ChatBox messages={messages} isLoading={isLoading} error={error} />

      <InputBar onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
};

export default ChatPage;
