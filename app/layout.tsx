import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart/CartContext";
import Cart from "@/components/Cart";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "SLEEPY - Underground Racing Lifestyle",
  description: "Real builds only. No rice, no fake vents. Built different. Undercover. Overpowered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mnw1ond.css" />
      </head>
      <body className="antialiased">
        <CartProvider>
          <Navigation />
          <main className="pt-20">{children}</main>
          <footer className="border-t border-neutral-800 mt-32">
            <div className="section-container py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="font-bold mb-4 tracking-wider italic text-xl">SLEEPY</h3>
                  <p className="text-neutral-500 text-sm">Undercover. Overpowered.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 tracking-wider text-sm">SHOP</h4>
                  <ul className="space-y-2 text-sm text-neutral-500">
                    <li><a href="/shop" className="hover:text-white transition-colors">All Products</a></li>
                    <li><a href="/shop" className="hover:text-white transition-colors">Apparel</a></li>
                    <li><a href="/shop" className="hover:text-white transition-colors">Accessories</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 tracking-wider text-sm">COMPANY</h4>
                  <ul className="space-y-2 text-sm text-neutral-500">
                    <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="/affiliates" className="hover:text-white transition-colors">Affiliates</a></li>
                    <li><a href="/social" className="hover:text-white transition-colors">Social</a></li>
                    <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 tracking-wider text-sm">LEGAL</h4>
                  <ul className="space-y-2 text-sm text-neutral-500">
                    <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                    <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
                <p>SLEEPY &copy; {new Date().getFullYear()}. Real builds only. Built different.</p>
              </div>
            </div>
          </footer>
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
