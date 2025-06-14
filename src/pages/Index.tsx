
import Header from "@/components/Header";
import CategoryGrid from "@/components/CategoryGrid";
import { Globe, Smartphone, Building, Cpu, MemoryStick, CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesSection from "@/components/ServicesSection";

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
  <div className="min-h-screen relative isolate">
    {/* Main gradient background for rest */}
    {/* Light and dark theme gradients: layered for extra richness */}
    <div className="absolute inset-0 -z-20 pointer-events-none">
      {/* LIGHT THEME main bg gradient */}
      <div className="block dark:hidden absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-blue-50/80 to-purple-100/80" />
      {/* Extra accent gradient bottom for light */}
      <div className="block dark:hidden absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-blue-200/80 via-transparent to-transparent" />
      {/* DARK THEME main bg gradient */}
      <div className="hidden dark:block absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-900/60 to-indigo-950" />
      {/* Extra accent gradient bottom for dark */}
      <div className="hidden dark:block absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-indigo-950/90 via-transparent to-transparent" />
    </div>

    {/* Image covers 90% height at the top */}
    <div className="absolute top-0 left-0 w-full h-[90vh] z-0 pointer-events-none">
      <div
        className="w-full h-full bg-contain bg-no-repeat bg-top md:bg-cover opacity-90"
        style={{
          backgroundImage: `url('/lovable-uploads/a904247c-c86f-4be8-8e77-c61dccffe3b6.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
        }}
      />
      {/* Soft fade at bottom edge of image for both themes */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-blue-100/50 dark:to-indigo-950/60 pointer-events-none" />
    </div>

    {/* The bottom 10% gradient area */}
    <div className="absolute left-0 bottom-0 w-full h-[10vh] z-0 pointer-events-none">
      <div className="w-full h-full bg-gradient-to-b from-transparent to-blue-100 dark:to-indigo-950" />
    </div>

    {/* Content overlay */}
    <div className="relative z-10">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 flex flex-col items-center justify-center text-center">
          <div className="glass px-10 py-14 rounded-3xl mb-6 w-full md:w-[70%] mx-auto shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent drop-shadow-lg">
              Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Fixmation Technologies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 dark:text-white max-w-2xl mx-auto drop-shadow-md">
              Reliable solutions in <b className="text-gray-900 dark:text-white">Software</b> & <b className="text-gray-900 dark:text-white">Hardware</b>. 
              <br className="hidden md:block" />
              Innovative technology, built for your vision.
            </p>
          </div>
        </section>
        <CategoryGrid title="Software Solutions" items={softwareItems} />
        <CategoryGrid title="Hardware Solutions" items={hardwareItems} />
        <ServicesSection />
        <div className="flex justify-center my-10">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Contact Us
          </a>
        </div>
        <footer className="text-gray-700 dark:text-white/80 text-xs text-center mt-24 pb-4 select-none drop-shadow">
          &copy; {new Date().getFullYear()} Fixmation Technologies. All rights reserved.
        </footer>
      </main>
    </div>
  </div>
);

export default Index;
