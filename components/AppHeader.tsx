"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "hamburgers/dist/hamburgers.min.css";

export default function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative">
      {/* Overlay: now a direct child of the modified header, sibling to the content wrapper below */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
      {/* NEW content wrapper: gets the original header's styling and a z-index to sit above the overlay */}
      <div className="bg-amber-700 text-white p-4 shadow-lg relative z-20">
        {/* Original div.container and its children are now inside this new wrapper */}
        <div className="container mx-auto flex flex-nowrap justify-between items-center">
          <Link
            href="/"
            passHref
            className="flex items-center flex-shrink min-w-0 mr-2 overflow-hidden whitespace-nowrap text-ellipsis group"
            onClick={closeMobileMenu}
          >
            <div className="mr-3 flex-shrink-0">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Arms_of_Lebanon.svg/640px-Arms_of_Lebanon.svg.png"
                alt="Cedars Mediterranean Lounge Logo"
                width={40}
                height={40}
                className="transition-all duration-300 ease-in-out group-hover:scale-115 filter drop-shadow-[0_0_1px_rgba(255,255,255,0.7)] group-hover:drop-shadow-[0_0_2px_rgba(255,215,0,0.9)]"
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold transition-colors duration-300 group-hover:text-yellow-500">
              Cedar&apos;s Mediterranean Lounge
            </span>
          </Link>
          <button
            className={`block md:hidden hamburger hamburger--slider flex-shrink-0 ${
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
            className={`
              md:flex md:items-center md:w-auto md:relative md:top-auto md:left-auto md:right-auto md:bg-transparent md:shadow-none md:z-auto md:p-0
              ${
                isMobileMenuOpen
                  ? "block absolute top-full left-0 w-full bg-amber-800 shadow-xl z-30 p-4" // MODIFIED: z-index from 20 to 30
                  : "hidden pt-2 md:pt-0"
              }
            `}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-2 space-y-2 md:space-y-0">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 block px-2 py-1"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/catering"
                  className="hover:text-gray-300 block px-2 py-1"
                  onClick={closeMobileMenu}
                >
                  Catering
                </Link>
              </li>
              <li>
                <Link
                  href="/festival"
                  className="hover:text-gray-300 block px-2 py-1"
                  onClick={closeMobileMenu}
                >
                  Festival
                </Link>
              </li>
              <li>
                <Link
                  href="/special-fundraising-event"
                  className="hover:text-gray-300 block px-2 py-1"
                  onClick={closeMobileMenu}
                >
                  Fundraising
                </Link>
              </li>
              <li>
                <Link
                  href="/june-22-event"
                  passHref
                  className="bg-yellow-500 text-black text-sm md:text-base px-2 py-1 rounded hover:bg-yellow-400 block text-center md:inline whitespace-nowrap"
                  onClick={closeMobileMenu}
                >
                  <strong>Special Event: June 22nd</strong>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
