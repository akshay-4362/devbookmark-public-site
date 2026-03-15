export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface0/80 bg-crust">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xl font-black text-mauve">⟨/⟩</span>
              <span className="font-bold text-text">DevSnippet</span>
            </div>
            <p className="text-sm text-subtext0 leading-relaxed">
              Save and organize code snippets from any website instantly.
              Built for developers who are tired of losing useful code.
            </p>
            {/* Mini code block */}
            <div className="mt-4 px-3 py-2 rounded-lg bg-base border border-surface0
                            font-mono text-xs text-green inline-block">
              <span className="text-overlay0">$</span> devsnippet --save
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-subtext0 mb-4">
                Product
              </h4>
              <ul className="space-y-2.5">
                {[
                  ["Features", "#features"],
                  ["How it works", "#how-it-works"],
                  ["Pricing", "#pricing"],
                  ["FAQ", "#faq"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href}
                       className="text-sm text-overlay0 hover:text-text transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-subtext0 mb-4">
                Install
              </h4>
              <ul className="space-y-2.5">
                {[
                  ["Chrome Extension", "https://chrome.google.com/webstore"],
                  ["GitHub", "https://github.com/"],
                  ["Changelog", "#"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-sm text-overlay0 hover:text-text transition-colors
                                  inline-flex items-center gap-1">
                      {label}
                      {href.startsWith("http") && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-subtext0 mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {[
                  ["Privacy Policy", "#"],
                  ["Terms of Service", "#"],
                  ["Refund Policy", "#"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href}
                       className="text-sm text-overlay0 hover:text-text transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-surface0/60
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-overlay0">
            © {year} DevSnippet. Built with ❤️ for developers.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@devsnippet.app"
              className="text-xs text-overlay0 hover:text-text transition-colors"
            >
              hello@devsnippet.app
            </a>
            <div className="flex items-center gap-1 text-xs text-overlay0">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-slow" />
              All systems normal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
