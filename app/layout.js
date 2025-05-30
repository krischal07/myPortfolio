import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Krischal Porfolio website",
  description: "Portfolio website of Krischal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme = "light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
