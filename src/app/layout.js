import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart2 = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
});

//to do
export const metadata = {
  title: "",
  description: "",
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pressStart2.className}>
        {children}
      </body>
    </html>
  );
};