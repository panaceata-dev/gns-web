import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gigglenshine – Daycare Management Platform",
  description:
    "A vibrant digital platform designed to bring joy and playfulness to everyday learning experiences through interactive storytelling.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Gigglenshine",
    description:
      "Your partner in streamlined daycare operations. Efficient management, secure care, and boundless opportunities for children to learn and thrive.",
    images: [
      "/logo.png",
    ],
    url: "https://gigglenshine.base44.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
