import { Bot, User } from "lucide-react";

export type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-3 message-fade-in ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser
            ? "bg-user-message text-user-message-foreground"
            : "bg-ai-message text-ai-message-foreground"
        }`}
      >
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
      <div
        className={`max-w-[70%] md:max-w-[60%] rounded-2xl px-4 py-3 shadow-sm ${
          isUser
            ? "bg-user-message text-user-message-foreground"
            : "bg-ai-message text-ai-message-foreground"
        }`}
      >
        <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">
          {message.content}
        </p>
        <span className="text-xs opacity-70 mt-1 block">
          {message.timestamp.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};
