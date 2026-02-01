
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <img
                src="/newlogo.png"
                alt="Finvise Logo"
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span className="font-bold text-foreground">FinVise AI</span>
            </div>

            <p className="text-sm text-foreground/60">
              Fintech and AI innovation powering the future of finance.
            </p>

            {/* Social Links — moved inside */}
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/company/finvise-ai-tech-pvt-ltd/" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-md border border-accent/30 hover:border-accent hover:bg-accent/10 transition">
                <Linkedin size={18} className="text-accent" />
              </a>

              <a href="https://www.instagram.com/finvise.ai" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-md border border-accent/30 hover:border-accent hover:bg-accent/10 transition">
                <Instagram size={18} className="text-accent" />
              </a>

              <a href="https://www.facebook.com/share/1DE6KptETJ/" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-md border border-accent/30 hover:border-accent hover:bg-accent/10 transition">
                <Facebook size={18} className="text-accent" />
              </a>

              <a href="https://x.com/FinViseAi" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-md border border-accent/30 hover:border-accent hover:bg-accent/10 transition">
                <Twitter size={18} className="text-accent" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/domains" className="footer-link">Expertise</Link></li>
              <li><Link href="/careers" className="footer-link">Careers</Link></li>
            </ul>
          </div>

          {/* Opportunities */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Opportunities</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/careers#internships" className="footer-link">Internships</Link></li>
              <li><Link href="/careers#jobs" className="footer-link">Full-Time Roles</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li className="flex gap-2">
                <Mail size={16} className="text-accent mt-0.5" />
                <a href="mailto:finvise.ai@gmail.com" className="hover:text-accent">
                  finvise.ai@gmail.com
                </a>
              </li>

              <li className="flex gap-2">
                <Phone size={16} className="text-accent mt-0.5" />
                <a href="tel:+917028282142" className="hover:text-accent">
                  +91 702 828 2142
                </a>
              </li>

              <li className="flex gap-2">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span>Nagpur, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-foreground/60">
          <p>© 2026 Finvise AI. All rights reserved.</p>

          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
