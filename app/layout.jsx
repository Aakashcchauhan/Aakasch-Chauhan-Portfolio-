import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

// Archivo is variable on both weight and width, which the heavy condensed
// headline lockup relies on (see `.display` in globals.css).
const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Aakash Chauhan — Full Stack / Software Engineer",
  description:
    "I build thoughtful products from the first interface to the last API — turning complex ideas into fast, useful software.",
  openGraph: {
    title: "Aakash Chauhan — Full Stack / Software Engineer",
    description:
      "Portfolio of Aakash Chauhan: web products, automation tools and API-led platforms.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#080808",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

