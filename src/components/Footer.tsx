import React from "react";
import { Bot, Star } from "lucide-react";

const Footer: React.FC<{ darkMode: boolean }> = ({ darkMode }) => (
  <footer
    className={`py-12 px-4 border-t ${
      darkMode ? "border-gray-800" : "border-gray-200"
    }`}
  >
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <div
              className={`p-2 rounded-xl ${
                darkMode ? "bg-blue-600" : "bg-blue-500"
              }`}
            >
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ChatBot AI
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The future of AI-powered conversations, designed for modern teams
            and businesses.
          </p>
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                } hover:scale-110 transition-transform cursor-pointer`}
              >
                <Star className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                API
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Status
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`mt-12 pt-8 border-t ${
          darkMode ? "border-gray-800" : "border-gray-200"
        } flex flex-col md:flex-row justify-between items-center`}
      >
        <p className="text-gray-600 dark:text-gray-400">
          © 2025 ChatBot AI. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
