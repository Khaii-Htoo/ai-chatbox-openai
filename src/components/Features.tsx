import React from "react";
import { Brain, Zap, Shield, Globe, Users, Award } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Advanced AI Intelligence",
    description:
      "Powered by cutting-edge language models for human-like conversations and intelligent responses.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast Responses",
    description:
      "Get instant replies with sub-second response times powered by optimized infrastructure.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and privacy protection to keep your conversations secure.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Multi-language Support",
    description:
      "Communicate in over 50 languages with natural understanding and context awareness.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description:
      "Share AI insights across teams with advanced workspace management and permissions.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "24/7 Availability",
    description:
      "Your AI assistant never sleeps, providing consistent support around the clock.",
  },
];

const Features: React.FC<{ darkMode: boolean }> = ({ darkMode }) => (
  <section id="features" className="py-20 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-16 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Powerful Features for
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Modern Teams
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover the capabilities that make our AI chatbot the perfect
          companion for your business needs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fadeInUp ${
              darkMode
                ? "bg-gray-800 border-gray-700 hover:border-blue-600"
                : "bg-white border-gray-200 hover:border-blue-500 hover:shadow-blue-500/10"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`inline-flex p-3 rounded-xl mb-6 ${
                darkMode ? "bg-blue-600" : "bg-blue-500"
              } text-white`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
