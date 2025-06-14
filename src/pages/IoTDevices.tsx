import React from "react";
import Header from "@/components/Header";
import PageNavigation from "@/components/PageNavigation";
import { Cpu, Wifi, Shield, Zap, Database, Settings } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const features = [
  {
    icon: Wifi,
    title: "Connectivity",
    description: "WiFi, Bluetooth, LoRaWAN, and cellular connectivity options for any environment."
  },
  {
    icon: Shield,
    title: "Security",
    description: "End-to-end encryption and secure boot processes to protect your IoT ecosystem."
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Real-time data collection and analysis with cloud-based dashboards and insights."
  },
  {
    icon: Zap,
    title: "Power Efficiency",
    description: "Optimized power management for extended battery life and energy efficiency."
  },
  {
    icon: Settings,
    title: "Remote Management",
    description: "Over-the-air updates and remote configuration management capabilities."
  }
];

const IoTDevices = () => {
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
            currentPage="IoT Devices"
            previousPage={{ title: "Enterprise Software", path: "/enterprise-software" }}
            nextPage={{ title: "Microcontroller Kits", path: "/microcontroller-kits" }}
          />

          {/* Hero Section */}
          <section className="mb-16 text-center">
            <div className="glass px-10 py-14 rounded-3xl mb-6 shadow-xl">
              <Cpu size={80} className="mx-auto mb-6 text-blue-500 dark:text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter text-gray-900 dark:text-white drop-shadow-lg">
                IoT Devices
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-white/90 max-w-3xl mx-auto drop-shadow-md">
                Smart, connected devices that bring intelligence to your operations. 
                From sensors to actuators, we create IoT solutions that transform data into actionable insights.
              </p>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
              IoT Capabilities
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

          {/* Applications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
              IoT Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Smart Agriculture", desc: "Soil moisture sensors, weather monitoring, automated irrigation systems." },
                { title: "Industrial Monitoring", desc: "Equipment health monitoring, predictive maintenance, energy management." },
                { title: "Smart Cities", desc: "Traffic monitoring, environmental sensors, smart lighting systems." },
                { title: "Healthcare IoT", desc: "Patient monitoring devices, asset tracking, environmental control systems." },
                { title: "Smart Retail", desc: "Inventory tracking, customer analytics, automated checkout systems." },
                { title: "Environmental Monitoring", desc: "Air quality sensors, water quality monitoring, climate tracking." }
              ].map((item, index) => (
                <GlassCard key={index}>
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
                IoT Technology Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Hardware</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">ESP32, Arduino, Raspberry Pi, STM32</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Connectivity</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">WiFi, Bluetooth, LoRa, Zigbee, 4G/5G</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Cloud</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">AWS IoT, Azure IoT, Google Cloud IoT</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Protocols</h3>
                  <p className="text-gray-700 dark:text-white/80 text-sm">MQTT, CoAP, HTTP/HTTPS, WebSocket</p>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* CTA */}
          <section className="text-center">
            <GlassCard>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white/95">
                Ready to Connect Your World?
              </h2>
              <p className="text-xl text-gray-700 dark:text-white/80 mb-6">
                Let's create intelligent IoT solutions that drive efficiency and innovation.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start IoT Project
              </button>
            </GlassCard>
          </section>
        </main>
      </div>
    </div>
  );
};

export default IoTDevices;
