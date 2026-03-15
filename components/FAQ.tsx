"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What websites does DevSnippet support?",
    a: "DevSnippet works on every website — GitHub, GitLab, StackOverflow, MDN, Dev.to, npm, PyPI, documentation sites, personal blogs, and more. If there's code on the page, DevSnippet can save it.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. Free plan snippets are stored entirely in your browser's local storage (chrome.storage.local). Pro and Cloud plan users get a local cache, so previously synced snippets are always available offline. Saving new snippets requires an internet connection on paid plans.",
  },
  {
    q: "Can I sync snippets across devices?",
    a: "Yes, with the Pro or Cloud plan. Your snippets are stored in a secure Supabase cloud database and synced to every browser where you're signed in to the extension.",
  },
  {
    q: "Is my data private?",
    a: "Absolutely. Free plan data never leaves your browser. For paid plans, your snippets are stored in a Supabase database protected by Row Level Security (RLS) — meaning only you can query your own snippets, even at the database level.",
  },
  {
    q: "Can I export my snippets?",
    a: "Export functionality is on the roadmap. For now, Free plan users can access their snippets via chrome.storage.local directly in DevTools. Paid plan users can query their Supabase table directly.",
  },
  {
    q: "What happens if I downgrade from Pro to Free?",
    a: "Your cloud snippets remain in the database and are not deleted. However, you'll only be able to save new snippets locally (up to 50). You can re-upgrade anytime to regain full access.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel anytime from your account dashboard. Your plan stays active until the end of the billing period — no surprise charges.",
  },
  {
    q: "Does DevSnippet slow down web pages?",
    a: "No. The content script is lightweight and only runs after the page is fully loaded. It uses a MutationObserver to detect code blocks on SPAs without polling. Performance impact is negligible.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-yellow text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-text mb-4">
            Common questions
          </h2>
          <p className="text-subtext0 text-lg">
            Everything you need to know before installing.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-200
                             ${isOpen
                               ? "border-mauve/30 bg-surface0/40"
                               : "border-surface0/80 bg-surface0/20 hover:border-surface1"
                             }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4
                             px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm leading-snug transition-colors
                                    ${isOpen ? "text-mauve" : "text-text"}`}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-6 h-6 rounded-full flex items-center
                                    justify-content transition-all duration-200
                                    ${isOpen
                                      ? "bg-mauve/15 text-mauve rotate-180"
                                      : "bg-surface0 text-subtext0"
                                    }`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                         className="mx-auto transition-transform duration-200">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300
                                 ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-5 pb-5 text-sm text-subtext0 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center p-6 rounded-xl border border-surface1/50
                        bg-surface0/20">
          <p className="text-subtext0 text-sm mb-3">
            Still have questions?
          </p>
          <a
            href="mailto:hello@devsnippet.app"
            className="text-mauve text-sm font-semibold hover:text-mauve/80
                       transition-colors animated-underline"
          >
            hello@devsnippet.app →
          </a>
        </div>
      </div>
    </section>
  );
}
