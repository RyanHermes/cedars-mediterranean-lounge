"use client";

import "hamburgers/dist/hamburgers.min.css";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
      <div className="bg-amber-700 text-white p-4 shadow-lg relative z-20">
        <div className="container mx-auto flex flex-nowrap justify-between items-center">
          <Link
            href="/"
            passHref
            className="flex items-center flex-shrink min-w-0 mr-2 overflow-hidden group"
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
            <span className="truncate text-[clamp(1rem,3.5vw,1.625rem)] font-bold transition-colors duration-300 group-hover:text-yellow-500">
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
            className={`
              lg:flex lg:items-center lg:w-auto lg:relative lg:top-auto lg:left-auto lg:right-auto lg:bg-transparent lg:shadow-none lg:z-auto lg:p-0 lg:pt-0
              ${
                isMobileMenuOpen
                  ? "block absolute top-full left-0 w-full bg-amber-800 shadow-xl z-30 p-4"
                  : "hidden pt-2"
              }
            `}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-2 space-y-2 lg:space-y-0">
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
                  href="/hall-rental"
                  className="hover:text-gray-300 block px-2 py-1"
                  onClick={closeMobileMenu}
                >
                  Hall Rental
                </Link>
              </li>
              {/* <li>
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
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
