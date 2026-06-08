"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-gold-400 font-heading font-bold text-xl md:text-2xl tracking-tight">
              SMART
            </span>
            <span className="text-white font-heading font-bold text-xl md:text-2xl tracking-tight">
              SHUTTLE
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Book Now
            </a>
            <a
              href="tel:0672881680"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-gold-400 py-2 text-base"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="block bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-5 py-3 rounded-lg text-center mt-4"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
