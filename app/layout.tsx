import type { Metadata } from "next";
import { Philosopher } from "next/font/google";
import "./globals.css";

const philosopherSans = Philosopher({
  weight: "400",
  variable: "--font-philosopher-sans",
  subsets: ["latin"],
});

const philosopherMono = Philosopher({
  weight: "400",
  variable: "--font-philosopher-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Élanbanc",
  description: "Product by Élanbanc",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${philosopherSans.variable} ${philosopherMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
