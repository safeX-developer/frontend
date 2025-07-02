import { Geist, Geist_Mono, Nunito } from "next/font/google";
import NextTopLoader from 'nextjs-toploader'; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Safex app",
  description: "Safex is a decentralized exchange that allows you to trade cryptocurrencies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >
          <NextTopLoader
            color="#2299DD" // Color of the progress bar
            initialPosition={0.08} // Initial position when loading starts
            crawlSpeed={200} // Speed of the progress bar's initial crawl
            height={3} // Height of the progress bar in pixels
            crawl={true} // Whether the progress bar should crawl
            showSpinner={false} // Whether to show the loading spinner (usually not needed for top bar)
            easing="ease" // CSS easing function
            speed={200} // Animation speed in milliseconds
            shadow="0 0 10px #2299DD,0 0 5px #2299DD" // Optional shadow for the bar
        />
        {children}
      </body>
    </html>
  );
}
