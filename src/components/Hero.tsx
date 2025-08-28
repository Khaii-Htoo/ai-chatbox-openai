import React from "react";
import { Sparkles } from "lucide-react";

const Hero: React.FC<{ darkMode: boolean; handleGetStarted: () => void }> = ({
  darkMode,
  handleGetStarted,
}) => (
  <section className="pt-20 lg:18 pb-16 px-4">
    <div className="container mx-auto text-center">
      <div className="animate-fadeInUp">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-600">
            Powered by Advanced AI
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The Future of
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            {" "}
            AI Conversations
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Experience the next generation of AI-powered conversations. Smart,
          secure, and incredibly human-like interactions at your fingertips.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all shadow-2xl hover:shadow-blue-500/25"
          >
            Start Chatting Now
          </button>
          <button
            className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all hover:scale-105 ${
              darkMode
                ? "border-gray-600 hover:border-gray-400 hover:bg-gray-800"
                : "border-gray-300 hover:border-gray-500 hover:bg-gray-50"
            }`}
          >
            Watch Demo
          </button>
        </div>
      </div>
      {/* Hero Animation omitted for brevity */}
    </div>
  </section>
);

export default Hero;
