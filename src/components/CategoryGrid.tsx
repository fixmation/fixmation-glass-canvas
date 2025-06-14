
import React from "react";
import GlassCard from "./GlassCard";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type CategoryItem = {
  name: string;
  description: string;
  icon: LucideIcon;
  link: string;
};

type CategoryGridProps = {
  title: string;
  items: CategoryItem[];
};

const CategoryGrid: React.FC<CategoryGridProps> = ({ title, items }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-6 text-white/95 dark:text-white/98 drop-shadow-md">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <Link key={item.name} to={item.link} className="block">
          <GlassCard className="flex flex-col items-center text-center h-full hover:scale-105 transition-transform duration-200 cursor-pointer">
            <item.icon size={40} className="mb-4 text-blue-300 dark:text-blue-400 drop-shadow" />
            <h3 className="text-lg font-medium mb-2 text-white/95 dark:text-white/98">{item.name}</h3>
            <p className="text-white/80 dark:text-white/85">{item.description}</p>
          </GlassCard>
        </Link>
      ))}
    </div>
  </section>
);

export default CategoryGrid;
