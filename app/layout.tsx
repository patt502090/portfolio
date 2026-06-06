import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Phodcharaphon Sukonsakun | Full-Stack Engineering Portfolio",
  description:
    "Portfolio of Phodcharaphon Sukonsakun, Computer Engineering student at Prince of Songkla University, featuring production full-stack systems, cybersecurity competitions, networking, and embedded projects.",
  authors: [{ name: "Phodcharaphon Sukonsakun" }],
  openGraph: {
    title: "Phodcharaphon Sukonsakun | Full-Stack Engineering Portfolio",
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
