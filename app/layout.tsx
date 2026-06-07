import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Phodcharaphon Sukonsakun Portfolio",
  title: {
    default: "Phodcharaphon Sukonsakun | Engineering Portfolio",
    template: "%s | Phodcharaphon Sukonsakun"
  },
  description:
    "Engineering portfolio of Phodcharaphon Sukonsakun, Computer Engineering student at Prince of Songkla University, featuring production systems, cybersecurity, networking, and embedded projects.",
  authors: [{ name: "Phodcharaphon Sukonsakun" }],
  creator: "Phodcharaphon Sukonsakun",
  publisher: "Phodcharaphon Sukonsakun",
  keywords: [
    "Phodcharaphon Sukonsakun",
    "Computer Engineering",
    "Full-stack Engineering",
    "Cybersecurity",
    "Networking",
    "Embedded Systems",
    "Prince of Songkla University"
  ],
  category: "portfolio",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg"
  },
  openGraph: {
    title: "Phodcharaphon Sukonsakun | Engineering Portfolio",
    description:
      "Production web systems, backend architecture, cybersecurity, networking, embedded systems, and competition proof.",
    type: "website",
    images: [
      {
        url: "/assets/resume/bia-archive/01.jpeg",
        width: 1915,
        height: 926,
        alt: "Archives BIA interface"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Phodcharaphon Sukonsakun | Engineering Portfolio",
    description:
      "Production systems, cybersecurity, networking, embedded systems, and competition proof.",
    images: ["/assets/resume/bia-archive/01.jpeg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
