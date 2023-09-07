import { h } from "preact";
import { useState } from "preact/hooks";

export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = (currentMessage?: string): string => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    if (message === currentMessage) return randomMessage(currentMessage);
    return message;
  };

  const [greeting, setGreeting] = useState(() => randomMessage());

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        type="button"
        onClick={() => setGreeting(randomMessage(greeting))}
      >
        New Greeting
      </button>
    </div>
  );
}
