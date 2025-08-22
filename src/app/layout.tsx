import type { Metadata } from "next";
import "./globals.css";
import NoiseOverlay from "@/components/NoiseOverlay";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
