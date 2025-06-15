
import React from 'react';
import Header from '@/components/Header';
import PageNavigation from '@/components/PageNavigation';
import { Home, Building, Waves, Signal, Smartphone, Cpu } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const InstallationService = () => {
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
            currentPage="Installation Service"
            previousPage={{ title: "Home", path: "/" }}
            nextPage={{ title: "Warranty Service", path: "/warranty-service" }}
          />

          <section className="mb-16 text-center">
            <div className="glass px-10 py-14 rounded-3xl mb-6 shadow-xl">
              <Cpu size={80} className="mx-auto mb-6 text-blue-500 dark:text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter text-gray-900 dark:text-white drop-shadow-lg">
                Professional Installation Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 dark:text-white/90 max-w-3xl mx-auto drop-shadow-md">
                Seamless setup for your IoT and Custom Electronics devices.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white drop-shadow-md">
              Where We Install
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <GlassCard>
                <Home size={48} className="mx-auto mb-4 text-blue-500 dark:text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">For Your Home</h3>
                <p className="text-gray-800 dark:text-white/80">Smart home automation, security systems, and custom electronics for modern living.</p>
              </GlassCard>
              <GlassCard>
                <Building size={48} className="mx-auto mb-4 text-blue-500 dark:text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">For Your Office</h3>
                <p className="text-gray-800 dark:text-white/80">Enhance productivity with IoT solutions for your workspace and commercial buildings.</p>
              </GlassCard>
              <GlassCard>
                <Waves size={48} className="mx-auto mb-4 text-blue-500 dark:text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">For Your Estate</h3>
                <p className="text-gray-800 dark:text-white/80">Large-scale installations for agricultural, industrial, or residential estates.</p>
              </GlassCard>
            </div>
          </section>

          <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard>
              <Signal size={40} className="mb-4 text-blue-500 dark:text-blue-400" />
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Reliable Connectivity</h3>
              <p className="text-gray-800 dark:text-white/80">
                We ensure your devices are always connected. Our installations include setup of high-speed 4G/5G routers, providing a robust and dedicated network for your smart products.
              </p>
            </GlassCard>
            <GlassCard>
              <Smartphone size={40} className="mb-4 text-blue-500 dark:text-blue-400" />
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">KME Smart App</h3>
              <p className="text-gray-800 dark:text-white/80">
                All our installations are integrated with the KME Smart App. Control, monitor, and manage all your devices from one simple, intuitive interface on your smartphone.
              </p>
            </GlassCard>
          </section>
        </main>
      </div>
    </div>
  );
};

export default InstallationService;
