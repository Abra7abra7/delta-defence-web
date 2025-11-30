"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  locale: string;
}

export function ContactForm({ locale }: ContactFormProps) {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glassmorphic p-8 rounded-lg border"
    >
      <h2 className="text-2xl font-bold font-mono mb-6 text-tactical-green">
        Send Message
      </h2>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-tactical-green/10 border border-tactical-green/30 rounded-lg flex items-center space-x-3"
        >
          <CheckCircle className="text-tactical-green" size={20} />
          <span className="text-tactical-green font-mono text-sm">
            Message sent successfully!
          </span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="font-mono">
            {t("contact.form.name")}
          </Label>
          <Input
            id="name"
            {...register("name")}
            className="glassmorphic border-border focus:border-tactical-green font-mono"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-xs text-red-500 font-mono">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="font-mono">
            {t("contact.form.email")}
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="glassmorphic border-border focus:border-tactical-green font-mono"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500 font-mono">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <Label htmlFor="subject" className="font-mono">
            Subject
          </Label>
          <Input
            id="subject"
            {...register("subject")}
            className="glassmorphic border-border focus:border-tactical-green font-mono"
            placeholder="Inquiry about..."
          />
          {errors.subject && (
            <p className="text-xs text-red-500 font-mono">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="font-mono">
            {t("contact.form.message")}
          </Label>
          <textarea
            id="message"
            {...register("message")}
            rows={6}
            className="w-full px-3 py-2 glassmorphic border border-border focus:border-tactical-green rounded-md focus:outline-none focus:ring-2 focus:ring-tactical-green/20 font-mono text-sm"
            placeholder="Your message here..."
          />
          {errors.message && (
            <p className="text-xs text-red-500 font-mono">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-tactical-green text-background hover:bg-tactical-green/90 tactical-glow font-mono group"
        >
          {isSubmitting ? (
            <span className="flex items-center space-x-2">
              <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              <span>TRANSMITTING...</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <span>{t("contact.form.send")}</span>
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>
      </form>

      {/* Terminal-style decoration */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center space-x-2 text-xs font-mono text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-tactical-green animate-pulse" />
          <span>SECURE CONNECTION ACTIVE</span>
        </div>
      </div>
    </motion.div>
  );
}


