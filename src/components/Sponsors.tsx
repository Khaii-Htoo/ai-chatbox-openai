import React from "react";

export interface Sponsor {
  name: string;
  logo: string;
}

const Sponsors: React.FC<{ darkMode: boolean; sponsors: Sponsor[] }> = ({
  darkMode,
  sponsors,
}) => (
  <section id="sponsors" className="py-20 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-16 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Trusted by Industry
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Leaders
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Join thousands of companies that trust our AI technology to power
          their conversations.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className={`flex items-center justify-center p-6 rounded-xl border transition-all hover:scale-110 animate-fadeInUp ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                darkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
              }`}
            >
              {sponsor.logo}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Sponsors;
