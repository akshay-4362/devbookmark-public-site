const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
        <polyline points="17 21 17 13 7 13 7 21"/>
        <polyline points="7 3 7 8 15 8"/>
      </svg>
    ),
    title: "Save from any website",
    description:
      "Highlight code and right-click, or use the auto-detected floating button on every code block. Works everywhere.",
    accent: "mauve",
    tag: "Core",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
    title: "Tag-based organization",
    description:
      "Add multiple tags to every snippet. Filter your library instantly by any tag — react, python, css, utils, whatever.",
    accent: "blue",
    tag: "Core",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: "Instant local search",
    description:
      "Search across snippet titles, tags, and code content simultaneously. Results appear as you type — no server round-trips.",
    accent: "teal",
    tag: "Core",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
      </svg>
    ),
    title: "One-click copy",
    description:
      "Hit Copy on any snippet card to paste it directly into your editor, terminal, or anywhere else. Zero friction.",
    accent: "green",
    tag: "Core",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/>
        <polyline points="23 20 23 14 17 14"/>
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
      </svg>
    ),
    title: "Cloud sync (Pro/Cloud)",
    description:
      "Access your snippet library from any device. Snippets are stored securely in the cloud and cached locally for speed.",
    accent: "peach",
    tag: "Pro",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Private and secure",
    description:
      "Free plan data stays 100% local in your browser. Cloud data is protected by Supabase RLS — only you can access it.",
    accent: "yellow",
    tag: "Trust",
  },
];

const accentMap = {
  mauve: { icon: "bg-mauve/10 text-mauve", border: "hover:border-mauve/40", tag: "bg-mauve/10 text-mauve" },
  blue:  { icon: "bg-blue/10 text-blue",   border: "hover:border-blue/40",  tag: "bg-blue/10 text-blue" },
  teal:  { icon: "bg-teal/10 text-teal",   border: "hover:border-teal/40",  tag: "bg-teal/10 text-teal" },
  green: { icon: "bg-green/10 text-green", border: "hover:border-green/40", tag: "bg-green/10 text-green" },
  peach: { icon: "bg-peach/10 text-peach", border: "hover:border-peach/40", tag: "bg-peach/10 text-peach" },
  yellow:{ icon: "bg-yellow/10 text-yellow",border:"hover:border-yellow/40",tag: "bg-yellow/10 text-yellow" },
};

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Everything you need
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-text mb-4">
            Built for how developers work
          </h2>
          <p className="text-subtext0 text-lg max-w-xl mx-auto">
            No bloat, no accounts needed to start. Just a fast, focused snippet tool
            that lives in your browser.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const a = accentMap[f.accent as keyof typeof accentMap];
            return (
              <div
                key={i}
                className={`glass-card p-6 transition-all duration-300 cursor-default
                            ${a.border} hover:-translate-y-0.5 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${a.icon} transition-transform
                                   group-hover:scale-110 duration-200`}>
                    {f.icon}
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold
                                    uppercase tracking-wide ${a.tag}`}>
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-text mb-2">{f.title}</h3>
                <p className="text-sm text-subtext0 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
