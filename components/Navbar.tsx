
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import CTA from "./ui/CTA";

const NavLinks = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Experiences",
    href: "/experiences",
  },
  {
    label: "Register",
    href: "/register",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const getLinkStyle = (href: string, mobile = false) => {
    const isActive =
      pathname === href || pathname.startsWith(`${href}/`);

    if (scrolled) {
      return isActive
        ? "text-brown-600 font-bold"
        : "text-brown-900 hover:text-brown-600 font-semibold";
    }

    if (mobile) {
      return isActive
        ? "text-brown-600 font-bold"
        : "text-brown-900 hover:text-brown-600 font-semibold";
    }

    return isActive
      ? "text-white font-bold"
      : "text-white/80 hover:text-white font-semibold";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 w-full transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-background shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="flex h-17.5 items-center justify-between px-4 sm:px-6 lg:px-10"
        aria-label="Main navigation"
      >
        <Link
          href="/home"
          className="flex shrink-0 items-center gap-2"
          aria-label="UHIP 2026 Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brown-900 text-[22px] font-bold text-gold-600">
            U
          </div>

          <p
            className={`whitespace-nowrap font-sans text-lg font-semibold transition-colors duration-300 sm:text-xl ${
              scrolled || menuOpen ? "text-foreground" : "text-white"
            }`}
          >
            UHIP 2026
          </p>
        </Link>

        <div className="hidden flex-5 items-center justify-center gap-8 lg:flex xl:gap-12">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                pathname === link.href ? "page" : undefined
              }
              className={`${getLinkStyle(
                link.href
              )} whitespace-nowrap font-sans text-base transition-colors duration-300`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden flex-1 justify-end lg:flex">
          <CTA btnText="Buy Ticket" />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-black/5 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled || menuOpen ? "bg-foreground" : "bg-white"
              } ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled || menuOpen ? "bg-foreground" : "bg-white"
              } ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />

            <span
              className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled || menuOpen ? "bg-foreground" : "bg-white"
              } ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-border/60 bg-background transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-112.5 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col gap-1 px-4 pb-6 pt-3 sm:px-6">
          {NavLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-4 py-3 font-sans text-base transition-colors ${
                  getLinkStyle(link.href, true)
                } ${
                  isActive ? "bg-black/5" : "hover:bg-black/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="mt-3 w-full">
            <CTA btnText="Buy Ticket" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
