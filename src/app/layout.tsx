import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Grows | Discover Scholarships & Opportunities",
  description: "Empower your academic journey with personalized scholarships, curated career guides, educational loans, internships, Sarkari Naukri, and global learning programs.",
  keywords: [
    "student scholarships",
    "internships India",
    "educational loans",
    "Sarkari Naukri",
    "career guidance",
    "study abroad",
    "Student Grows",
    "scholarships after 12th",
    "career options",
    "global education programs"
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Student Grows | Discover Scholarships & Career Opportunities",
    description: "Explore scholarships, internships, loans, Sarkari jobs, and global education paths — all in one place for students across India.",
    url: "https://studentgrow.prasunet.com",
    siteName: "Student Grows",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Student Grows - Student Empowerment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Grows | Scholarships, Internships & Government Jobs",
    description: "Empowering Indian students through scholarships, internships, education loans, and career support.",
    images: ["/og-image.png"],
    creator: "@StudentGrows",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
