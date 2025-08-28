import React from "react";
import { Check } from "lucide-react";

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
}

const Pricing: React.FC<{
  darkMode: boolean;
  plans: PricingPlan[];
  handleGetStarted: () => void;
}> = ({ darkMode, plans, handleGetStarted }) => (
  <section id="pricing" className="py-20 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-16 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Simple, Transparent
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Pricing
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. All plans include our core AI
          features with no hidden fees.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 animate-fadeInUp ${
              plan.popular
                ? "bg-gradient-to-b from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25"
                : darkMode
                ? "bg-gray-800 border-gray-700 hover:border-blue-600"
                : "bg-white border-gray-200 hover:border-blue-500"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
            )}
            <div className="text-center mb-8">
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : ""
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-baseline justify-center">
                <span
                  className={`text-4xl font-bold ${
                    plan.popular ? "text-white" : ""
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-lg ${
                    plan.popular
                      ? "text-gray-200"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-3">
                  <Check
                    className={`w-5 h-5 ${
                      plan.popular ? "text-green-300" : "text-green-500"
                    }`}
                  />
                  <span
                    className={
                      plan.popular
                        ? "text-gray-200"
                        : "text-gray-600 dark:text-gray-400"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={handleGetStarted}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all hover:scale-105 ${
                plan.popular
                  ? "bg-white text-blue-600 hover:bg-gray-100"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
