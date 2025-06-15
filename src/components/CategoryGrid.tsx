import React from 'react';

interface CategoryGridProps {
  title: string;
  items: {
    name: string;
    description: string;
    icon: React.ComponentType<any>;
    link: string;
  }[];
  textColor?: string;
}

const CategoryGrid = ({ title, items, textColor }: CategoryGridProps) => {
  return (
    <section className="mb-16">
      <h2 className={`text-3xl font-bold mb-10 text-center drop-shadow-md ${textColor || "text-gray-900 dark:text-white"}`}>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <a href={item.link} key={item.name} className="block h-full">
            <div className={`glass h-full hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 p-6 rounded-2xl border border-white/30 dark:border-white/10 shadow-xl`}>
              <div className="flex items-center mb-4">
                <item.icon className={`w-10 h-10 mr-4 text-blue-500 dark:text-blue-400`} />
                <h3 className={`text-2xl font-bold tracking-tight ${textColor || "text-gray-900 dark:text-white"}`}>{item.name}</h3>
              </div>
              <p className={`${textColor || "text-gray-800 dark:text-white/80"}`}>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
