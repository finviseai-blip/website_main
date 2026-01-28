import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="/logo-finvise.png"
                  alt="Finvise Logo"
                  className="h-8 w-8 rounded-lg object-contain"
                />
                 
              </div>
              <span className="font-bold text-foreground">Finvise AI</span>
            </div>
            <p className="text-sm text-foreground/60">
              Fintech and AI innovation powering the future of finance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-foreground/60 transition-colors hover:text-accent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground/60 transition-colors hover:text-accent"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/domains"
                  className="text-foreground/60 transition-colors hover:text-accent"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-foreground/60 transition-colors hover:text-accent"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Opportunities</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/careers#internships"
                  className="text-foreground/60 transition-colors hover:text-accent"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/careers#jobs"
                  className="text-foreground/60 transition-colors hover:text-accent"
                >
                  Full-Time Roles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:finvise.ai@gmail.com" className="hover:text-accent">
                  finvise.ai@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:+917028282142" className="hover:text-accent">
                  +91 702 828 2142
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span>Nagpur, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-foreground/60">
          <p>© 2026 Finvise AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
