
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wrench, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Installation Service",
    description: "Our expert technicians ensure your hardware and software are set up for optimal performance from day one.",
    icon: Wrench,
  },
  {
    title: "Warranty Service",
    description: "We stand by our products with comprehensive warranty plans, providing peace of mind and reliable support.",
    icon: ShieldCheck,
  },
];

const ServicesSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-white/95 drop-shadow-md">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="glass text-white/90 hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <service.icon className="w-10 h-10 text-blue-300 dark:text-blue-400" />
              <CardTitle className="text-2xl font-bold text-white tracking-tight">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
