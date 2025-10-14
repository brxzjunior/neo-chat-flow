import { useEffect, useRef } from "react";
import { MessageBubble, Message } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import { AlertCircle } from "lucide-react";

interface ChatBoxProps {
  messages: Message[];
  isLoading: boolean;
  error?: string;
}

export const ChatBox = ({ messages, isLoading, error }: ChatBoxProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <div className="max-w-4xl mx-auto space-y-4">
        {messages.length === 0 && !isLoading && (
          <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-3xl">🤖</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              Olá! Como posso ajudar?
            </h2>
            <p className="text-muted-foreground max-w-md">
              Faça uma pergunta e vou responder usando inteligência artificial
              avançada.
            </p>
          </div>
        )}

        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isLoading && <TypingIndicator />}

        {error && (
          <div className="flex items-center gap-2 p-4 bg-destructive/10 text-destructive rounded-xl max-w-md mx-auto">
            <AlertCircle size={20} />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};
