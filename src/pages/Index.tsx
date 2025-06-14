
import Header from "@/components/Header";
import CategoryGrid from "@/components/CategoryGrid";
import { Globe, Smartphone, Building, Cpu, MemoryStick, CircuitBoard } from "lucide-react";

const softwareItems = [
  {
    name: "Web Applications",
    description: "Beautiful, scalable, secure web apps built for your business.",
    icon: Globe,
  },
  {
    name: "Mobile Apps",
    description: "Elegant mobile experiences for iOS and Android, natively or cross-platform.",
    icon: Smartphone,
  },
  {
    name: "Enterprise Software",
    description: "Complex systems for enterprise needs, integration and robust support.",
    icon: Building,
  },
];

const hardwareItems = [
  {
    name: "IoT Devices",
    description: "Smart, connected devices bringing intelligence to your operations.",
    icon: Cpu,
  },
  {
    name: "Microcontroller Kits",
    description: "Custom kits for rapid prototyping and education.",
    icon: MemoryStick,
  },
  {
    name: "Custom Electronics",
    description: "Unique electronics tailored for your projects.",
    icon: CircuitBoard,
  },
];

const Index = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-100/60 dark:from-slate-900 dark:via-purple-900/50 dark:to-indigo-950 transition-colors duration-700">
    <Header />
    <main className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <section className="mb-16 flex flex-col items-center justify-center text-center">
        <div className="glass px-10 py-14 rounded-3xl mb-6 w-full md:w-[70%] mx-auto shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Welcome to <span className="text-primary">Fixmation Technologies</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Reliable solutions in <b>Software</b> & <b>Hardware</b>. 
            <br className="hidden md:block" />
            Innovative technology, built for your vision.
          </p>
        </div>
      </section>

      <CategoryGrid title="Software Solutions" items={softwareItems} />
      <CategoryGrid title="Hardware Solutions" items={hardwareItems} />

      <footer className="text-muted-foreground text-xs text-center mt-24 pb-4 select-none opacity-70">
        &copy; {new Date().getFullYear()} Fixmation Technologies. All rights reserved.
      </footer>
    </main>
  </div>
);

export default Index;
