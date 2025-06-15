
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GlassCard from "@/components/GlassCard";
import { Smartphone, DollarSign, Calendar, Info, Users, Mail, Building } from 'lucide-react';

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  company: z.string().optional(),
  platforms: z.string({ required_error: "Please select a target platform." }),
  description: z.string().min(20, "Please provide a detailed project description (at least 20 characters)."),
  budget: z.string({ required_error: "Please select an estimated budget." }),
  timeline: z.string({ required_error: "Please select an estimated timeline." }),
});

export const MobileQuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof quoteSchema>>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof quoteSchema>) {
    setIsSubmitting(true);
    console.log("Mobile App Quote Request:", values);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Quote Request Sent!", {
      description: "Thank you for your interest. We've received your request and will get back to you within 2 business days.",
    });

    form.reset();
    setIsSubmitting(false);
  }

  return (
    <GlassCard>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white/95">Request a Quote</h2>
        <p className="text-md text-gray-700 dark:text-white/80 mt-2">Fill out the form below to get a custom quote for your mobile app project.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2"><Users className="h-4 w-4" />Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2"><Mail className="h-4 w-4" />Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2"><Building className="h-4 w-4" />Company (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="platforms"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2"><Smartphone className="h-4 w-4" />Target Platform(s)</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platforms" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ios">iOS</SelectItem>
                    <SelectItem value="android">Android</SelectItem>
                    <SelectItem value="both">Both (iOS & Android)</SelectItem>
                    <SelectItem value="unsure">Unsure</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2"><Info className="h-4 w-4" />Project Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your app idea, key features, and target audience..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2"><DollarSign className="h-4 w-4" />Estimated Budget</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="<10k">&lt; $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value=">100k">&gt; $100,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2"><Calendar className="h-4 w-4" />Estimated Timeline</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="<3m">&lt; 3 Months</SelectItem>
                      <SelectItem value="3-6m">3-6 Months</SelectItem>
                      <SelectItem value="6-12m">6-12 Months</SelectItem>
                      <SelectItem value=">12m">&gt; 12 Months</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Get My Free Quote"}
          </Button>
        </form>
      </Form>
    </GlassCard>
  );
};
