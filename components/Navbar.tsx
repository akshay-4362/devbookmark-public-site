"use client";

import { useState, useEffect } from "react";

// ── Update this with your actual Chrome Web Store URL ──────────────────────────
const CHROME_EXTENSION_URL =
  "https://chrome.google.com/webstore/detail/devsnippet/YOUR_EXTENSION_ID";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base/90 backdrop-blur-md border-b border-surface0/80 shadow-lg shadow-crust/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="font-mono text-xl font-black text-mauve
                           group-hover:text-mauve/80 transition-colors">
            ⟨/⟩
          </span>
          <span className="font-bold text-text text-[15px] tracking-tight">
            DevSnippet
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ["Features", "#features"],
            ["How it works", "#how-it-works"],
            ["Pricing", "#pricing"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-subtext0 hover:text-text transition-colors
                         animated-underline"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={CHROME_EXTENSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-mauve text-crust text-sm font-semibold
                       hover:bg-mauve/90 active:scale-95 transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path d="M12 8h8.5M6.5 20L10 14M17.5 20L14 14"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            </svg>
            Install Free
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-subtext0 hover:text-text transition-colors p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-surface0/80 bg-base/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            {[
              ["Features", "#features"],
              ["How it works", "#how-it-works"],
              ["Pricing", "#pricing"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-subtext0 hover:text-text transition-colors py-1"
              >
                {label}
              </a>
            ))}
            <a
              href={CHROME_EXTENSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5
                         rounded-lg bg-mauve text-crust text-sm font-semibold mt-1"
            >
              Install Chrome Extension – Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
