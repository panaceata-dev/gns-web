import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gigglenshine.com"),
  title: "Daycare Management Software for Independent Owners | Giggle N Shine",
  description:
    "Giggle N Shine helps self-owned daycares automate billing, attendance & parent communication. Request a free demo today.",
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "https://www.gigglenshine.com/",
  },
  openGraph: {
    title: "Daycare Management Software for Independent Owners | Giggle N Shine",
    description:
      "Giggle N Shine helps self-owned daycares automate billing, attendance & parent communication. Request a free demo today.",
    images: ["/hero.png"],
    url: "https://www.gigglenshine.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daycare Management Software for Independent Owners | Giggle N Shine",
    description:
      "Giggle N Shine helps self-owned daycares automate billing, attendance & parent communication. Request a free demo today.",
    images: ["/hero.png"],
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
         <meta name="google-site-verification" content="zp3GFIOl8NAOlpF_APjU1KV291sULYek0I28j9pmDEE" />
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
