import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "What's my country code?",
  description: "A fun portfolio of coding projects inspired by countries I visit on my travels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav />
        {children}
      </body>
    </html>
  );
};