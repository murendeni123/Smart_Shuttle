import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import GoogleMapsProvider from "@/components/GoogleMapsProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Smart Shuttle | On Time, Every Time — Johannesburg Transport",
  description:
    "Johannesburg's trusted transportation service. Day to day transport, airport transfers, parcel delivery, driver hire, and long distance travel. Book now via WhatsApp — 067 288 1680.",
  keywords: [
    "shuttle service Johannesburg",
    "Soweto transport",
    "airport transfer OR Tambo",
    "driver hire Johannesburg",
    "parcel delivery Johannesburg",
    "Smart Shuttle",
  ],
  openGraph: {
    title: "Smart Shuttle | On Time, Every Time",
    description:
      "Johannesburg's trusted transportation service. Book reliable rides via WhatsApp.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <GoogleMapsProvider>{children}</GoogleMapsProvider>
      </body>
    </html>
  );
}
