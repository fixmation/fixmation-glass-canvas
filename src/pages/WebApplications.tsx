
import React from "react";
import Header from "@/components/Header";
import { Globe, Zap, Shield, Users, Code, Smartphone } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const features = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed and scalability with modern frameworks and best practices."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Built with enterprise-grade security measures and data protection protocols."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces designed for optimal user experience and engagement."
  },
  {
    icon: Code,
    title: "Clean Architecture",
    description: "Maintainable code structure that grows with your business needs."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Perfect experience across all devices and screen sizes."
  }
];

const WebApplications = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-100/60 dark:from-slate-900 dark:via-purple-900/50 dark:to-indigo-950 transition-colors duration-700">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 pb-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="glass px-10 py-14 rounded-3xl mb-6 shadow-xl">
            <Globe size={80} className="mx-auto mb-6 text-blue-500 dark:text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter text-white drop-shadow-lg">
              Web Applications
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Transform your business with cutting-edge web applications that deliver exceptional performance, 
              scalability, and user experience across all platforms.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white/95 drop-shadow-md">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <GlassCard key={index} className="text-center">
                <feature.icon size={48} className="mx-auto mb-4 text-blue-400 dark:text-blue-300" />
                <h3 className="text-xl font-semibold mb-3 text-white/95">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <GlassCard>
            <h2 className="text-3xl font-bold mb-6 text-center text-white/95">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-white/95 mb-2">Frontend</h3>
                <p className="text-white/80 text-sm">React, Vue.js, Angular, TypeScript</p>
              </div>
              <div>
                <h3 className="font-semibold text-white/95 mb-2">Backend</h3>
                <p className="text-white/80 text-sm">Node.js, Python, Java, .NET</p>
              </div>
              <div>
                <h3 className="font-semibold text-white/95 mb-2">Database</h3>
                <p className="text-white/80 text-sm">PostgreSQL, MongoDB, Redis</p>
              </div>
              <div>
                <h3 className="font-semibold text-white/95 mb-2">Cloud</h3>
                <p className="text-white/80 text-sm">AWS, Azure, Google Cloud</p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white/95 drop-shadow-md">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business needs and requirements" },
              { step: "02", title: "Design", desc: "Creating wireframes and user experience design" },
              { step: "03", title: "Development", desc: "Building your application with modern technologies" },
              { step: "04", title: "Launch", desc: "Deployment, testing, and ongoing support" }
            ].map((item, index) => (
              <GlassCard key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold text-white/95 mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <GlassCard>
            <h2 className="text-3xl font-bold mb-4 text-white/95">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-6">
              Let's discuss how we can bring your web application vision to life.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </button>
          </GlassCard>
        </section>
      </main>
    </div>
  );
};

export default WebApplications;
