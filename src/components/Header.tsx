import React from "react";
import { Bot, Sun, Moon, Menu, X, User } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

interface HeaderProps {
  darkMode: boolean;
  scrolled: boolean;
  mobileMenuOpen: boolean;
  toggleTheme: () => void;
  setMobileMenuOpen: (open: boolean) => void;
  handleGetStarted: () => void;
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  scrolled,
  mobileMenuOpen,
  toggleTheme,
  setMobileMenuOpen,
  handleGetStarted,
}) => {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? `backdrop-blur-md ${
              darkMode
                ? "bg-gray-900/90 border-gray-800"
                : "bg-white/90 border-gray-200"
            } border-b`
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div
              className={`p-2 rounded-xl ${
                darkMode ? "bg-blue-600" : "bg-blue-500"
              } animate-pulse`}
            >
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ChatBot AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <SignedOut>
              <a
                href="#features"
                className="hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="hover:text-blue-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#sponsors"
                className="hover:text-blue-600 transition-colors"
              >
                Partners
              </a>
            </SignedOut>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <SignedOut>
              <SignInButton mode="modal">
                <button
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform cursor-pointer"
                >
                  Login
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleTheme} className="p-2 rounded-lg">
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <SignedOut>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </SignedOut>
            <UserButton />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-4 p-4 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            } animate-fadeIn`}
          >
            <div className="flex flex-col space-y-4">
              <SignedOut>
                <a
                  href="#features"
                  className="hover:text-blue-600 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="hover:text-blue-600 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#sponsors"
                  className="hover:text-blue-600 transition-colors"
                >
                  Partners
                </a>
              </SignedOut>
              <SignInButton mode="modal">
                <button
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg w-full"
                >
                  Sign In
                </button>
              </SignInButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
