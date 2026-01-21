import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { SecondaryNavbar } from "@/components/SecondaryNavbar";
import { Footer } from "@/components/Footer";
import { auth } from "@/auth";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Heritage Marketplace - Preserving Bengal's Soul",
  description: "A direct-to-artisan marketplace for authentic Dokra, Kantha, and Terracotta.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${notoSerif.variable} ${notoSans.variable} antialiased bg-background-light dark:bg-background-dark text-text-main dark:text-white font-body`}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar user={session?.user} />
            <SecondaryNavbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
