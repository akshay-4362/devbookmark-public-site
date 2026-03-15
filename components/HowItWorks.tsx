export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      ),
      title: "Highlight code on any website",
      description:
        "Select any code snippet on GitHub, StackOverflow, documentation pages, or any other site.",
      code: `// Select this code anywhere on the web
const greet = (name) => \`Hello, \${name}!\`;`,
      accent: "mauve",
    },
    {
      number: "02",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
          <polyline points="17 21 17 13 7 13 7 21"/>
          <polyline points="7 3 7 8 15 8"/>
        </svg>
      ),
      title: "Click \"Save Snippet\"",
      description:
        "Right-click → \"Save as DevSnippet\", or use the floating button that appears on code blocks. Add a title and tags.",
      code: `// Right-click → Save as DevSnippet
// OR click 💾 on any code block
title: "Greet function"
tags: ["js", "utils"]`,
      accent: "blue",
    },
    {
      number: "03",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      ),
      title: "Search and reuse later",
      description:
        "Open the DevSnippet popup, search by title, tag, or code content. Copy in one click.",
      code: `// Search your saved snippets
> greet
> react hooks
> python async
// Copy → paste → ship faster ✓`,
      accent: "teal",
    },
  ];

  const accentMap = {
    mauve: {
      number: "text-mauve",
      border:  "border-mauve/30",
      bg:      "bg-mauve/8",
      icon:    "text-mauve bg-mauve/10",
      code:    "text-mauve/80",
      glow:    "shadow-mauve/10",
    },
    blue: {
      number: "text-blue",
      border:  "border-blue/30",
      bg:      "bg-blue/8",
      icon:    "text-blue bg-blue/10",
      code:    "text-blue/80",
      glow:    "shadow-blue/10",
    },
    teal: {
      number: "text-teal",
      border:  "border-teal/30",
      bg:      "bg-teal/8",
      icon:    "text-teal bg-teal/10",
      code:    "text-teal/80",
      glow:    "shadow-teal/10",
    },
  };

  return (
    <section id="how-it-works" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-mauve text-sm font-semibold uppercase tracking-widest mb-3">
            Simple workflow
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-text mb-4">
            How it works
          </h2>
          <p className="text-subtext0 text-lg max-w-xl mx-auto">
            Three steps from finding useful code to having it saved and searchable forever.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const a = accentMap[step.accent as keyof typeof accentMap];
            return (
              <div key={i}
                   className={`relative glass-card p-6 shadow-xl ${a.glow}
                               hover:border-surface1 transition-all duration-300
                               group hover:-translate-y-1`}>
                {/* Step number */}
                <div className={`font-mono text-5xl font-black ${a.number} opacity-15
                                 absolute top-5 right-5 leading-none select-none`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${a.icon} mb-5`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-text mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-subtext0 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Code snippet illustration */}
                <div className={`rounded-lg border ${a.border} ${a.bg} p-3 overflow-hidden`}>
                  <pre className={`font-mono text-xs leading-5 ${a.code} whitespace-pre-wrap`}>
                    {step.code}
                  </pre>
                </div>

                {/* Connector arrow (not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2
                                  z-10 text-surface1 text-2xl select-none">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
