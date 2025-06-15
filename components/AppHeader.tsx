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
    <header className="bg-amber-700 text-white p-4 shadow-lg relative z-30">
      <div className="container mx-auto flex flex-nowrap justify-between items-center">
        <Link
          href="/"
          className="flex items-center flex-shrink min-w-0 mr-2 overflow-hidden whitespace-nowrap text-ellipsis group"
          onClick={closeMobileMenu}
        >
          <div className="mr-3 flex-shrink-0">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Arms_of_Lebanon.svg/640px-Arms_of_Lebanon.svg.png"
              alt="Cedars Mediterranean Lounge Logo"
              width={40}
              height={40}
              layout="intrinsic"
              objectFit="contain"
              className="transition-all duration-300 ease-in-out group-hover:scale-115 filter drop-shadow-[0_0_1px_rgba(255,255,255,0.7)] group-hover:drop-shadow-[0_0_2px_rgba(255,215,0,0.9)]"
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold transition-colors duration-300 group-hover:text-yellow-500">
            Cedars Mediterranean Lounge
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
                ? "block absolute top-full left-0 w-full bg-amber-800 shadow-xl z-20 p-4"
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
                href="/pre-festival-event"
                className="bg-yellow-500 text-black text-sm md:text-base px-2 py-1 rounded hover:bg-yellow-400 block text-center md:inline whitespace-nowrap"
                onClick={closeMobileMenu}
              >
                <strong>Special Event: June 22nd!</strong>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
