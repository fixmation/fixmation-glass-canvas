
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import GlassCard from "./GlassCard";

type NavigationItem = {
  title: string;
  path: string;
};

type PageNavigationProps = {
  currentPage: string;
  previousPage?: NavigationItem;
  nextPage?: NavigationItem;
};

const PageNavigation: React.FC<PageNavigationProps> = ({ 
  currentPage, 
  previousPage, 
  nextPage 
}) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex-1">
        {previousPage && (
          <Link to={previousPage.path}>
            <GlassCard className="inline-flex items-center gap-2 px-4 py-2 hover:scale-105 transition-transform duration-200">
              <ArrowLeft size={20} className="text-blue-400 dark:text-blue-300" />
              <span className="text-gray-800 dark:text-white/95 font-medium">
                {previousPage.title}
              </span>
            </GlassCard>
          </Link>
        )}
      </div>
      
      <Link to="/" className="mx-4">
        <GlassCard className="inline-flex items-center gap-2 px-4 py-2 hover:scale-105 transition-transform duration-200">
          <Home size={20} className="text-blue-400 dark:text-blue-300" />
          <span className="text-gray-800 dark:text-white/95 font-medium">Home</span>
        </GlassCard>
      </Link>
      
      <div className="flex-1 flex justify-end">
        {nextPage && (
          <Link to={nextPage.path}>
            <GlassCard className="inline-flex items-center gap-2 px-4 py-2 hover:scale-105 transition-transform duration-200">
              <span className="text-gray-800 dark:text-white/95 font-medium">
                {nextPage.title}
              </span>
              <ArrowRight size={20} className="text-blue-400 dark:text-blue-300" />
            </GlassCard>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;
