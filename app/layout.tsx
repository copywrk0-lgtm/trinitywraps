import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "Trinity Wraps | Vehicle Wraps & Customisation in Vijayawada",
    template: "%s | Trinity Wraps",
  },
  description:
    "Automotive wraps, custom graphics, protection, tinting and vehicle styling for cars and bikes in Vijayawada.",
  metadataBase: new URL("https://trinitywraps.vercel.app"),
  openGraph: {
    title: "Trinity Wraps — Vijayawada",
    description: "Wraps, custom graphics, protection and styling for cars & bikes.",
    images: ["/images/trinity_wraps_01_ktm.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
