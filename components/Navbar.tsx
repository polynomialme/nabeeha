"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

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
          <button
            onClick={toggleDark}
            className="text-silk/70 hover:text-gold transition-colors p-1"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleDark}
            className="text-silk/70 hover:text-gold transition-colors p-1"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
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
