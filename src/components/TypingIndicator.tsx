import { Bot } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-3 message-fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ai-message text-ai-message-foreground flex items-center justify-center">
        <Bot size={18} />
      </div>
      <div className="bg-ai-message text-ai-message-foreground rounded-2xl px-4 py-3 shadow-sm">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-ai-message-foreground/70 typing-dot"></span>
          <span className="w-2 h-2 rounded-full bg-ai-message-foreground/70 typing-dot"></span>
          <span className="w-2 h-2 rounded-full bg-ai-message-foreground/70 typing-dot"></span>
        </div>
      </div>
    </div>
  );
};
