'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import CareersForm from '@/components/careers-form';
import Image from 'next/image';
import { Briefcase, Users, Award, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Careers() {
  const [formOpen, setFormOpen] = useState(false);

  const internships = [
    {
      title: 'Marketing Internship',
      description: 'Help drive our fintech innovation narrative through digital marketing and brand building.',
      duration: '3-6 months',
      skills: ['Digital Marketing', 'Content Strategy', 'Social Media', 'Analytics'],
      image: '/career-marketing.jpg',
      icon: TrendingUp,
    },
    {
      title: 'AI Development Internship',
      description: 'Build cutting-edge machine learning models for financial analysis and trading algorithms.',
      duration: '3-6 months',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Financial Data'],
      image: '/career-ai-dev.jpg',
      icon: Award,
    },
    {
      title: 'App Development Internship',
      description: 'Develop fintech applications and user interfaces for next-generation financial platforms.',
      duration: '3-6 months',
      skills: ['React', 'Next.js', 'TypeScript', 'Finance APIs'],
      image: '/career-app-dev.jpg',
      icon: Briefcase,
    },
    {
      title: 'Cloud & DevOps Internship',
      description: 'Build and manage scalable infrastructure for high-performance fintech systems.',
      duration: '3-6 months',
      skills: ['Docker', 'Kubernetes', 'AWS/GCP', 'CI/CD Pipelines'],
      image: '/career-devops.jpg',
      icon: Users,
    },
  ];

  const jobs = [
    {
      title: 'Senior Full-Stack Engineer',
      department: 'App Development',
      experience: '5+ years',
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI Development',
      experience: '3+ years',
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      experience: '4+ years',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      experience: '5+ years',
    },
    {
      title: 'Solutions Architect',
      department: 'FinTech',
      experience: '7+ years',
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      experience: '3+ years',
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
              <span className="text-sm font-medium text-foreground/80">Careers</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground">
              Join Our Team
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              We're building the future of fintech and AI. If you're passionate about innovation
              and want to make an impact, we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="border-b border-border bg-secondary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
              Why Work With Us
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  icon: TrendingUp,
                  title: 'Growth',
                  description: 'Continuous learning and career advancement opportunities.',
                },
                {
                  icon: Users,
                  title: 'Community',
                  description: 'Work with talented, passionate individuals worldwide.',
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We celebrate and reward outstanding contributions.',
                },
                {
                  icon: Briefcase,
                  title: 'Flexibility',
                  description: 'Flexible work arrangements and competitive benefits.',
                },
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-foreground/70">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internships */}
        <section id="internships" className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-4xl font-bold text-foreground">
              Internship Opportunities
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {internships.map((internship, index) => {
                const Icon = internship.icon;
                return (
                  <div
                    key={internship.title}
                    className="group rounded-xl border border-border bg-background overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden bg-secondary">
                      <Image
                        src={internship.image || "/placeholder.svg"}
                        alt={internship.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 backdrop-blur-sm">
                          <Icon size={32} className="text-accent" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-accent transition-colors">{internship.title}</h3>
                      <p className="mb-3 text-sm text-accent font-semibold">{internship.duration}</p>
                      <p className="mb-4 text-sm text-foreground/70">{internship.description}</p>
                      <div className="space-y-2 mb-6">
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full bg-accent/10 px-2 py-1 text-xs text-accent group-hover:bg-accent/20 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => setFormOpen(true)}
                        className="w-full rounded-lg bg-accent px-4 py-2.5 font-semibold text-background transition-all hover:shadow-lg hover:shadow-accent/30 hover:scale-105 active:scale-95"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Full-Time Roles */}
        <section id="jobs" className="border-b border-border bg-secondary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-4xl font-bold text-foreground">
              Full-Time Opportunities
            </h2>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={job.title}
                  className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-lg border border-border bg-background p-6 transition-all duration-500 hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">{job.title}</h3>
                    <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                      {job.department} • {job.experience} experience
                    </p>
                  </div>
                  <button
                    onClick={() => setFormOpen(true)}
                    className="whitespace-nowrap rounded-lg border-2 border-accent px-6 py-2.5 font-semibold text-accent transition-all hover:bg-accent hover:text-background hover:shadow-lg hover:shadow-accent/20 hover:scale-110 active:scale-95"
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-lg border border-accent/20 bg-secondary p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Don't See Your Role?
            </h2>
            <p className="mb-8 text-lg text-foreground/70">
              We're always looking for talented individuals. Send us your resume and let's talk!
            </p>
            <button
              onClick={() => setFormOpen(true)}
              // className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-black transition-all hover:shadow-lg hover:shadow-accent/20"
              className="inline-flex items-center gap-2 rounded-lg bg-accent hover:bg-white text-black font-semibold px-10 py-4 text-lg transition-smooth hover:scale-110 hover:shadow-2xl hover:shadow-accent/50 active:scale-95"
            >
              Start Your Application
            </button>
          </div>
        </section>
      </main>

      {/* Application Form Modal */}
      {formOpen && <CareersForm onClose={() => setFormOpen(false)} />}

      <Footer />
    </>
  );
}
