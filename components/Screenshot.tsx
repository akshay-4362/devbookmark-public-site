"use client";

import { useState } from "react";

const snippets = [
  {
    id: 1,
    title: "useFetch custom hook",
    tags: ["react", "hooks", "async"],
    domain: "github.com",
    date: "12 Mar",
    code: `const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); });
  }, [url]);

  return { data, loading };
};`,
    accent: "mauve",
  },
  {
    id: 2,
    title: "Debounce function",
    tags: ["javascript", "utils", "performance"],
    domain: "stackoverflow.com",
    date: "11 Mar",
    code: `function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}`,
    accent: "blue",
  },
  {
    id: 3,
    title: "Python async retry",
    tags: ["python", "async", "error-handling"],
    domain: "docs.python.org",
    date: "10 Mar",
    code: `async def retry(fn, retries=3, delay=1):
    for attempt in range(retries):
        try:
            return await fn()
        except Exception as e:
            if attempt == retries - 1:
                raise
            await asyncio.sleep(delay * (attempt + 1))`,
    accent: "teal",
  },
];

const accentMap = {
  mauve: {
    tag:  "bg-mauve/10 text-mauve border-mauve/20",
    code: "text-mauve/90",
    bar:  "bg-mauve",
  },
  blue: {
    tag:  "bg-blue/10 text-blue border-blue/20",
    code: "text-blue/90",
    bar:  "bg-blue",
  },
  teal: {
    tag:  "bg-teal/10 text-teal border-teal/20",
    code: "text-teal/90",
    bar:  "bg-teal",
  },
};

export default function Screenshot() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState<number | null>(null);

  function handleCopy(id: number) {
    setCopied(id);
    setTimeout(() => setCopied(null), 1600);
  }

  const snippet = snippets[active];
  const a = accentMap[snippet.accent as keyof typeof accentMap];

  return (
    <section id="screenshot" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-mauve/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">
            See it in action
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-text mb-4">
            Your snippet dashboard
          </h2>
          <p className="text-subtext0 text-lg max-w-xl mx-auto">
            A clean, fast interface right in your browser toolbar. No new tabs, no friction.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Left: full popup mockup */}
          <div className="glass-card shadow-2xl shadow-crust/70 overflow-hidden w-full max-w-xs
                          mx-auto lg:mx-0 shrink-0">
            {/* Header */}
            <div className="bg-crust px-4 py-3 flex items-center justify-between
                            border-b border-surface0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-base font-black text-mauve">⟨/⟩</span>
                <span className="text-sm font-bold text-text">DevSnippet</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-6 h-6 rounded flex items-center justify-center
                                   bg-surface0 text-subtext0 hover:text-text transition-colors">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="1 4 1 10 7 10"/>
                    <polyline points="23 20 23 14 17 14"/>
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
                  </svg>
                </button>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface0
                                 text-subtext0 font-semibold uppercase tracking-wide">
                  Free
                </span>
              </div>
            </div>

            {/* Search */}
            <div className="px-3 pt-3 pb-1">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg
                              bg-surface0 border border-surface1/50">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                     className="text-overlay0 shrink-0">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <span className="text-xs text-overlay0 font-mono">Search snippets…</span>
              </div>
              <div className="flex justify-between text-[10px] text-overlay0 px-0.5 mt-1.5 mb-1">
                <span>3 snippets</span>
                <span>3 / 50</span>
              </div>
            </div>

            {/* Snippet tabs */}
            <div className="px-3 pb-3 flex flex-col gap-1.5">
              {snippets.map((s, i) => {
                const sa = accentMap[s.accent as keyof typeof accentMap];
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={`w-full text-left rounded-xl border overflow-hidden
                                transition-all duration-200
                                ${isActive
                                  ? "border-surface1 bg-base shadow-md"
                                  : "border-surface0/60 bg-transparent hover:bg-surface0/30"
                                }`}
                  >
                    <div className="px-3 pt-2 pb-1.5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-semibold text-text truncate max-w-[140px]">
                          {s.title}
                        </span>
                        {isActive && (
                          <button
                            onClick={(e) => { e.stopPropagation(); handleCopy(s.id); }}
                            className={`text-[9px] px-1.5 py-0.5 rounded transition-colors
                                        ${copied === s.id
                                          ? "bg-green/20 text-green"
                                          : "bg-surface0 text-subtext0"
                                        }`}
                          >
                            {copied === s.id ? "✓ Copied" : "Copy"}
                          </button>
                        )}
                      </div>
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-[9px] text-overlay0 bg-surface0
                                         px-1.5 py-0.5 rounded">
                          🌐 {s.domain}
                        </span>
                        {s.tags.slice(0, 2).map((t) => (
                          <span key={t}
                                className={`text-[9px] px-1.5 py-0.5 rounded-full border
                                            font-semibold ${sa.tag}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {isActive && (
                      <div className="bg-crust border-t border-surface0 px-3 py-2">
                        <pre className={`text-[9px] font-mono leading-[1.5]
                                         whitespace-pre-wrap ${sa.code}
                                         line-clamp-3 overflow-hidden`}>
                          {s.code}
                        </pre>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: expanded snippet detail */}
          <div className="flex-1 max-w-lg w-full">
            <div className="glass-card p-6 shadow-xl">
              {/* Snippet header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text mb-1">{snippet.title}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-overlay0 bg-surface0 px-2 py-0.5 rounded">
                      🌐 {snippet.domain}
                    </span>
                    <span className="text-xs text-overlay0">{snippet.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(snippet.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                               text-xs font-semibold transition-all duration-200 shrink-0
                               ${copied === snippet.id
                                 ? "bg-green/20 text-green border border-green/30"
                                 : "bg-surface0 text-subtext0 border border-surface1 hover:text-text"
                               }`}
                >
                  {copied === snippet.id ? (
                    <>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <rect x="9" y="9" width="13" height="13" rx="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                      Copy Code
                    </>
                  )}
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {snippet.tags.map((t) => (
                  <span key={t}
                        className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${a.tag}`}>
                    #{t}
                  </span>
                ))}
              </div>

              {/* Code block */}
              <div className="code-block">
                <pre className="text-green text-xs leading-5 whitespace-pre overflow-x-auto">
                  {snippet.code}
                </pre>
              </div>

              {/* Snippet selector */}
              <div className="flex gap-2 mt-5">
                {snippets.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={`h-1 rounded-full transition-all duration-300
                                ${i === active
                                  ? `w-8 ${accentMap[s.accent as keyof typeof accentMap].bar}`
                                  : "w-3 bg-surface1 hover:bg-surface2"
                                }`}
                  />
                ))}
              </div>
            </div>

            {/* Callout */}
            <div className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl
                            bg-surface0/40 border border-surface1/40 text-sm text-subtext0">
              <span className="text-mauve">💡</span>
              Snippets are saved with source URL, so you can always trace back where you found the code.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
