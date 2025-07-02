import { Inter, Roboto_Mono, Nunito } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

// Replace Geist with Inter (a widely used and reliable Google Font)
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",  // Changed variable name to avoid conflict
  subsets: ["latin"],
  display: "swap",
});

// Replace Geist_Mono with Roboto_Mono
const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Safex app",
  description: "Safex is a decentralized exchange that allows you to trade cryptocurrencies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} ${nunito.variable} antialiased`}
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
