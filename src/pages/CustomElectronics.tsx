import React from "react";
import Header from "@/components/Header";
import PageNavigation from "@/components/PageNavigation";
import { CircuitBoard, Zap, Settings, Shield, Code, Users } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const features = [
  {
    icon: Settings,
    title: "Custom Design",
    description: "Tailored electronic solutions designed specifically for your unique requirements."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensuring reliable performance."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimized circuits for maximum efficiency and minimal power consumption."
  },
  {
    icon: Code,
    title: "Firmware Development",
    description: "Custom firmware programming for specialized functionality and control."
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description: "Close collaboration from concept to production ensuring your vision is realized."
  }
];

const CustomElectronics = () => {
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
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 pb-12">
          <PageNavigation 
            currentPage="Custom Electronics"
            previousPage={{ title: "Microcontroller Kits", path: "/microcontroller-kits" }}
          />

          {/* Hero Section */}
          <section className="mb-16 text-center">
            <div className="glass px-10 py-14 rounded-3xl mb-6 shadow-xl">
              <CircuitBoard size={80} className="mx-auto mb-6 text-blue-500 dark:text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter text-gray-900 dark:text-white drop-shadow-lg">
                Custom Electronics
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-white/90 max-w-3xl mx-auto drop-shadow-md">
                Unique electronic solutions tailored to your specific needs. 
                From concept to production, we design and manufacture custom electronics that solve real-world problems.
              </p>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
              Our Capabilities
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

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
              Custom Solutions We Provide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "PCB Design & Manufacturing", desc: "Custom printed circuit board design, prototyping, and small-scale manufacturing." },
                { title: "Sensor Integration", desc: "Custom sensor solutions for specialized measurement and monitoring applications." },
                { title: "Control Systems", desc: "Automated control systems for industrial and commercial applications." },
                { title: "Wearable Electronics", desc: "Miniaturized electronics for fitness trackers, smartwatches, and health monitors." },
                { title: "Automotive Electronics", desc: "Custom automotive solutions including diagnostics, monitoring, and control systems." },
                { title: "Medical Devices", desc: "Specialized medical electronics with regulatory compliance and safety standards." }
              ].map((item, index) => (
                <GlassCard key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white/95 mb-2">{item.title}</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
              Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your requirements and technical specifications" },
                { step: "02", title: "Design", desc: "Schematic design, component selection, and PCB layout" },
                { step: "03", title: "Prototyping", desc: "Building and testing prototypes to validate design" },
                { step: "04", title: "Production", desc: "Manufacturing, assembly, and quality assurance testing" }
              ].map((item, index) => (
                <GlassCard key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-3">{item.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white/95 mb-2">{item.title}</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <GlassCard>
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white/95">
                Design & Manufacturing Tools
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Design Software</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">Altium Designer, KiCad, Eagle, Fusion 360</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Simulation</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">SPICE, Multisim, LTspice, MATLAB</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Manufacturing</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">SMT assembly, Through-hole, Testing</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Programming</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">C/C++, Python, VHDL, Assembly</p>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* CTA */}
          <section className="text-center">
            <GlassCard>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white/95">
                Have a Custom Project in Mind?
              </h2>
              <p className="text-xl text-gray-700 dark:text-white/80 mb-6">
                Let's discuss your unique requirements and create a custom electronic solution.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Custom Quote
              </button>
            </GlassCard>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CustomElectronics;
