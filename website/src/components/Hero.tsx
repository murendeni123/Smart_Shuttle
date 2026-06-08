"use client";

import { ArrowRight, Shield, ThumbsUp, Sofa } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/80 to-navy-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl motion-safe:animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-400 font-medium tracking-widest uppercase text-sm">
              Safe &bull; Reliable &bull; Comfortable
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            <span className="text-gold-400">Smart</span> Shuttle
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-heading font-light mb-2">
            On Time, Every Time
          </p>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            Johannesburg&apos;s trusted transportation service. From daily
            commutes to airport transfers, parcel delivery to long-distance
            travel — we&apos;ve got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 motion-reduce:hover:scale-100 text-lg"
            >
              Book a Ride
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/27672881680"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10 font-bold px-8 py-4 rounded-lg transition-all text-lg"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: Shield, label: "Safe" },
              { icon: ThumbsUp, label: "Reliable" },
              { icon: Sofa, label: "Comfortable" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-gray-400">
                <Icon className="w-5 h-5 text-gold-500" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce">
        <a href="#services" className="text-gold-400 hover:text-gold-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
