import { useState, KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface InputBarProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const InputBar = ({ onSendMessage, disabled }: InputBarProps) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t bg-chat-background p-4">
      <div className="max-w-4xl mx-auto flex gap-2 items-end">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
          disabled={disabled}
          className="min-h-[52px] max-h-32 resize-none rounded-xl bg-background border-border focus:ring-2 focus:ring-primary"
          rows={1}
        />
        <Button
          onClick={handleSend}
          disabled={!input.trim() || disabled}
          size="icon"
          className="h-[52px] w-[52px] rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Send size={20} />
        </Button>
      </div>
    </div>
  );
};
