import { Inter } from "next/font/google";
import "./globals.css";

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
          <h1 className="">Control Center</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
