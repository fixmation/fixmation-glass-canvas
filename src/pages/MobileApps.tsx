import React from "react";
import Header from "@/components/Header";
import PageNavigation from "@/components/PageNavigation";
import { Smartphone, Zap, Users, Code, Shield, Globe } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const features = [
  {
    icon: Smartphone,
    title: "Native Performance",
    description: "Optimized for iOS and Android with native performance and platform-specific features."
  },
  {
    icon: Users,
    title: "User Experience",
    description: "Intuitive interfaces following platform design guidelines for seamless user interaction."
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description: "React Native and Flutter solutions for efficient multi-platform development."
  },
  {
    icon: Shield,
    title: "Security",
    description: "Robust security measures including data encryption and secure authentication."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized code and efficient algorithms for fast, responsive mobile experiences."
  }
];

const MobileApps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-100/60 dark:from-slate-900 dark:via-purple-900/50 dark:to-indigo-950 transition-colors duration-700">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 pb-12">
        <PageNavigation 
          currentPage="Mobile Apps"
          previousPage={{ title: "Web Applications", path: "/web-applications" }}
          nextPage={{ title: "Enterprise Software", path: "/enterprise-software" }}
        />

        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="glass px-10 py-14 rounded-3xl mb-6 shadow-xl">
            <Smartphone size={80} className="mx-auto mb-6 text-blue-500 dark:text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter text-gray-900 dark:text-white drop-shadow-lg">
              Mobile Applications
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Create engaging mobile experiences that connect with your users anywhere, anytime. 
              Native iOS, Android, and cross-platform solutions tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
            Mobile Solutions We Offer
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

        {/* Platforms */}
        <section className="mb-16">
          <GlassCard>
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white/95">
              Platforms & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Native iOS</h3>
                <p className="text-gray-700 dark:text-white/80 text-sm">Swift, Objective-C, Xcode, Core Data</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Native Android</h3>
                <p className="text-gray-700 dark:text-white/80 text-sm">Kotlin, Java, Android Studio, Room</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Cross-Platform</h3>
                <p className="text-gray-700 dark:text-white/80 text-sm">React Native, Flutter, Xamarin</p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* App Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
            Types of Apps We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Business Apps", desc: "Productivity tools, CRM systems, and internal business applications" },
              { title: "E-commerce", desc: "Online shopping platforms with payment integration and inventory management" },
              { title: "Social Networking", desc: "Community platforms with messaging, sharing, and user interaction features" },
              { title: "Educational Apps", desc: "Learning management systems, course delivery, and educational games" },
              { title: "Healthcare", desc: "Patient management, telemedicine, and health monitoring applications" },
              { title: "Entertainment", desc: "Gaming, streaming, and media consumption applications" }
            ].map((item, index) => (
              <GlassCard key={index}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white/95 mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-white/80 text-sm">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <GlassCard>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white/95">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/80 mb-6">
              Let's create a mobile experience that your users will love.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Mobile Project
            </button>
          </GlassCard>
        </section>
      </main>
    </div>
  );
};

export default MobileApps;
