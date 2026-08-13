import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getResumeContext } from "./getDynamicContext";

const DevAIChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I'm Dev AI Assistant ⚡ Ask me anything about my experience, projects, or background!"
    }
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, isTyping]);

  if (!isOpen) {
    return null;
  }

  const handleSend = async (e) => {
    e.preventDefault();

    if (!input.trim() || isTyping) {
      return;
    }

    const userMessage = input.trim();

    const updatedMessages = [
      ...messages,
      {
        sender: "user",
        text: userMessage
      }
    ];

    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      // --------------------------------------------------
      // 1. GET SYSTEM PROMPT
      // --------------------------------------------------

      const systemPrompt = getResumeContext();

      // --------------------------------------------------
      // 2. LIMIT CHAT HISTORY
      //
      // Keep only the latest 4 messages.
      // This prevents the request from growing indefinitely.
      // --------------------------------------------------

      const recentMessages = updatedMessages.slice(-4);

      const apiMessages = [
        {
          role: "system",
          content: systemPrompt
        },

        ...recentMessages.map((message) => ({
          role:
            message.sender === "user"
              ? "user"
              : "assistant",

          content: message.text
        }))
      ];

      // --------------------------------------------------
      // 3. CALL SECURE BACKEND PROXY
      //
      // Instead of calling Groq directly and exposing the API key,
      // we call our local Vercel serverless function (/api/chat).
      // --------------------------------------------------

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: apiMessages
        })
      });

      // --------------------------------------------------
      // 4. READ RESPONSE
      // --------------------------------------------------

      const data = await response.json();

      console.log("Server Status:", response.status);
      console.log("Server Response:", data);

      // --------------------------------------------------
      // 5. HANDLE RATE LIMIT
      // --------------------------------------------------

      if (response.status === 429) {
        const errorMessage =
          data?.error?.message ||
          "API rate limit reached. Please try again shortly.";

        throw new Error(errorMessage);
      }

      // --------------------------------------------------
      // 6. HANDLE OTHER API ERRORS
      // --------------------------------------------------

      if (!response.ok) {
        const errorMessage =
          data?.error?.message ||
          `Request failed with HTTP ${response.status}.`;

        throw new Error(errorMessage);
      }

      // --------------------------------------------------
      // 7. VALIDATE RESPONSE
      // --------------------------------------------------

      if (
        !data.choices ||
        !Array.isArray(data.choices) ||
        data.choices.length === 0
      ) {
        throw new Error(
          "The server returned an empty response."
        );
      }

      const aiReply =
        data.choices[0]?.message?.content?.trim();

      if (!aiReply) {
        throw new Error(
          "The server returned an empty message."
        );
      }

      // --------------------------------------------------
      // 8. ADD AI RESPONSE
      // --------------------------------------------------

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "ai",
          text: aiReply
        }
      ]);
    } catch (error) {
      console.error("====================================");
      console.error("DEV AI CHAT ERROR");
      console.error("====================================");
      console.error(error);
      console.error("====================================");

      const errorMessage =
        error?.message || "Unknown error";

      // --------------------------------------------------
      // FRIENDLY RATE LIMIT MESSAGE
      // --------------------------------------------------

      if (
        errorMessage.toLowerCase().includes("rate limit") ||
        errorMessage.includes("tokens per day") ||
        errorMessage.includes("429")
      ) {
        setMessages((previousMessages) => [
          ...previousMessages,
          {
            sender: "ai",
            text:
              "I'm temporarily unable to answer because the AI service has reached its current usage limit. Please try again shortly."
          }
        ]);
      } else {
        // --------------------------------------------------
        // GENERAL ERROR
        // --------------------------------------------------

        setMessages((previousMessages) => [
          ...previousMessages,
          {
            sender: "ai",
            text:
              "I'm having trouble connecting to my AI service right now. Please try again in a moment."
          }
        ]);
      }
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div
      id="ai-chat-modal"
      className="fixed z-50 overflow-hidden flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-300 bottom-20 right-4 left-4 h-[65vh] max-h-[500px] sm:bottom-24 sm:right-6 sm:left-auto sm:w-[380px] sm:h-[520px]"
    >
      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="p-3.5 sm:p-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white flex items-center justify-between shadow-md shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-sm shadow-xs">
            ⚡
          </div>

          <div>
            <h3 className="text-sm font-bold leading-tight">
              Dev AI Assistant
            </h3>
            <p className="text-[10px] text-blue-100 opacity-90">
              Powered by Groq • Llama 3.1
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center font-bold text-xs cursor-pointer"
          aria-label="Close AI assistant"
        >
          ✕
        </button>
      </div>

      {/* ==================================================
          MESSAGE AREA
      ================================================== */}

      <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3 bg-slate-50 dark:bg-slate-900/60">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[88%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed break-words ${
                message.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-none shadow-xs"
                  : "bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 border border-slate-200/80 dark:border-slate-700/80 rounded-bl-none shadow-xs prose prose-sm dark:prose-invert max-w-none"
              }`}
            >
              {message.sender === "user" ? (
                message.text
              ) : (
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => (
                      <p
                        className="mb-1.5 last:mb-0"
                        {...props}
                      />
                    ),

                    ul: ({ node, ...props }) => (
                      <ul
                        className="list-disc pl-4 my-1 space-y-1"
                        {...props}
                      />
                    ),

                    ol: ({ node, ...props }) => (
                      <ol
                        className="list-decimal pl-4 my-1 space-y-1"
                        {...props}
                      />
                    ),

                    li: ({ node, ...props }) => (
                      <li
                        className="mb-0.5"
                        {...props}
                      />
                    ),

                    strong: ({ node, ...props }) => (
                      <strong
                        className="font-bold text-blue-600 dark:text-blue-400"
                        {...props}
                      />
                    )
                  }}
                >
                  {message.text}
                </ReactMarkdown>
              )}
            </div>
          </div>
        ))}

        {/* ==================================================
            TYPING INDICATOR
        ================================================== */}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-2.5 rounded-2xl text-[13px] text-gray-500 dark:text-gray-400 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
              <span>Dev AI is thinking...</span>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* ==================================================
          INPUT FORM
      ================================================== */}

      <form
        onSubmit={handleSend}
        className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2 shrink-0 pb-safe"
      >
        <input
          type="text"
          placeholder="Ask about Devendra's experience..."
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          disabled={isTyping}
          className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[13px] text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={
            isTyping || !input.trim()
          }
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold transition-all cursor-pointer disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default DevAIChatModal;