"use client";

import {
  Users,
  Package,
  Plane,
  UserCheck,
  MapPin,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    icon: Users,
    title: "Day to Day Transport",
    subtitle: "One Way Trips",
    description:
      "Reliable daily transport across Johannesburg. Perfect for work, school, and everyday commutes.",
    prices: [
      { route: "Local Trips", price: "R50", note: "Flat Rate" },
      { route: "Soweto → Sandton", price: "R220", note: "One Way" },
      { route: "Soweto → Midrand", price: "R300", note: "One Way" },
      { route: "Soweto → Pretoria", price: "R400", note: "One Way" },
    ],
    extras: [
      "Return trips charged with wait time — negotiable",
      "School & work transport: pay as you use, depending on area",
    ],
  },
  {
    icon: Package,
    title: "Parcel Services",
    subtitle: "Collection & Delivery",
    description:
      "Fast and affordable parcel delivery across the city. We handle your packages with care.",
    prices: [
      { route: "Per Kilometre", price: "R7.50", note: "Collection & Delivery" },
      { route: "Service Fee", price: "R5", note: "Per trip" },
    ],
    extras: ["Minimum distance: 10km"],
  },
  {
    icon: Plane,
    title: "Airport Services",
    subtitle: "Available on Request",
    description:
      "Professional airport transfers to and from O.R. Tambo International Airport.",
    prices: [],
    extras: [
      "Airport Pick Ups & Drop Offs",
      "Flight Monitoring",
      "Meet & Greet Service",
    ],
  },
  {
    icon: UserCheck,
    title: "Driver Services",
    subtitle: "Johannesburg & Beyond",
    description:
      "Hire a professional, punctual driver for business, events, roadshows, or personal use.",
    prices: [
      { route: "Johannesburg", price: "R250", note: "Per Day" },
      { route: "Outside JHB", price: "R1,500", note: "Per Day" },
    ],
    extras: [
      "R150 for meals covered by client",
      "Accommodation paid by client",
      "The longer you rent, the cheaper it becomes!",
    ],
  },
  {
    icon: MapPin,
    title: "Long Distance",
    subtitle: "Comfortable Group Travel",
    description:
      "Comfortable rides for family, friends, or corporate groups. Book a week in advance to secure your trip.",
    prices: [],
    extras: [
      "Family, friends & corporate groups",
      "Book a week before your trip",
      "Custom quotes available",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Our Services &amp; Pricing
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From daily commutes to long-distance travel, we offer a range of
            reliable transportation services at competitive prices.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateOnScroll
                key={service.title}
                delay={i * 100}
                className="group"
              >
                <div className="h-full bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-gold-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-navy-900 text-lg">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {service.prices.length > 0 && (
                    <div className="space-y-2 mb-5">
                      {service.prices.map((p) => (
                        <div
                          key={p.route}
                          className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
                        >
                          <span className="text-sm text-gray-700">
                            {p.route}
                          </span>
                          <div className="text-right">
                            <span className="font-bold text-navy-900">
                              {p.price}
                            </span>
                            <span className="text-xs text-gray-500 ml-1">
                              {p.note}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-1.5">
                    {service.extras.map((extra) => (
                      <li
                        key={extra}
                        className="text-sm text-gray-500 flex items-start gap-2"
                      >
                        <span className="text-gold-500 mt-0.5">•</span>
                        {extra}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#booking"
                    className="mt-6 block text-center bg-navy-900 hover:bg-navy-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                  >
                    Book {service.title}
                  </a>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
