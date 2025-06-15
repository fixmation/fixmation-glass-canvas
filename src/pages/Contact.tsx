
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PageNavigation from "@/components/PageNavigation";

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

const CONTACT_FN_URL = "https://ozgvpetrufggoiuqpruy.functions.supabase.co/contact-form-submit";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const res = await fetch(CONTACT_FN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send message");

      toast({
        title: "Message Sent",
        description: "Thank you for contacting us! We'll get back to you soon.",
      });
      reset();
    } catch (err: any) {
      toast({
        title: "Message Failed",
        description: err?.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-100/60 dark:from-slate-900 dark:via-purple-900/50 dark:to-indigo-950 transition-colors duration-700 relative">
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80 z-0 md:bg-cover"
        style={{
          backgroundImage: `url('/lovable-uploads/a904247c-c86f-4be8-8e77-c61dccffe3b6.png')`,
          backgroundSize: 'contain',
        }}
      />
      <div className="relative z-10">
        <main className="max-w-3xl mx-auto px-4 py-10 lg:py-20 flex flex-col gap-10">
          {/* Navigation buttons */}
          <PageNavigation
            currentPage="Contact Us"
            previousPage={{ title: "Home", path: "/" }}
          />
          <section className="glass px-8 py-10 rounded-3xl w-full shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white drop-shadow-lg text-center">
              Contact Us
            </h1>
            <p className="text-gray-800 dark:text-white/85 mb-8 text-center">
              Have a question or want to get in touch? Fill out the form below and our team will respond as soon as possible.
            </p>
            <form
              className="space-y-6 max-w-xl mx-auto"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div>
                <label htmlFor="name" className="block font-semibold text-gray-900 dark:text-white mb-1">
                  Name<span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="name"
                  autoComplete="name"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold text-gray-900 dark:text-white mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  id="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold text-gray-900 dark:text-white mb-1">
                  Message<span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  {...register("message", { required: "Message is required" })}
                  rows={6}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full uppercase tracking-wide font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </section>
          <section className="glass p-6 rounded-2xl flex flex-col items-center gap-4 text-center shadow">
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              <span className="text-gray-900 dark:text-white font-medium">info@fixmation.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              <span className="text-gray-900 dark:text-white font-medium">+94 715 883 884</span>
            </div>
            <div className="text-gray-800 dark:text-white/85 font-normal">
              190 Mannar Road, Puttalam 61300, Northwestern Province, Sri Lanka
            </div>
            <div className="flex justify-center w-full mt-2">
              <iframe
                title="Google Maps"
                className="rounded-xl border-none w-full h-52 md:h-44"
                src="https://maps.google.com/maps?width=400&amp;height=200&amp;hl=en&amp;q=190%20Mannar%20Road%2C%20Puttalam%2061300%2C%20Northwestern%20Province%2C%20Sri%20Lanka&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;

