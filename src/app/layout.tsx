// ROOT LAYOUT PAGE

import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Soccer Player Tracker",
    template: "%s | Soccer Player Tracker",
  },
  description: "Track and manage soccer player performance and development",
  keywords: [
    "soccer",
    "player tracking",
    "sports management",
    "team management",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
