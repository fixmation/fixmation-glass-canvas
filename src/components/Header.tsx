
import React from "react";
import { useTheme } from "@/hooks/use-theme";
import { Webcam, Moon, Sun } from "lucide-react";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center w-full py-6 px-8 mb-12 z-50">
      <div className="flex items-center gap-3">
        <span className="rounded-lg p-2 bg-primary flex items-center justify-center">
          <Webcam size={28} className="text-white" />
        </span>
        <span className="text-2xl font-bold tracking-tight font-inter">Fixmation Technologies</span>
      </div>
      <button
        className="rounded-lg glass px-4 py-2 font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary hover:bg-primary/10 transition active:scale-95"
        aria-label="Toggle theme"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <>
            <Moon size={20} />
            <span className="hidden md:inline">Dark Mode</span>
          </>
        ) : (
          <>
            <Sun size={20} className="text-yellow-400" />
            <span className="hidden md:inline">Light Mode</span>
          </>
        )}
      </button>
    </header>
  );
};

export default Header;
