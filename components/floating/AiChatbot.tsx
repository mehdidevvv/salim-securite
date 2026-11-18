"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  RotateCcw,
  Headphones,
  CheckCheck,
} from "lucide-react";
import { INITIAL_BOT_MESSAGES, SMART_RESPONSES, BotMessage } from "@/data/chatbotFaq";

export const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<BotMessage[]>(INITIAL_BOT_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    // Add user message
    const userMsg: BotMessage = {
      id: "msg-" + Date.now(),
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking and reply
    setTimeout(() => {
      let replyText = SMART_RESPONSES.default;
      const lower = text.toLowerCase();

      if (lower.includes("mot de passe") || lower.includes("reset") || lower.includes("ip") || lower.includes("login") || lower.includes("identifiant")) {
        replyText = SMART_RESPONSES.password_reset;
      } else if (lower.includes("firmware") || lower.includes("outil") || lower.includes("télécharge") || lower.includes("logiciel") || lower.includes("configtool")) {
        replyText = SMART_RESPONSES.firmware;
      } else if (lower.includes("poe") || lower.includes("distance") || lower.includes("switch") || lower.includes("epoe") || lower.includes("câble")) {
        replyText = SMART_RESPONSES.epoe_guide;
      } else if (lower.includes("ville") || lower.includes("trafic") || lower.includes("smart") || lower.includes("city")) {
        replyText = SMART_RESPONSES.smart_city;
      } else if (lower.includes("caméra") || lower.includes("cctv") || lower.includes("4k") || lower.includes("nuit")) {
        replyText = "Notre catalogue vidéosurveillance s'étend du 2MP WizSense jusqu'aux dômes Ultra IA 8K. Nos fonctionnalités clés intègrent la vision couleur F1.0 Full-color, la dissuasion par flash et le deep learning WizMind. Vous pouvez consulter tous les modèles sur notre page /products/cctv.";
      }

      const botReply: BotMessage = {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 900);
  };

  const handleQuickAction = (actionKey: string) => {
    const response = SMART_RESPONSES[actionKey] || SMART_RESPONSES.default;
    const actionLabel =
      actionKey === "password_reset"
        ? "Comment réinitialiser le mot de passe d'une caméra ?"
        : actionKey === "firmware"
        ? "Où télécharger les firmwares et outils ?"
        : actionKey === "epoe_guide"
        ? "Qu'est-ce que la portée ePoE 800 mètres ?"
        : "Expliquez la solution Smart City";

    const userMsg: BotMessage = {
      id: "usr-" + Date.now(),
      sender: "user",
      text: actionLabel,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botReply: BotMessage = {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: response,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Trigger floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ouvrir le Support Technique IA"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-brand-red hover:bg-brand-red-hover text-white rounded-full shadow-floating transition-all duration-300 hover:scale-105 group"
      >
        <div className="relative">
          <Bot className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 border-2 border-brand-red rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 border-2 border-brand-red rounded-full" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs font-bold tracking-wide uppercase leading-tight">
            Support Technique IA
          </span>
          <span className="text-[10px] text-red-100 font-normal">Assistance 24/7</span>
        </div>
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-white border border-gray-200 rounded-2xl shadow-floating overflow-hidden flex flex-col h-[520px] animate-fade-in text-gray-800">
          {/* Header */}
          <div className="bg-brand-dark text-white p-4 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center text-white shadow-inner">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold flex items-center gap-1.5">
                  <span>Assistant Technique IA</span>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span>En ligne &bull; Expert AIoT 24/7</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages(INITIAL_BOT_MESSAGES)}
                title="Réinitialiser la conversation"
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/60 text-xs sm:text-sm">
            <div className="text-center">
              <span className="bg-gray-200/70 text-gray-500 text-[10px] px-2.5 py-1 rounded-full font-medium">
                Communications Chiffrées et Sécurisées
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    B
                  </div>
                )}

                <div className="max-w-[82%] space-y-2">
                  <div
                    className={`p-3.5 rounded-2xl whitespace-pre-line text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-brand-red text-white rounded-tr-none shadow-sm"
                        : "bg-white text-gray-800 border border-gray-200/80 rounded-tl-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Quick Action Chips if present */}
                  {msg.quickActions && (
                    <div className="flex flex-col gap-1.5 pt-1">
                      {msg.quickActions.map((qa) => (
                        <button
                          key={qa.action}
                          onClick={() => handleQuickAction(qa.action)}
                          className="text-left px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-brand-red hover:text-brand-red text-xs font-medium text-gray-700 transition shadow-2xs"
                        >
                          {qa.label} &rarr;
                        </button>
                      ))}
                    </div>
                  )}

                  <div
                    className={`text-[10px] text-gray-400 flex items-center gap-1 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span>{msg.timestamp}</span>
                    {msg.sender === "user" && <CheckCheck className="w-3 h-3 text-red-300" />}
                  </div>
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-gray-800 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-xs text-gray-400">
                <div className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-2 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Posez une question technique (PoE, mot de passe, LAPI)..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-red focus:bg-white transition"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-xl bg-brand-red hover:bg-brand-red-hover disabled:bg-gray-200 text-white transition disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
