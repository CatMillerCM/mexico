import { Instrument_Sans } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "What's my country code?",
  description: "A fun portfolio of coding projects inspired by countries I visit on my travels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};