
import Header from "@/components/Header";
import CategoryGrid from "@/components/CategoryGrid";
import { Globe, Smartphone, Building, Cpu, MemoryStick, CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";

const softwareItems = [
  {
    name: "Web Applications",
    description: "Beautiful, scalable, secure web apps built for your business.",
    icon: Globe,
    link: "/web-applications"
  },
  {
    name: "Mobile Apps",
    description: "Elegant mobile experiences for iOS and Android, natively or cross-platform.",
    icon: Smartphone,
    link: "/mobile-apps"
  },
  {
    name: "Enterprise Software",
    description: "Complex systems for enterprise needs, integration and robust support.",
    icon: Building,
    link: "/enterprise-software"
  },
];

const hardwareItems = [
  {
    name: "IoT Devices",
    description: "Smart, connected devices bringing intelligence to your operations.",
    icon: Cpu,
    link: "/iot-devices"
  },
  {
    name: "Microcontroller Kits",
    description: "Custom kits for rapid prototyping and education.",
    icon: MemoryStick,
    link: "/microcontroller-kits"
  },
  {
    name: "Custom Electronics",
    description: "Unique electronics tailored for your projects.",
    icon: CircuitBoard,
    link: "/custom-electronics"
  },
];

const Index = () => (
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
      <main className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 flex flex-col items-center justify-center text-center">
          <div className="glass px-10 py-14 rounded-3xl mb-6 w-full md:w-[70%] mx-auto shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter bg-gradient-to-r from-white to-gray-100 dark:from-white dark:to-gray-200 bg-clip-text text-transparent drop-shadow-lg">
              Welcome to <span className="bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Fixmation Technologies</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 dark:text-white/95 max-w-2xl mx-auto drop-shadow-md">
              Reliable solutions in <b className="text-white">Software</b> & <b className="text-white">Hardware</b>. 
              <br className="hidden md:block" />
              Innovative technology, built for your vision.
            </p>
          </div>
        </section>

        <CategoryGrid title="Software Solutions" items={softwareItems} />
        <CategoryGrid title="Hardware Solutions" items={hardwareItems} />

        <footer className="text-white/70 dark:text-white/80 text-xs text-center mt-24 pb-4 select-none drop-shadow">
          &copy; {new Date().getFullYear()} Fixmation Technologies. All rights reserved.
        </footer>
      </main>
    </div>
  </div>
);

export default Index;
