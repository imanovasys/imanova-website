"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href.replace(/\/$/, ""));

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface/80 glass-header border-b border-outline-variant transition-all duration-300 ${
        scrolled ? "py-2 shadow-sm bg-surface/95" : "py-4"
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Imanova Systems Logo"
            className="h-10 w-auto"
            src={siteConfig.logoUrl}
          />
          <span className="font-display text-2xl tracking-tight text-on-surface leading-none hidden lg:block">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "font-label text-sm text-primary font-bold border-b-2 border-primary pb-1"
                  : "font-label text-sm text-on-surface-variant hover:text-primary transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us/"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="lg:hidden p-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="material-symbols-outlined text-on-surface text-3xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t border-outline-variant bg-surface px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "font-label text-sm text-primary font-bold"
                  : "font-label text-sm text-on-surface-variant"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us/"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label text-sm font-semibold text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
