import { z } from "zod";

export const serviceTypes = [
  "day-to-day",
  "airport",
  "parcel",
  "driver",
  "long-distance",
] as const;

export const routes = [
  "Local Trip (Flat Rate)",
  "Soweto to Sandton",
  "Soweto to Midrand",
  "Soweto to Pretoria",
  "Custom Route",
] as const;

export const bookingSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  whatsappNumber: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[0-9+\s()-]+$/, "Enter a valid phone number"),
  serviceType: z.enum(serviceTypes, {
    error: "Please select a service type",
  }),
  route: z.string().optional(),
  pickupDate: z.string().min(1, "Pickup date is required"),
  pickupTime: z.string().min(1, "Pickup time is required"),
  pickupAddress: z.string().min(3, "Pickup address is required"),
  dropoffAddress: z.string().min(3, "Drop-off address is required"),
  notes: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export const serviceLabels: Record<(typeof serviceTypes)[number], string> = {
  "day-to-day": "Day to Day Transport",
  airport: "Airport Services",
  parcel: "Parcel Services",
  driver: "Driver Services",
  "long-distance": "Long Distance Services",
};
