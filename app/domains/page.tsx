import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { Brain, Code, Cloud, BarChart3, ArrowRight } from 'lucide-react';

export default function Domains() {
  const domains = [
    {
      icon: Brain,
      title: 'AI for Financial Intelligence',
      description:
        'Advanced machine learning and deep learning systems specifically designed for financial markets. We create AI models that analyze market data, predict trends, and identify investing opportunities in real-time.',
      highlights: [
        'Market Pattern Recognition',
        'Predictive Trading Models',
        'Sentiment Analysis',
        'Anomaly Detection',
        'Portfolio Optimization',
        'Risk Prediction',
      ],
    },
    {
      icon: Code,
      title: 'FinTech Application Development',
      description:
        'Building next-generation financial applications with lightning-fast performance and intuitive interfaces. Our apps enable seamless portfolio management, and financial analytics for modern investors.',
      highlights: [
        'Trading Platforms',
        'Portfolio Dashboards',
        'Real-Time Market Data',
        'Payment Solutions',
        'Mobile Banking Apps',
        'API Integrations',
      ],
    },
    {
      icon: Cloud,
      title: 'Secure FinTech Infrastructure',
      description:
        'Enterprise-grade cloud and DevOps solutions that power secure, high-performance financial systems. We ensure uptime with compliance-first architecture for regulatory requirements.',
      highlights: [
        'Cloud Architecture (AWS/GCP)',
        'Kubernetes Orchestration',
        'Database Optimization',
        'CI/CD Pipelines',
        'Security & Encryption',
        'Disaster Recovery',
      ],
    },
    {
      icon: BarChart3,
      title: 'Financial Data & Analytics',
      description:
        'Transform raw financial data into powerful insights. We build analytics platforms that help investors, and institutions make data-driven decisions with confidence.',
      highlights: [
        'Real-Time Analytics',
        'Historical Data Processing',
        'Custom Reports',
        'Market Backtesting',
        'Performance Metrics',
        'Compliance Reporting',
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-foreground/80">Expertise</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground">
              Our Domains of Excellence
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              We excel across four core domains that fuel innovation in fintech and AI.
              Each area represents years of expertise and commitment to excellence.
            </p>
          </div>
        </section>

        {/* Domains Grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-12">
            {domains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <div
                  key={domain.title}
                  className={`rounded-lg border border-border p-8 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10 ${
                    index % 2 === 1 ? 'bg-secondary' : 'bg-background'
                  }`}
                >
                  <div className="grid gap-8 md:grid-cols-3">
                    <div className="md:col-span-2">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                        <Icon size={28} className="text-accent" />
                      </div>
                      <h2 className="mb-4 text-3xl font-bold text-foreground">
                        {domain.title}
                      </h2>
                      <p className="mb-6 text-lg text-foreground/70 leading-relaxed">
                        {domain.description}
                      </p>
                    </div>
                    <div className="md:col-span-1">
                      <h3 className="mb-4 font-semibold text-accent">Key Capabilities</h3>
                      <ul className="space-y-2">
                        {domain.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-2 text-sm text-foreground/70"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-t border-border bg-secondary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
              Why Choose FinVise AI
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Deep Expertise',
                  description:
                    'Decades of combined experience in fintech, AI, and enterprise software development.',
                },
                {
                  title: 'Proven Track Record',
                  description:
                    'Successfully delivered complex solutions for leading financial institutions globally.',
                },
                {
                  title: 'Innovation First',
                  description:
                    'Constantly exploring emerging technologies and methodologies to stay ahead.',
                },
                {
                  title: 'Quality Assurance',
                  description:
                    'Rigorous testing and validation processes ensure production-ready solutions.',
                },
                {
                  title: 'Scalability',
                  description:
                    'Solutions architected to grow with your business without compromising performance.',
                },
                {
                  title: 'Dedicated Support',
                  description:
                    'Comprehensive support and partnership throughout your project lifecycle.',
                },
              ].map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-lg border border-border bg-background p-6"
                >
                  <h3 className="mb-3 text-lg font-semibold text-accent">{reason.title}</h3>
                  <p className="text-foreground/70">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
