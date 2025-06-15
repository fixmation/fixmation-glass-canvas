
import React from 'react';
import Header from '@/components/Header';
import { MobileQuoteForm } from '@/components/MobileQuoteForm';
import { Lightbulb, DraftingCompass, Rocket, Award, ShieldCheck } from 'lucide-react';
import PageNavigation from '@/components/PageNavigation';

const processSteps = [
  {
    icon: Lightbulb,
    title: "1. Discovery & Strategy",
    description: "We start by understanding your vision, target audience, and business goals. We conduct market research and define a clear product roadmap.",
  },
  {
    icon: DraftingCompass,
    title: "2. UI/UX Design",
    description: "Our designers create intuitive and beautiful interfaces. We build interactive prototypes to visualize the user experience before writing any code.",
  },
  {
    icon: Rocket,
    title: "3. Development & Testing",
    description: "Expert developers bring designs to life with clean, scalable code. Rigorous testing ensures your app is bug-free, secure, and performs flawlessly.",
  },
  {
    icon: Award,
    title: "4. Launch & Deployment",
    description: "We handle the entire app store submission process, ensuring a smooth and successful launch for your application on iOS and Android.",
  },
  {
    icon: ShieldCheck,
    title: "5. Support & Growth",
    description: "After launch, we offer ongoing support, maintenance, and analytics-driven strategies to ensure your app remains up-to-date and continues to grow.",
  },
];

const MobileProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-100/60 dark:from-slate-900 dark:via-purple-900/50 dark:to-indigo-950 transition-colors duration-700">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <PageNavigation
          currentPage="Start Project"
          previousPage={{ title: "Mobile Apps", path: "/mobile-apps" }}
        />
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight font-inter text-gray-900 dark:text-white drop-shadow-lg">
            Bring Your Mobile App Idea to Life
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-white/90 max-w-3xl mx-auto drop-shadow-md">
            From concept to launch, we're your dedicated partner in building exceptional mobile experiences.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white/95 drop-shadow-md">
            Our Development Process
          </h2>
          <div className="relative">
            {/* Dashed line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0 z-0">
               <div className="w-full h-full border-t-2 border-dashed border-gray-400 dark:border-gray-600"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <div className="bg-white dark:bg-slate-800 rounded-full p-4 border-2 border-dashed border-gray-400 dark:border-gray-600 mb-4">
                    <step.icon size={32} className="text-blue-500 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white/95">{step.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-white/80 px-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quote-form">
          <MobileQuoteForm />
        </section>
      </main>
    </div>
  );
};

export default MobileProject;
