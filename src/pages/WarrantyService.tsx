
import React from 'react';
import Header from '@/components/Header';
import PageNavigation from '@/components/PageNavigation';
import { ShieldCheck, Wrench, Calendar } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const WarrantyService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-100/60 dark:from-slate-900 dark:via-purple-900/50 dark:to-indigo-950 transition-colors duration-700 relative">
       <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-90 z-0 md:bg-cover"
        style={{
          backgroundImage: `url('/lovable-uploads/a904247c-c86f-4be8-8e77-c61dccffe3b6.png')`,
          backgroundSize: 'contain',
        }}
      />
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 pb-12">
          <PageNavigation 
            currentPage="Warranty Service"
            previousPage={{ title: "Installation Service", path: "/installation-service" }}
            nextPage={{ title: "Home", path: "/" }}
          />

          <section className="mb-16 text-center">
            <div className="glass px-10 py-14 rounded-3xl mb-6 shadow-xl">
              <ShieldCheck size={80} className="mx-auto mb-6 text-blue-500 dark:text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter text-gray-900 dark:text-white drop-shadow-lg">
                Our Warranty Promise
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 dark:text-white/90 max-w-3xl mx-auto drop-shadow-md">
                Peace of mind guaranteed with our comprehensive support and warranty plans.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <GlassCard>
              <div className="flex items-center mb-4">
                <Calendar size={40} className="mr-4 text-blue-500 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">6-Month Free Warranty</h3>
              </div>
              <p className="text-gray-800 dark:text-white/80">
                All our devices and parts come with a complimentary 6-month warranty. We will repair or replace it completely free of charge for any manufacturing defects.
              </p>
            </GlassCard>
            <GlassCard>
              <div className="flex items-center mb-4">
                <Wrench size={40} className="mr-4 text-blue-500 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Post-Warranty Support</h3>
              </div>
              <p className="text-gray-800 dark:text-white/80">
                After 6 months, we continue to offer expert support. You will only be charged for the cost of the parts and a nominal service fee for any repairs.
              </p>
            </GlassCard>
          </section>
        </main>
      </div>
    </div>
  );
};

export default WarrantyService;
