"use client";

import "hamburgers/dist/hamburgers.min.css";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavLink = { href: string; label: string };

const baseLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/catering", label: "Catering" },
  { href: "/hall-rental", label: "Hall Rental" },
];

export default function AppHeader({
  showFestivalLink,
}: {
  showFestivalLink: boolean;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const links: NavLink[] = showFestivalLink
    ? [...baseLinks, { href: "/festival", label: "Festival" }]
    : baseLinks;

  return (
    <header className="sticky top-0 z-30 border-b border-bone/5 bg-ink-900">
      {isMobileMenuOpen && (
        <div
          aria-hidden
          className="fixed inset-0 bg-black/60 z-10 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
      <div className="container mx-auto px-4 py-3 flex flex-nowrap justify-between items-center relative z-20">
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink min-w-0 mr-2 overflow-hidden group"
          onClick={closeMobileMenu}
        >
          <Image
            src="/assets/icons/cedar-logo.svg"
            alt=""
            width={36}
            height={36}
            className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-display truncate text-[clamp(1rem,3.5vw,1.5rem)] tracking-tight text-bone group-hover:text-gold transition-colors">
            Cedar&apos;s Mediterranean Lounge
          </span>
        </Link>

        <button
          className={`block lg:hidden hamburger hamburger--slider flex-shrink-0 ${
            isMobileMenuOpen ? "is-active" : ""
          }`}
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <nav
          id="navigation"
          className={`lg:flex lg:items-center lg:w-auto ${
            isMobileMenuOpen
              ? "block absolute top-full left-0 w-full bg-ink-900 border-b border-bone/5 shadow-xl z-30 p-4"
              : "hidden lg:block"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-1.5 text-sm font-medium text-bone-muted hover:text-gold transition-colors rounded-md"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
