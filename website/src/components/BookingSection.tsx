"use client";

import BookingForm from "./BookingForm";
import AnimateOnScroll from "./AnimateOnScroll";

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Book Your Ride
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">
            Fill in the form below and your booking details will be sent
            directly to our team via WhatsApp for fast confirmation.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border border-gray-100">
            <BookingForm />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
