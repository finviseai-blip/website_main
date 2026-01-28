'use client';

import React from "react"

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsLoading(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-foreground/80">Contact Us</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground">
              Get In Touch
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Have a question or partnership inquiry? We'd love to hear from you. 
              Reach out and let's discuss how we can work together.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-8 text-3xl font-bold text-foreground">Contact Information</h2>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                  <p className="text-foreground/70">finvise.ai@gmail.com</p>
                  <p className="text-sm text-foreground/60">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                  <p className="text-foreground/70">+91 702 828 2142</p>
                  <p className="text-sm text-foreground/60">Mon-Fri, 10 AM - 6 PM IST</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Office</h3>
                  <p className="text-foreground/70">
                    Plot No. 379, Hiwari Layout<br />
                    Nagpur 440008, Maharashtra
                  </p>
                  <p className="text-sm text-foreground/60">India</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Clock size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Business Hours</h3>
                  <p className="text-foreground/70">
                    Monday - Friday: 10 AM - 6 PM IST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="border-t border-border pt-8">
                <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/careers" className="text-accent hover:underline">
                      Join Our Team
                    </a>
                  </li>
                  <li>
                    <a href="/domains" className="text-accent hover:underline">
                      Our Expertise
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-accent hover:underline">
                      About Finvise AI
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="rounded-lg border border-border bg-secondary p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <Send size={32} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-foreground/70">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-lg border border-border bg-secondary p-8 space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-background transition-all hover:shadow-lg hover:shadow-accent/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
