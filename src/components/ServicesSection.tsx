
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wrench, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Installation Service",
    description: "Our expert technicians ensure your hardware and software are set up for optimal performance from day one.",
    icon: Wrench,
    link: "/installation-service"
  },
  {
    title: "Warranty Service",
    description: "We stand by our products with comprehensive warranty plans, providing peace of mind and reliable support.",
    icon: ShieldCheck,
    link: "/warranty-service"
  },
];

const ServicesSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white drop-shadow-md">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Link to={service.link} key={service.title} className="block h-full">
            <Card className="glass h-full text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4">
                <service.icon className="w-10 h-10 text-blue-500 dark:text-blue-400" />
                <CardTitle className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 dark:text-white/80">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
