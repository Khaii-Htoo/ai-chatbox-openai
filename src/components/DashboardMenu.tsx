import React, { useState } from "react";
import { MessageCircle, Edit3, Search, Sparkles, Bot, Zap } from "lucide-react";

const DashboardMenu = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: "create",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Create",
      subtitle: "New Chatbot",
      description:
        "Build a new AI assistant from scratch with custom capabilities",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-600 to-blue-700",
    },
    {
      id: "edit",
      icon: <Edit3 className="w-8 h-8" />,
      title: "Edit",
      subtitle: "Chatbots",
      description: "Modify and enhance your existing AI assistants",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-600 to-blue-700",
    },
    {
      id: "view",
      icon: <Search className="w-8 h-8" />,
      title: "View",
      subtitle: "Sessions",
      description: "Monitor and analyze your AI assistant conversations",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-600 to-blue-700",
    },
  ];

  const handleCardClick = (cardId: any) => {
    setSelectedCard(cardId);
    // Add your navigation logic here
    console.log(`${cardId} card clicked`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 flex flex-col items-center justify-center p-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl dark:from-blue-900/20 dark:to-purple-900/20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-400/20 rounded-full blur-3xl dark:from-pink-900/20 dark:to-blue-900/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20 dark:bg-gray-800/80 dark:border-gray-700">
            <Bot className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              AI Assistant Builder
            </span>
          </div>
        </div>

        {/* Main Cards */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                selectedCard === card.id ? "scale-105 -translate-y-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`relative bg-gradient-to-br ${card.color} rounded-3xl p-8 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-white/10 group-hover:bg-gradient-to-br group-hover:${card.hoverColor} dark:border-gray-700 dark:shadow-none dark:hover:shadow-blue-900/25 dark:bg-gradient-to-br dark:from-blue-800 dark:to-blue-900`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-blue-900/50"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 w-fit mb-6 group-hover:bg-white/30 transition-all duration-300 dark:bg-gray-800/20 dark:group-hover:bg-gray-700/30">
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 dark:text-gray-100">
                    {card.title}
                  </h3>
                  <p className="text-blue-100 text-lg font-medium mb-3 dark:text-blue-300">
                    {card.subtitle}
                  </p>
                  <p className="text-blue-50 text-sm opacity-90 leading-relaxed dark:text-gray-400">
                    {card.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center dark:bg-gray-800/20">
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-3xl rounded-tr-3xl dark:from-blue-900/10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/20 dark:bg-gray-800/80 dark:border-gray-700">
            <Sparkles className="w-5 h-5 text-purple-600 animate-pulse dark:text-purple-400" />
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Let's build an Assistant AI Agent App
            </h2>
            <Sparkles
              className="w-5 h-5 text-blue-600 animate-pulse dark:text-blue-400"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Additional Features Hint */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm dark:text-gray-400">
            Choose an option above to start building your intelligent assistant
          </p>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float dark:bg-blue-700/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DashboardMenu;
