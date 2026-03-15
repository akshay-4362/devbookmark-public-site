import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevSnippet – Developer Snippet Manager",
  description:
    "Save, organize, and search code snippets from any website instantly. A Chrome extension built for developers.",
  keywords: [
    "code snippets",
    "developer tool",
    "chrome extension",
    "snippet manager",
    "github",
    "stackoverflow",
  ],
  openGraph: {
    title: "DevSnippet – Developer Snippet Manager",
    description: "Save and organize code snippets from any website instantly.",
    type: "website",
    // Update with your actual domain:
    url: "https://devsnippet.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSnippet – Developer Snippet Manager",
    description: "Save and organize code snippets from any website instantly.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e1e2e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
