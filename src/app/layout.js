import { Press_Start_2P } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const pressStart2 = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: "Bit-By-Bit Taco Builder",
  description: "Build your own taco using this fun, 8-bit style app that's inspired by flavours across México.",
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pressStart2.className}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-M59L4308DV" />
    </html>
  );
};