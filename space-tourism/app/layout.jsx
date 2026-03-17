import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

export const metadata = {
  title: "Space Tourism",
  description: "Space tourism website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable} ${barlow.className} text-white`}
      >
        {children}
      </body>
    </html>
  );
}
