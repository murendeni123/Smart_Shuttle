import { Clock, Shield, MapPin, Users } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    icon: Clock,
    title: "On Time, Every Time",
    description: "Punctuality is our promise. We ensure you reach your destination on schedule.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Professional, vetted drivers with well-maintained vehicles for a safe journey.",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "From Soweto to Sandton, Midrand to Pretoria — we cover Johannesburg and beyond.",
  },
  {
    icon: Users,
    title: "All Group Sizes",
    description: "Whether it's a solo commute or a group trip, we have the right vehicle for you.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Smart Shuttle?
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We&apos;re not just a transport service — we&apos;re your reliable
            travel partner in Johannesburg.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimateOnScroll key={feature.title} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll className="mt-16">
          <div className="bg-navy-800 rounded-2xl p-8 md:p-10 border border-white/5">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: "5+", label: "Years of Service" },
                { value: "10K+", label: "Happy Customers" },
                { value: "24/7", label: "Availability" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-4xl font-bold text-gold-400 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
