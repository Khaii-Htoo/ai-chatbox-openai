import React from "react";
import { ArrowRight } from "lucide-react";

const CTA: React.FC<{ handleGetStarted: () => void }> = ({
  handleGetStarted,
}) => (
  <section className="py-20 px-4">
    <div className="container mx-auto">
      <div className="rounded-3xl p-12 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Conversations?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already experiencing the future of
          AI-powered communication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGetStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all shadow-xl"
          >
            Start Free Trial
            <ArrowRight className="inline w-5 h-5 ml-2" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
