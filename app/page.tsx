'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, BarChart3, Zap, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg1.jpg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl w-full">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">
                  AI-Powered Financial Innovation
                </span>
              </div>

              <h1 className="mb-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance drop-shadow-lg">
                Revolutionizing{' '}
                <span className="text-accent">Finance</span>{' '}
                with AI
              </h1>

              <p className="mb-10 text-lg text-foreground/90 leading-relaxed max-w-xl drop-shadow-md">
                Finvise AI leverages cutting-edge artificial intelligence to transform financial technology. We build intelligent solutions that empower businesses to make smarter decisions, faster.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-background transition-all hover:shadow-2xl hover:shadow-accent/40 hover:scale-105 active:scale-95"
                >
                  Join Our Team <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent bg-background/20 backdrop-blur-sm px-8 py-4 font-semibold text-foreground transition-all hover:bg-accent/20 hover:text-accent"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-black border-t-2 border-accent/40">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 animate-float-up">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To simplify money for everyone. At Finvise, we help individuals and businesses understand, manage, and grow their money using AI-powered insights, education, and tools — so financial decisions are made with clarity, confidence, and long-term thinking.
                </p>
                <div className="flex items-start gap-4 bg-black/50 border-2 border-accent/40 rounded-lg p-6 hover:border-accent hover:shadow-2xl hover:shadow-accent/40 transition-smooth group cursor-pointer">
                  <span className="text-2xl group-hover:scale-125 transition-smooth">✨</span>
                  <div>
                    <h4 className="text-xl font-semibold text-accent mb-2 group-hover:text-accent transition-smooth">Powered by FinAI</h4>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-smooth">Advanced AI technology that provides intelligent financial insights and recommendations.</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border-2 border-accent/50 hover:border-accent shadow-lg hover:shadow-2xl hover:shadow-accent/30 transition-smooth group animate-float-up" style={{ animationDelay: '0.1s' }}>
                <Image
                  src="/images/image1.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover group-hover:scale-110 transition-smooth duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Complete Money Ecosystem Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-black/95 border-b-2 border-accent/40">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-float-up">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Complete <span className="text-accent">Money Ecosystem</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for intelligent financial decision-making
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '📊',
                  title: 'Asset Analysis',
                  description: 'Deep insights into your investments and financial assets with AI-powered analytics'
                },
                {
                  icon: '📈',
                  title: 'Performance Tracking',
                  description: 'Real-time monitoring of your portfolio performance across multiple asset classes'
                },
                {
                  icon: 'ℹ️',
                  title: 'Financial Education',
                  description: 'Learn and understand finance through intelligent, personalized educational content'
                },
                {
                  icon: '🎯',
                  title: 'Goal-Based Planning',
                  description: 'Strategic planning tools for investing, saving, taxation, and long-term goals'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-black border-2 border-accent/40 rounded-lg p-8 hover:border-accent hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/30 transition-smooth animate-float-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg mb-6 group-hover:from-accent/40 group-hover:to-accent/20 group-hover:scale-125 transition-smooth text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent transition-smooth">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed text-sm md:text-base transition-smooth">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Finvise Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-black/95 to-black border-b-2 border-accent/40">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Left Image */}
              <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border-2 border-accent/50 hover:border-accent shadow-lg hover:shadow-2xl hover:shadow-accent/30 transition-smooth order-2 lg:order-1 group animate-float-up">
                <Image
                  src="/images/image2.jpg"
                  alt="Why Choose Finvise"
                  fill
                  className="object-cover group-hover:scale-110 transition-smooth duration-700"
                />
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2 animate-float-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Why Choose <span className="text-accent">Finvise?</span>
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: '🎓', text: 'Education over speculation - We focus on clarity, not hype' },
                    { icon: '🤖', text: 'AI-powered insights for smarter financial decisions' },
                    { icon: '💼', text: 'Multi-asset class support for comprehensive planning' },
                    { icon: '📈', text: 'Future-ready platform built for sustainable growth' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-black/50 border-2 border-accent/30 hover:border-accent rounded-lg p-4 hover:shadow-xl hover:shadow-accent/20 transition-smooth group cursor-pointer" style={{ animationDelay: `${index * 0.05}s` }}>
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg flex-shrink-0 text-lg group-hover:from-accent/50 group-hover:to-accent/30 group-hover:scale-110 transition-smooth">
                        {item.icon}
                      </div>
                      <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed pt-1 transition-smooth">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Finvise Team CTA */}
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-black border-t-2 border-accent/40">
          <div className="mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 border-3 border-accent/60 hover:border-accent rounded-2xl p-12 text-center shadow-xl hover:shadow-2xl hover:shadow-accent/40 transition-smooth group animate-float-up">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white group-hover:text-accent transition-smooth">
                Join the <span className="text-accent">Finvise Team</span>
              </h2>
              <p className="text-xl text-gray-300 group-hover:text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto transition-smooth">
                We're building the future of financial technology. Join us in creating intelligent, ethical, and accessible financial tools. Explore opportunities in Marketing, AI Development, App Development, and DevOps.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-lg bg-accent hover:bg-white text-black font-semibold px-10 py-4 text-lg transition-smooth hover:scale-110 hover:shadow-2xl hover:shadow-accent/50 active:scale-95"
              >
                Explore Career Opportunities <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
