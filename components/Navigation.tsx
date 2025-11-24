"use client";

import { useState } from "react";
import CartIcon from "./CartIcon";

export default function Navigation() {
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800">
      <div className="section-container py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold tracking-wider italic">
          SLEEPY
        </a>
        <div className="flex gap-8 items-center text-sm uppercase tracking-wider">
          <a href="/shop" className="hover:text-neutral-400 transition-colors">
            Shop
          </a>
          <a href="/about" className="hover:text-neutral-400 transition-colors">
            About
          </a>

          {/* Social Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSocialOpen(true)}
            onMouseLeave={() => setSocialOpen(false)}
          >
            <a href="/social" className="hover:text-neutral-400 transition-colors uppercase">
              Social
            </a>
            {socialOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-black border border-neutral-800 rounded-sm min-w-[160px]">
                  <a
                    href="/team"
                    className="block px-4 py-3 hover:bg-neutral-900 transition-colors"
                  >
                    SLEEPY Team
                  </a>
                  <a
                    href="/submit-content"
                    className="block px-4 py-3 hover:bg-neutral-900 transition-colors"
                  >
                    Submit Content
                  </a>
                  <a
                    href="/playlist"
                    className="block px-4 py-3 hover:bg-neutral-900 transition-colors"
                  >
                    Playlists
                  </a>
                </div>
              </div>
            )}
          </div>
          <a href="/support" className="hover:text-neutral-400 transition-colors">
            Support
          </a>
          <CartIcon />
        </div>
      </div>
    </nav>
  );
}
