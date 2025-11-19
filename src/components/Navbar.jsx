import { Menu, Bot, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Workflows", href: "#workflows" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "https://www.altheo.org", external: true },
  ];

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 flex items-center justify-center shadow-lg shadow-purple-500/20 ring-1 ring-white/10">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">Altheo</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-sm text-slate-200/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm transition">
            <Sparkles className="h-4 w-4" />
            Try the Agent
          </a>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-white/10 p-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="block px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-center">Try the Agent</a>
        </div>
      )}
    </header>
  );
}
