import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gigglenshine – Daycare Management Platform",
  description:
    "A vibrant digital platform designed to bring joy and playfulness to everyday learning experiences through interactive storytelling.",
  icons: {
    icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69af92af36ccb323ff991835/71bc43d6d_logo.png",
  },
  openGraph: {
    title: "Gigglenshine",
    description:
      "Your partner in streamlined daycare operations. Efficient management, secure care, and boundless opportunities for children to learn and thrive.",
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/render/image/public/base44-prod/public/69af92af36ccb323ff991835/71bc43d6d_logo.png?width=1200&height=630&resize=contain",
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
