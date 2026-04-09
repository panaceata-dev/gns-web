import type { Metadata } from "next";
import Script from "next/script";
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
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TGN9VDTG');`,
          }}
        />

        {/* Clarity tracking code for https://gigglenshine.com/ */}
        <Script
          id="clarity-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "w8swh9guya");`,
          }}
        />

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

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Gigglenshine",
              "url": "https://gigglenshine.base44.app",
              "logo": "https://gigglenshine.base44.app/logo.png",
              "description": "A vibrant digital platform designed to streamline daycare operations with efficient management, secure care, and boundless opportunities for children to learn and thrive.",
              "telephone": "+1-860-593-2437",
              "sameAs": [
                "https://gigglenshine.base44.app"
              ]
            })
          }}
        />

        {/* SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Gigglenshine",
              "description": "A comprehensive daycare management platform designed to streamline operations, enhance communication, and support child development.",
              "url": "https://gigglenshine.base44.app",
              "image": "https://gigglenshine.base44.app/logo.png",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "operatingSystem": "Web",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            })
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What features does Gigglenshine offer for daycare management?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gigglenshine provides comprehensive daycare management tools including attendance tracking, parent communication, activity logging, billing management, staff scheduling, and secure child development records to streamline daily operations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Gigglenshine ensure the security of child information?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gigglenshine implements enterprise-grade security measures including encrypted data storage, secure user authentication, role-based access controls, and compliance with FERPA and COPPA regulations to protect sensitive child and family information."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can parents access their child's activities and progress reports in real-time?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Gigglenshine provides parents with real-time access to daily activity reports, photos, developmental milestones, and progress updates through a secure mobile and web interface, fostering better communication between caregivers and families."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Gigglenshine easy to use for staff with minimal technical experience?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Gigglenshine features an intuitive, user-friendly interface designed specifically for early childhood educators. The platform includes comprehensive training resources, tutorials, and dedicated customer support to ensure smooth adoption by all staff members."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Gigglenshine integrate with existing daycare systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gigglenshine is designed to work as a comprehensive all-in-one solution. We also offer API integrations with popular third-party tools for billing, accounting, and payroll systems to ensure seamless data flow across your daycare operations."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGN9VDTG"
            height="0"
            width="0"
            style={{display:'none', visibility:'hidden'}}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
