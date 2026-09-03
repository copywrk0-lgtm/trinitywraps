import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trinity Wraps | Automotive Wraps & Customisation",
  description:
    "Trinity Wraps — vehicle wraps, custom graphics, paint protection and automotive customisation in Vijayawada.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
