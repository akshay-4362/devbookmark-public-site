"use client";

// ── Update with your actual Chrome Web Store URL ───────────────────────────────
const CHROME_EXTENSION_URL =
  "https://chrome.google.com/webstore/detail/devsnippet/YOUR_EXTENSION_ID";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center
                        pt-20 pb-16 px-6 overflow-hidden hero-gradient grid-pattern">
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-mauve/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-32 w-80 h-80 bg-blue/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-teal/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                        bg-mauve/10 border border-mauve/20 mb-8
                        text-mauve text-sm font-medium animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-mauve animate-pulse-slow" />
          Chrome Extension · Manifest V3 · Free to install
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.08]
                       tracking-tight text-text mb-6 animate-fade-up">
          Stop losing useful<br />
          <span className="gradient-text">code snippets.</span>
        </h1>

        {/* Subheading */}
        <p className="text-subtext0 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto
                      mb-10 leading-relaxed animate-fade-up"
           style={{ animationDelay: "0.1s" }}>
          Save, organize, and search developer snippets instantly from any website —
          GitHub, docs, StackOverflow, blogs, and more.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16
                        animate-fade-up"
             style={{ animationDelay: "0.2s" }}>
          <a
            href={CHROME_EXTENSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl
                       bg-mauve text-crust font-bold text-base
                       hover:bg-mauve/90 active:scale-95 transition-all duration-200
                       shadow-xl shadow-mauve/25 mauve-glow"
          >
            <ChromeIcon />
            Install Chrome Extension
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl
                       border border-surface1 text-subtext1 font-semibold text-base
                       hover:bg-surface0/60 hover:text-text active:scale-95
                       transition-all duration-200"
          >
            View Features
          </a>
        </div>

        {/* Extension UI Mockup */}
        <div className="animate-float max-w-sm mx-auto" style={{ animationDelay: "0.3s" }}>
          <ExtensionMockup />
        </div>

        {/* Supported sites */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3
                        text-sm text-overlay0 animate-fade-in"
             style={{ animationDelay: "0.5s" }}>
          <span className="text-surface2 text-xs uppercase tracking-widest font-semibold">
            Works on
          </span>
          {["GitHub", "StackOverflow", "MDN Docs", "Dev.to", "npm", "Any site"].map((site) => (
            <span key={site} className="text-subtext0 hover:text-text transition-colors">
              {site}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Extension UI Mockup Component ─────────────────────────────────────────── */

function ExtensionMockup() {
  return (
    <div className="relative glass-card shadow-2xl shadow-crust/60 overflow-hidden w-80">
      {/* Popup header */}
      <div className="bg-crust px-4 py-3 flex items-center justify-between
                      border-b border-surface0">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-black text-mauve">⟨/⟩</span>
          <span className="text-sm font-bold text-text">DevSnippet</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface0
                         text-subtext0 font-semibold uppercase tracking-wide">
          Free
        </span>
      </div>

      {/* Search bar */}
      <div className="px-3 pt-3 pb-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface0
                        border border-surface1/60">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
               className="text-overlay0 shrink-0">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span className="text-xs text-overlay0 font-mono">Search snippets…</span>
        </div>
      </div>

      {/* Snippet cards */}
      <div className="px-3 pb-3 flex flex-col gap-2">
        <SnippetCard
          title="useFetch hook"
          tags={["react", "hooks"]}
          domain="github.com"
          code={`const useFetch = (url) => {\n  const [data, setData] = useState(null);\n  useEffect(() => {\n    fetch(url).then(r => r.json())\n      .then(setData);\n  }, [url]);\n  return data;\n};`}
          accent="mauve"
        />
        <SnippetCard
          title="Debounce utility"
          tags={["js", "utils"]}
          domain="stackoverflow.com"
          code={`function debounce(fn, delay) {\n  let t;\n  return (...args) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...args), delay);\n  };\n}`}
          accent="blue"
        />
      </div>
    </div>
  );
}

function SnippetCard({
  title, tags, domain, code, accent,
}: {
  title: string;
  tags: string[];
  domain: string;
  code: string;
  accent: "mauve" | "blue";
}) {
  const accentColors = {
    mauve: { tag: "bg-mauve/10 text-mauve border-mauve/20", dot: "bg-mauve" },
    blue:  { tag: "bg-blue/10 text-blue border-blue/20",    dot: "bg-blue" },
  };
  const c = accentColors[accent];

  return (
    <div className="bg-base rounded-xl border border-surface0 overflow-hidden">
      <div className="px-3 pt-2.5 pb-2">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-semibold text-text">{title}</span>
          <button className="text-[10px] px-1.5 py-0.5 rounded bg-surface0
                             text-subtext0 hover:text-text transition-colors">
            Copy
          </button>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[9px] text-overlay0 bg-surface0 px-1.5 py-0.5 rounded">
            🌐 {domain}
          </span>
          <div className="flex gap-1">
            {tags.map((t) => (
              <span key={t}
                    className={`text-[9px] px-1.5 py-0.5 rounded-full border
                                font-semibold ${c.tag}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-crust border-t border-surface0 px-3 py-2">
        <pre className="text-[9px] font-mono text-green leading-4 overflow-hidden
                        line-clamp-3 whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
}

function ChromeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path d="M12 8h8.5M6.5 20L10 14M17.5 20L14 14"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
