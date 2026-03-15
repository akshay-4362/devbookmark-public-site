"use client";

// ── Update with your Chrome Web Store URL ─────────────────────────────────────
const CHROME_EXTENSION_URL =
  "https://chrome.google.com/webstore/detail/devsnippet/YOUR_EXTENSION_ID";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started. No account required.",
    cta: "Install Free",
    ctaHref: CHROME_EXTENSION_URL,
    ctaExternal: true,
    featured: false,
    accent: "surface",
    features: [
      { text: "50 snippets",            included: true  },
      { text: "Local browser storage",  included: true  },
      { text: "Tag organization",       included: true  },
      { text: "Instant search",         included: true  },
      { text: "One-click copy",         included: true  },
      { text: "Cloud sync",             included: false },
      { text: "Multi-device access",    included: false },
      { text: "Automatic backup",       included: false },
    ],
  },
  {
    name: "Pro",
    price: "₹99",
    period: "/month",
    description: "For developers who save snippets daily and need cloud sync.",
    cta: "Start Pro",
    ctaHref: "#",     // Link to your payment page
    ctaExternal: false,
    featured: true,
    accent: "mauve",
    badge: "Most Popular",
    features: [
      { text: "500 snippets",           included: true },
      { text: "Cloud storage",          included: true },
      { text: "Tag organization",       included: true },
      { text: "Instant search",         included: true },
      { text: "One-click copy",         included: true },
      { text: "Cloud sync",             included: true },
      { text: "Multi-device access",    included: true },
      { text: "Automatic backup",       included: false },
    ],
  },
  {
    name: "Cloud",
    price: "₹499",
    period: "/month",
    description: "Unlimited power for teams and heavy snippet collectors.",
    cta: "Start Cloud",
    ctaHref: "#",     // Link to your payment page
    ctaExternal: false,
    featured: false,
    accent: "teal",
    features: [
      { text: "Unlimited snippets",     included: true },
      { text: "Cloud storage",          included: true },
      { text: "Tag organization",       included: true },
      { text: "Instant search",         included: true },
      { text: "One-click copy",         included: true },
      { text: "Cloud sync",             included: true },
      { text: "Multi-device access",    included: true },
      { text: "Automatic backup",       included: true },
    ],
  },
];

const accentStyles = {
  surface: {
    card:    "border-surface1/60 bg-surface0/30",
    badge:   "",
    cta:     "bg-surface0 text-text border border-surface1 hover:bg-surface1",
    heading: "text-text",
    price:   "text-text",
    check:   "text-green",
    cross:   "text-surface2",
  },
  mauve: {
    card:    "border-mauve/40 bg-gradient-to-b from-mauve/8 to-surface0/40",
    badge:   "bg-mauve text-crust",
    cta:     "bg-mauve text-crust hover:bg-mauve/90 shadow-lg shadow-mauve/20",
    heading: "text-mauve",
    price:   "gradient-text",
    check:   "text-mauve",
    cross:   "text-surface2",
  },
  teal: {
    card:    "border-teal/30 bg-gradient-to-b from-teal/6 to-surface0/40",
    badge:   "",
    cta:     "bg-teal/10 text-teal border border-teal/30 hover:bg-teal/20",
    heading: "text-teal",
    price:   "text-teal",
    check:   "text-teal",
    cross:   "text-surface2",
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[700px] h-[400px] bg-mauve/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-mauve text-sm font-semibold uppercase tracking-widest mb-3">
            Simple pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-text mb-4">
            Choose your plan
          </h2>
          <p className="text-subtext0 text-lg max-w-xl mx-auto">
            Start free, upgrade when you need more. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const a = accentStyles[plan.accent as keyof typeof accentStyles];
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 transition-all duration-300
                             ${a.card}
                             ${plan.featured ? "scale-[1.02] shadow-2xl shadow-mauve/15" : ""}
                             hover:-translate-y-1`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2
                                   px-4 py-1 rounded-full text-xs font-bold
                                   ${a.badge}`}>
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <div className={`text-sm font-bold uppercase tracking-widest mb-2 ${a.heading}`}>
                  {plan.name}
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-4xl font-black ${a.price}`}>{plan.price}</span>
                  <span className="text-subtext0 text-sm mb-1">{plan.period}</span>
                </div>

                <p className="text-subtext0 text-sm leading-relaxed mb-7">
                  {plan.description}
                </p>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  target={plan.ctaExternal ? "_blank" : undefined}
                  rel={plan.ctaExternal ? "noopener noreferrer" : undefined}
                  className={`block w-full text-center py-3 px-4 rounded-xl
                               font-bold text-sm transition-all duration-200
                               active:scale-95 mb-7 ${a.cta}`}
                >
                  {plan.cta}
                </a>

                {/* Divider */}
                <div className="border-t border-surface1/50 mb-5" />

                {/* Feature list */}
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5">
                      {f.included ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                             className={`shrink-0 ${a.check}`}
                             stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                             className={`shrink-0 ${a.cross}`}
                             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      )}
                      <span className={`text-sm ${f.included ? "text-subtext1" : "text-surface2"}`}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="text-center text-overlay0 text-sm mt-8">
          All prices in INR · GST applicable · Secure payments via Razorpay
        </p>
      </div>
    </section>
  );
}
