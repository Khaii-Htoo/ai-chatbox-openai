"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing, { PricingPlan } from "../components/Pricing";
import Sponsors, { Sponsor } from "../components/Sponsors";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const AIChatbotLanding = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      // Check system preference
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleGetStarted = () => {
    // Smooth scroll to pricing section
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const sponsors: Sponsor[] = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateAI", logo: "IA" },
    { name: "FutureBot", logo: "FB" },
    { name: "DataVision", logo: "DV" },
    { name: "CloudMind", logo: "CM" },
    { name: "NeuralNet", logo: "NN" },
  ];
  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      features: [
        "1,000 messages/month",
        "Basic AI models",
        "Email support",
        "Web interface",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      features: [
        "10,000 messages/month",
        "Advanced AI models",
        "Priority support",
        "API access",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      features: [
        "Unlimited messages",
        "Custom AI training",
        "24/7 phone support",
        "White-label solution",
        "Advanced analytics",
      ],
      popular: false,
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Header
        darkMode={darkMode}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        toggleTheme={toggleTheme}
        setMobileMenuOpen={setMobileMenuOpen}
        handleGetStarted={handleGetStarted}
      />
      <Hero darkMode={darkMode} handleGetStarted={handleGetStarted} />
      <Features darkMode={darkMode} />
      <Pricing
        darkMode={darkMode}
        plans={pricingPlans}
        handleGetStarted={handleGetStarted}
      />
      <Sponsors darkMode={darkMode} sponsors={sponsors} />
      <CTA handleGetStarted={handleGetStarted} />
      <Footer darkMode={darkMode} />
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AIChatbotLanding;
