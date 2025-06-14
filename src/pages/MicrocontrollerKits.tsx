
import React from "react";
import SiteHeader from "@/components/SiteHeader";
import PageNavigation from "@/components/PageNavigation";
import { Cpu, Zap, Code, Users, Shield, Settings } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Code,
    title: "Easy Programming",
    description: "User-friendly development environments with extensive libraries and examples."
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Quick development cycles from concept to working prototype in minimal time."
  },
  {
    icon: Users,
    title: "Educational Focus",
    description: "Designed for learning with comprehensive documentation and tutorials."
  },
  {
    icon: Shield,
    title: "Reliable Hardware",
    description: "High-quality components with built-in protection circuits and robust design."
  },
  {
    icon: Settings,
    title: "Modular Design",
    description: "Expandable kits with compatible modules for growing project complexity."
  }
];

const MicrocontrollerKits = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-100/60 dark:from-slate-900 dark:via-purple-900/50 dark:to-indigo-950 transition-colors duration-700 relative">
      {/* Circuit Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-90 z-0 md:bg-cover"
        style={{
          backgroundImage: `url('/lovable-uploads/a904247c-c86f-4be8-8e77-c61dccffe3b6.png')`,
          backgroundSize: 'contain',
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10">
        <SiteHeader />
        
        <main className="max-w-6xl mx-auto px-4 pb-12">
          <PageNavigation 
            currentPage="Microcontroller Kits"
            previousPage={{ title: "IoT Devices", path: "/iot-devices" }}
            nextPage={{ title: "Custom Electronics", path: "/custom-electronics" }}
          />

          {/* Hero Section */}
          <section className="mb-16 text-center">
            <div className="glass px-10 py-14 rounded-3xl mb-6 shadow-xl">
              <Cpu size={80} className="mx-auto mb-6 text-blue-500 dark:text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter text-gray-900 dark:text-white drop-shadow-lg">
                Microcontroller Kits
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-white/90 max-w-3xl mx-auto drop-shadow-md">
                Comprehensive development kits for rapid prototyping and education. 
                Perfect for students, makers, and professionals exploring embedded systems and IoT development.
              </p>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
              Kit Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <GlassCard key={index} className="text-center">
                  <feature.icon size={48} className="mx-auto mb-4 text-blue-500 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white/95">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-white/80">{feature.description}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Kit Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
              Available Kits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Arduino Starter Kits", desc: "Complete Arduino-based kits with sensors, actuators, and comprehensive tutorials." },
                { title: "ESP32 Development Kits", desc: "WiFi and Bluetooth enabled microcontroller kits for IoT projects and prototyping." },
                { title: "Raspberry Pi Kits", desc: "Single-board computer kits with GPIO expansion and programming accessories." },
                { title: "STM32 Professional Kits", desc: "Advanced ARM Cortex-M based development kits for professional applications." },
                { title: "Educational Bundles", desc: "Curriculum-aligned kits designed for classroom use and STEM education programs." },
                { title: "Custom Project Kits", desc: "Tailored kits designed for specific projects or learning objectives." }
              ].map((item, index) => (
                <GlassCard key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white/95 mb-2">{item.title}</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-16">
            <GlassCard>
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white/95">
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Hardware</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">Microcontroller boards, sensors, LEDs, resistors, breadboards</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Software</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">Development environments, libraries, example code</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Documentation</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">Step-by-step guides, tutorials, project ideas</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Support</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">Technical support, community access, updates</p>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* Target Audience */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Students", desc: "Learn embedded programming and electronics with hands-on projects." },
                { title: "Makers", desc: "Bring your creative ideas to life with powerful development tools." },
                { title: "Professionals", desc: "Rapid prototyping and proof-of-concept development for products." }
              ].map((item, index) => (
                <GlassCard key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white/95 mb-3">{item.title}</h3>
                  <p className="text-gray-700 dark:text-white/80">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <GlassCard>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white/95">
                Start Your Journey
              </h2>
              <p className="text-xl text-gray-700 dark:text-white/80 mb-6">
                Get your hands on our comprehensive microcontroller kits and start building today.
              </p>
              <Link
                to="/product-kits"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Browse Kits
              </Link>
            </GlassCard>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MicrocontrollerKits;
