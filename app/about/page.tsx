import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { CheckCircle, Globe } from 'lucide-react';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section with Background */}
        <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(\image3.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent uppercase tracking-wide">About Finvise AI</span>
            </div>
            <h1 className="mb-10 text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Simplifying Money <br className="hidden sm:block" />
              <span className="text-accent">For Everyone</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
              Finvise is an AI-powered fintech platform designed to be a complete money ecosystem. We combine technology, data, and financial intelligence to make money management simpler, smarter, and future-ready.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-black px-4 py-24 sm:px-6 lg:px-8 border-b-2 border-accent/40">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-5xl md:text-6xl font-bold text-white animate-float-up">Our Story</h2>
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
              {/* Left Content */}
              <div className="space-y-8 animate-float-up">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light hover:text-gray-100 transition-smooth">
                  Finvise was born from a simple belief: everyone deserves access to powerful financial intelligence, not just the wealthy or the experts.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light hover:text-gray-100 transition-smooth">
                  We recognized that people struggle with money not because they lack intelligence, but because financial systems are unnecessarily complex. That's why we're building a platform that uses AI to cut through the noise.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light hover:text-gray-100 transition-smooth">
                  Powered by FinAI, our advanced AI engine, Finvise focuses on education, analysis, and clarity — not speculation. We're here to help individuals and businesses understand their finances deeply, plan responsibly, and grow sustainably.
                </p>
              </div>

              {/* Right Statistics */}
              <div className="grid grid-cols-2 gap-8 lg:gap-10 animate-float-up" style={{ animationDelay: '0.1s' }}>
                {[
                  { icon: '🌍', label: 'IN', text: 'Made in India' },
                  { icon: '🤖', label: 'AI', text: 'Powered by FinAI' },
                  { icon: '🌐', label: 'FOR THE WORLD', text: 'For the World' },
                  { icon: '⏰', label: '24/7', text: 'Always Available' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-accent/40 bg-gradient-to-br from-accent/10 to-accent/5 hover:border-accent hover:shadow-xl hover:shadow-accent/30 transition-smooth group cursor-pointer" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <div className="text-5xl md:text-6xl mb-4 group-hover:scale-125 transition-smooth">{item.icon}</div>
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-3 text-center group-hover:text-white transition-smooth">{item.label}</div>
                    <p className="text-gray-300 group-hover:text-gray-100 text-sm md:text-base text-center leading-snug transition-smooth">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="border-b-2 border-accent/40 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="animate-float-up">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-accent/40 bg-accent/10 px-4 py-2 group hover:border-accent hover:bg-accent/20 transition-smooth cursor-pointer">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-accent group-hover:text-white transition-smooth">About Finvise AI</span>
                </div>
                <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground hover:text-accent transition-smooth">
                  AI Transforming Financial Markets
                </h1>
                <p className="text-xl text-foreground/70 hover:text-foreground leading-relaxed transition-smooth">
                  Finvise AI is a cutting-edge fintech company dedicated to revolutionizing financial technology through artificial intelligence. We combine deep financial expertise with advanced AI capabilities to create innovative solutions that empower institutions and individuals to thrive in the digital financial ecosystem.
                </p>
              </div>
              <div className="relative h-96 lg:h-full rounded-lg overflow-hidden border-2 border-accent/50 hover:border-accent shadow-lg hover:shadow-2xl hover:shadow-accent/30 transition-smooth group animate-float-up" style={{ animationDelay: '0.1s' }}>
                <Image
                  src="/team-collaboration.jpg"
                  alt="Team Collaboration"
                  fill
                  className="object-cover group-hover:scale-110 transition-smooth duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-b-2 border-accent/40 bg-secondary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="border-2 border-accent/40 rounded-lg p-8 bg-gradient-to-br from-accent/10 to-transparent hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-smooth group animate-float-up">
                <h2 className="mb-4 text-3xl font-bold text-foreground group-hover:text-accent transition-smooth">Our Mission</h2>
                <p className="text-lg text-foreground/70 group-hover:text-foreground leading-relaxed transition-smooth">
                  To leverage cutting-edge artificial intelligence and financial expertise to create
                  innovative solutions that democratize access to advanced financial technologies
                  and empower organizations to make data-driven decisions.
                </p>
              </div>
              <div className="border-2 border-accent/40 rounded-lg p-8 bg-gradient-to-br from-accent/10 to-transparent hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-smooth group animate-float-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="mb-4 text-3xl font-bold text-foreground group-hover:text-accent transition-smooth">Our Vision</h2>
                <p className="text-lg text-foreground/70 group-hover:text-foreground leading-relaxed transition-smooth">
                  To become the leading innovator in fintech and AI, setting the standard for how
                  technology transforms financial services globally. We envision a world where
                  intelligent financial systems are accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b-2 border-accent/40 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-foreground animate-float-up">
              What Finvise AI Stands For
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Innovation',
                  description:
                    'We continuously push boundaries and explore new possibilities in fintech and AI to deliver next-generation solutions.',
                },
                {
                  title: 'Excellence',
                  description:
                    'We maintain the highest standards of quality in everything we do, from development to deployment.',
                },
                {
                  title: 'Integrity',
                  description:
                    'We conduct our business with transparency, honesty, and a commitment to ethical practices.',
                },
                {
                  title: 'Collaboration',
                  description:
                    'We believe in teamwork and partnerships that amplify our impact and create lasting value.',
                },
                {
                  title: 'Impact',
                  description:
                    'We focus on creating meaningful solutions that make a real difference in the financial landscape.',
                },
                {
                  title: 'Agility',
                  description:
                    'We adapt quickly to market changes and embrace new technologies to stay ahead of the curve.',
                },
              ].map((value, idx) => (
                <div
                  key={value.title}
                  className="rounded-lg border-2 border-accent/40 bg-gradient-to-br from-secondary to-secondary/50 p-8 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-smooth group cursor-pointer animate-float-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <CheckCircle size={24} className="text-accent group-hover:scale-125 transition-smooth" />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-smooth">{value.title}</h3>
                  </div>
                  <p className="text-foreground/70 group-hover:text-foreground transition-smooth">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Focus Areas */}
        <section className="border-b-2 border-accent/40 bg-secondary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mb-16">
              <div className="relative h-96 lg:h-full rounded-lg overflow-hidden border-2 border-accent/50 hover:border-accent shadow-lg hover:shadow-2xl hover:shadow-accent/30 transition-smooth group animate-float-up">
                <Image
                  src="/finvise-logo.png"
                  alt="Market Analytics"
                  fill
                  className="object-cover group-hover:scale-110 transition-smooth duration-700"
                />
              </div>
              <div className="animate-float-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="mb-8 text-4xl font-bold text-foreground hover:text-accent transition-smooth">
                  Pioneering FinTech Innovation
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'AI-Powered Trading Systems',
                      description: 'Advanced algorithms that learn market patterns and execute optimal trading strategies.',
                    },
                    {
                      title: 'Real-Time Market Analytics',
                      description: 'Deep financial insights powered by machine learning and predictive models.',
                    },
                    {
                      title: 'Intelligent Risk Management',
                      description: 'AI-driven risk assessment and portfolio optimization tools.',
                    },
                    {
                      title: 'Secure & Scalable Infrastructure',
                      description: 'Enterprise-grade systems handling millions of transactions securely.',
                    },
                  ].map((area, idx) => (
                    <div key={area.title} className="flex gap-4 p-4 rounded-lg border-2 border-accent/30 bg-background/50 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-smooth group cursor-pointer" style={{ animationDelay: `${idx * 0.05}s` }}>
                      <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1 group-hover:scale-125 transition-smooth" />
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground group-hover:text-accent transition-smooth">{area.title}</h3>
                        <p className="text-foreground/70 group-hover:text-foreground text-sm transition-smooth">{area.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
