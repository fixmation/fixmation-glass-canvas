import React from "react";
import Header from "@/components/Header";
import PageNavigation from "@/components/PageNavigation";
import { Building, Shield, Users, Database, Zap, Code } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with advanced encryption, audit trails, and compliance standards."
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Robust data architecture with backup, recovery, and high availability solutions."
  },
  {
    icon: Users,
    title: "User Management",
    description: "Advanced role-based access control and single sign-on integration."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "High-performance systems designed to handle enterprise-scale workloads."
  },
  {
    icon: Code,
    title: "Integration",
    description: "Seamless integration with existing enterprise systems and third-party services."
  }
];

const EnterpriseSoftware = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-100/60 dark:from-slate-900 dark:via-purple-900/50 dark:to-indigo-950 transition-colors duration-700">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 pb-12">
        <PageNavigation 
          currentPage="Enterprise Software"
          previousPage={{ title: "Mobile Apps", path: "/mobile-apps" }}
          nextPage={{ title: "IoT Devices", path: "/iot-devices" }}
        />

        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="glass px-10 py-14 rounded-3xl mb-6 shadow-xl">
            <Building size={80} className="mx-auto mb-6 text-blue-500 dark:text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter text-gray-900 dark:text-white drop-shadow-lg">
              Enterprise Software
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Powerful enterprise solutions that streamline operations, enhance productivity, 
              and drive business growth with robust security and seamless integration.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
            Enterprise Solutions
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

        {/* Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
            Enterprise Solutions We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "ERP Systems", desc: "Comprehensive enterprise resource planning solutions for unified business management." },
              { title: "CRM Platforms", desc: "Customer relationship management systems to drive sales and improve customer satisfaction." },
              { title: "Business Intelligence", desc: "Advanced analytics and reporting tools for data-driven decision making." },
              { title: "Document Management", desc: "Secure document storage, workflow automation, and collaboration platforms." },
              { title: "Supply Chain Management", desc: "Optimize inventory, logistics, and vendor relationships across your supply chain." },
              { title: "HR Management Systems", desc: "Comprehensive human resources platforms for employee lifecycle management." }
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
              Enterprise Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Backend</h3>
                <p className="text-gray-700 dark:text-white/80 text-sm">Java Spring, .NET, Node.js, Python</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Database</h3>
                <p className="text-gray-700 dark:text-white/80 text-sm">Oracle, SQL Server, PostgreSQL</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Integration</h3>
                <p className="text-gray-700 dark:text-white/80 text-sm">REST APIs, GraphQL, Message Queues</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white/95 mb-2">Infrastructure</h3>
                <p className="text-gray-700 dark:text-white/80 text-sm">Kubernetes, Docker, Cloud Services</p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* CTA */}
        <section className="text-center">
          <GlassCard>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white/95">
              Transform Your Enterprise
            </h2>
            <p className="text-xl text-gray-700 dark:text-white/80 mb-6">
              Let's discuss how we can modernize your business operations with enterprise software solutions.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </GlassCard>
        </section>
      </main>
    </div>
  );
};

export default EnterpriseSoftware;
