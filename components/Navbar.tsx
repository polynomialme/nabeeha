"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sapphire/95 dark:bg-midnight/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-gold font-bold text-lg italic" style={{ fontFamily: "var(--font-playfair), 'Times New Roman', serif" }}>NA</a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-silk/70 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-1.5 bg-ruby text-white rounded-lg hover:bg-ruby-light transition-colors"
          >
            Contact Me
          </a>

          {/* Dark/Light toggle pill */}
          <button
            onClick={toggleDark}
            className="relative flex items-center w-16 h-8 rounded-full bg-midnight/50 dark:bg-gold/20 border border-gold/30 transition-colors"
            aria-label="Toggle dark mode"
          >
            <span className="absolute left-1 text-xs">☀️</span>
            <span className="absolute right-1 text-xs">🌙</span>
            <span
              className={`absolute top-0.5 w-7 h-7 rounded-full bg-gold shadow-md transition-transform duration-300 ${dark ? "translate-x-8" : "translate-x-0.5"}`}
            />
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleDark}
            className="relative flex items-center w-14 h-7 rounded-full bg-midnight/50 dark:bg-gold/20 border border-gold/30 transition-colors"
            aria-label="Toggle dark mode"
          >
            <span className="absolute left-1 text-[10px]">☀️</span>
            <span className="absolute right-1 text-[10px]">🌙</span>
            <span
              className={`absolute top-0.5 w-6 h-6 rounded-full bg-gold shadow-md transition-transform duration-300 ${dark ? "translate-x-7" : "translate-x-0.5"}`}
            />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-silk/70 hover:text-gold transition-colors p-1"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-sapphire dark:bg-midnight border-t border-gold/20 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-silk/70 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-sm text-gold">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
