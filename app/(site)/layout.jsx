import "./globals.css";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense } from "react";
import ProgressBars from "@/components/Nav/ProgressBar";
import Header from "@/components/Nav/Header";
import Footer from "@/components/Nav/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "The Digital Tutors",
  description: "Unlock Your Potential with Practical Skills for Tomorrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        <Suspense>
          <ProgressBars />
        </Suspense>
      </body>
    </html>
  );
}
