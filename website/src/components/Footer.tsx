import { Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold-400 font-heading font-bold text-xl">
                SMART
              </span>
              <span className="text-white font-heading font-bold text-xl">
                SHUTTLE
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              On Time, Every Time. Johannesburg&apos;s trusted transportation
              service for daily commutes, airport transfers, parcels, and more.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#services", label: "Services" },
                { href: "#pricing", label: "Pricing" },
                { href: "#about", label: "About Us" },
                { href: "#booking", label: "Book Now" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0672881680"
                className="flex items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">067 288 1680</span>
              </a>
              <a
                href="https://wa.me/27672881680"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp Us</span>
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Reliable Rides. Every Time.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Smart Shuttle. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
