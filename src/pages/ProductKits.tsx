
import React from "react";
import Header from "@/components/Header";
import PageNavigation from "@/components/PageNavigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const kits = [
  {
    name: "Arduino Starter Kit",
    description: "The perfect kit for beginners to dive into electronics and programming. Includes an Arduino UNO, breadboard, sensors, and more.",
    price: "LKR 15,000",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop",
  },
  {
    name: "Raspberry Pi 4 Complete Kit",
    description: "A powerful single-board computer kit for building media centers, retro gaming consoles, and complex IoT projects.",
    price: "LKR 25,000",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop",
  },
  {
    name: "BeagleBone Black Kit",
    description: "An open-source hardware platform for developers and hobbyists. Great for building robots and automation systems.",
    price: "LKR 22,000",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop",
  },
  {
    name: "ESP32 IoT Development Kit",
    description: "A feature-rich kit with Wi-Fi and Bluetooth for creating connected devices and smart home applications.",
    price: "LKR 12,000",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop",
  }
];

const ProductKits = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-100/60 dark:from-slate-900 dark:via-purple-900/50 dark:to-indigo-950 transition-colors duration-700">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <PageNavigation 
          currentPage="Product Kits"
          previousPage={{ title: "Microcontroller Kits", path: "/microcontroller-kits" }}
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight font-inter text-gray-900 dark:text-white drop-shadow-lg">
          Our Product Kits
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {kits.map((kit, index) => (
            <Card key={index} className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-white/20 overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300 flex flex-col">
              <img src={kit.image} alt={kit.name} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{kit.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="flex-grow text-gray-700 dark:text-white/80">{kit.description}</CardDescription>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{kit.price}</p>
                  <Button>Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductKits;
