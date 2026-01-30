'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/logo-finvise.png"
              alt="Finvise AI Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="hidden text-xl font-bold text-foreground sm:inline">
              FinVise AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 justify-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              About
            </Link>
            <Link
              href="/domains"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              Expertise
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              Contact
            </Link>
            <Link
              href="/preview"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              Preview
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2 text-black font-semibold text-black transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="flex flex-col gap-4 pb-4 md:hidden">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/domains"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Expertise
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/careers"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2 text-black font-semibold text-black"
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
