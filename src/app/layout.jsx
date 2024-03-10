import "./globals.css";
import { tablet_gothic, crimson_text, open_sans, poppins } from './font/fonts'
import Navigation from "@/components/header/navigation"
import Footer from "@/components/footer/footer"

import { Suspense } from 'react';
import Loading from '@/components/loading';

export const metadata = {
  title: "Kaunlaran",
  description: "Kaunlaran",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${crimson_text.variable} ${open_sans.variable} ${poppins.variable} ${tablet_gothic.variable} scroll-smooth`}>
      {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'"></meta> */}
      <body className="overflow-x-hidden">
        <header>
          <Navigation />
        </header>
        <main className="min-h-[85vh]">
          <Suspense>
            {children}
            <Loading />
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
