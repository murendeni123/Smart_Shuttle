import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions or ready to book? Reach out to us directly.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Phone,
              title: "Call Us",
              detail: "067 288 1680",
              href: "tel:0672881680",
              action: "Call now",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              detail: "067 288 1680",
              href: "https://wa.me/27672881680",
              action: "Chat now",
            },
            {
              icon: MapPin,
              title: "Service Area",
              detail: "Johannesburg & Surrounds",
              href: undefined,
              action: undefined,
            },
            {
              icon: Clock,
              title: "Operating Hours",
              detail: "Available 24/7",
              href: undefined,
              action: undefined,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll key={item.title} delay={i * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{item.detail}</p>
                  {item.href && (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-gold-500 hover:text-gold-400 text-sm font-semibold"
                    >
                      {item.action} &rarr;
                    </a>
                  )}
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
