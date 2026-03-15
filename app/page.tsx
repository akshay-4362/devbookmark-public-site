import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Screenshot from "@/components/Screenshot";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-base overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Screenshot />
      <Pricing />
      <FAQ />

      {/* ── CTA Section ── */}
      <section className="relative py-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-mauve/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Terminal prompt decoration */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-surface0/60 border border-surface1/60 mb-8
                          font-mono text-sm text-green">
            <span className="text-mauve">$</span>
            <span>npm install devsnippet --save-brain</span>
            <span className="w-2 h-4 bg-mauve/80 animate-pulse rounded-sm" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-text mb-6 leading-tight">
            Start saving developer<br />
            <span className="gradient-text">snippets today.</span>
          </h2>

          <p className="text-subtext0 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join developers who stopped losing useful code they found online.
            Free to install, free to start.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://chrome.google.com/webstore/detail/devsnippet/YOUR_EXTENSION_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl
                         bg-mauve text-crust font-bold text-lg
                         hover:bg-mauve/90 active:scale-95
                         transition-all duration-200 shadow-lg shadow-mauve/20
                         mauve-glow"
            >
              <ChromeIcon />
              Install Chrome Extension
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <span className="text-subtext0 text-sm">
              Free forever · No account required
            </span>
          </div>

          {/* Social proof */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8
                          text-sm text-subtext0">
            <div className="flex items-center gap-2">
              <span className="text-green text-base">✓</span>
              Works on all websites
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green text-base">✓</span>
              50 free snippets
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green text-base">✓</span>
              No signup needed
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green text-base">✓</span>
              Open source friendly
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ChromeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.9" />
      <path d="M12 8h8.5M6.5 20L10 14M17.5 20L14 14" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
