import { BookingFormData, serviceLabels } from "./schemas";

export function formatWhatsAppMessage(data: BookingFormData): string {
  const lines = [
    `🚐 *NEW SMART SHUTTLE BOOKING*`,
    ``,
    `👤 *Customer:* ${data.customerName}`,
    `📱 *WhatsApp:* ${data.whatsappNumber}`,
    `🔧 *Service:* ${serviceLabels[data.serviceType]}`,
  ];

  if (data.route) {
    lines.push(`🗺️ *Route:* ${data.route}`);
  }

  lines.push(
    `📅 *Date:* ${data.pickupDate}`,
    `⏰ *Time:* ${data.pickupTime}`,
    `📍 *Pickup:* ${data.pickupAddress}`,
    `📍 *Drop-off:* ${data.dropoffAddress}`
  );

  if (data.notes) {
    lines.push(`📝 *Notes:* ${data.notes}`);
  }

  return lines.join("\n");
}

export function buildWhatsAppLink(
  phoneNumber: string,
  message: string
): string {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const international = cleaned.startsWith("0")
    ? `27${cleaned.slice(1)}`
    : cleaned;
  return `https://wa.me/${international}?text=${encodeURIComponent(message)}`;
}
