import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Control Center",
  description: "Advert Control across all sites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="">
          <h1 className="">Example Site</h1>
          <Link href={`/`}>Home</Link>
          <Link href={`/about`}>About</Link>
          <Link href={`/content`}>Content</Link>
          <Link href={`/contact`}>Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  );
};