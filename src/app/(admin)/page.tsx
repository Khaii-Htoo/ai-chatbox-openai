"use client";
import React from "react";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Pricing, { PricingPlan } from "../../components/Pricing";
import Sponsors, { Sponsor } from "../../components/Sponsors";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import DashboardMenu from "@/components/DashboardMenu";

const AIChatbotLanding = () => {
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
    <>
      <SignedOut>
        <Hero darkMode={false} handleGetStarted={() => {}} />
        <Features darkMode={false} />
        <Pricing
          darkMode={false}
          plans={pricingPlans}
          handleGetStarted={() => {}}
        />
        <Sponsors darkMode={false} sponsors={sponsors} />
        <CTA handleGetStarted={() => {}} />
        <Footer darkMode={false} />
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
      </SignedOut>
      <SignedIn>
        <DashboardMenu />
      </SignedIn>
    </>
  );
};

export default AIChatbotLanding;
