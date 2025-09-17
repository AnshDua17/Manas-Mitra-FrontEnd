import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

const AIChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I'm your AI Wellness Companion. How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Automatically scroll to the bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: "ai", text: "Thank you for sharing. It's brave to talk about these things. Let's explore that a bit more." },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    // Added dark mode background
    <div className="flex flex-col w-full h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">AI Wellness Companion</h2>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            {/* Added dark mode styles for the AI message bubble */}
            <div className={`max-w-md px-4 py-2 rounded-2xl text-sm shadow ${
              msg.sender === "user"
                ? "bg-blue-600 text-white rounded-br-none"
                : "bg-gray-200 text-gray-800 rounded-bl-none dark:bg-gray-700 dark:text-gray-200"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            // Added dark mode styles for the textarea input
            className="flex-1 border rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-white"
            rows={1}
          />
          <button onClick={handleSend} className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatPage;