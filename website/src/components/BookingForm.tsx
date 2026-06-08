"use client";

import { useState, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  bookingSchema,
  BookingFormData,
  serviceTypes,
  serviceLabels,
  routes,
} from "@/lib/schemas";
import { formatWhatsAppMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { CheckCircle } from "lucide-react";
import AddressAutocomplete from "./AddressAutocomplete";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      pickupAddress: "",
      dropoffAddress: "",
    },
  });

  const selectedService = watch("serviceType");

  const onSubmit = useCallback((data: BookingFormData) => {
    const message = formatWhatsAppMessage(data);
    const whatsappUrl = buildWhatsAppLink("0672881680", message);
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    reset();
  }, [reset]);

  const inputClass =
    "w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-navy-900 placeholder:text-gray-400";
  const labelClass = "block text-sm font-medium text-navy-900 mb-1.5";
  const errorClass = "text-red-500 text-xs mt-1";

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">
          Booking Submitted!
        </h3>
        <p className="text-gray-600 mb-6">
          Your booking details have been sent via WhatsApp. Our team will
          confirm your booking shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-6 py-3 rounded-lg transition-colors"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            {...register("customerName")}
            placeholder="John Doe"
            className={inputClass}
          />
          {errors.customerName && (
            <p className={errorClass}>{errors.customerName.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>WhatsApp Number *</label>
          <input
            {...register("whatsappNumber")}
            placeholder="067 288 1680"
            className={inputClass}
          />
          {errors.whatsappNumber && (
            <p className={errorClass}>{errors.whatsappNumber.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Service Type *</label>
          <select {...register("serviceType")} className={inputClass}>
            <option value="">Select a service</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>
                {serviceLabels[type]}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className={errorClass}>{errors.serviceType.message}</p>
          )}
        </div>

        {selectedService === "day-to-day" && (
          <div>
            <label className={labelClass}>Route</label>
            <select {...register("route")} className={inputClass}>
              <option value="">Select a route</option>
              {routes.map((route) => (
                <option key={route} value={route}>
                  {route}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Pickup Date *</label>
          <input
            {...register("pickupDate")}
            type="date"
            className={inputClass}
          />
          {errors.pickupDate && (
            <p className={errorClass}>{errors.pickupDate.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Pickup Time *</label>
          <input
            {...register("pickupTime")}
            type="time"
            className={inputClass}
          />
          {errors.pickupTime && (
            <p className={errorClass}>{errors.pickupTime.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass}>Pickup Address *</label>
        <Controller
          name="pickupAddress"
          control={control}
          render={({ field }) => (
            <AddressAutocomplete
              value={field.value}
              onChange={field.onChange}
              placeholder="Search for pickup address"
              className={inputClass}
            />
          )}
        />
        {errors.pickupAddress && (
          <p className={errorClass}>{errors.pickupAddress.message}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>Drop-off Address *</label>
        <Controller
          name="dropoffAddress"
          control={control}
          render={({ field }) => (
            <AddressAutocomplete
              value={field.value}
              onChange={field.onChange}
              placeholder="Search for drop-off address"
              className={inputClass}
            />
          )}
        />
        {errors.dropoffAddress && (
          <p className={errorClass}>{errors.dropoffAddress.message}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>Additional Notes</label>
        <textarea
          {...register("notes")}
          placeholder="Any special requirements or instructions..."
          rows={3}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-4 rounded-lg transition-all text-lg"
      >
        Book Now &amp; Send via WhatsApp
      </button>
    </form>
  );
}
