"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home", index: "00" },
  { href: "/destination/moon", label: "Destination", index: "01" },
  { href: "/crew/commander", label: "Crew", index: "02" },
  { href: "/technology/vehicle", label: "Technology", index: "03" },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);
  const openBtnRef = useRef(null);
  const pathname = usePathname();

  // Close nav on route change
  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  // Handle tablet+ resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsNavOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Focus trap
  useEffect(() => {
    if (!isNavOpen) return;
    const nav = navRef.current;
    if (!nav) return;
    const focusables = nav.querySelectorAll(".nav__close, .nav__link");
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsNavOpen(false);
        openBtnRef.current?.focus();
      }
      if (e.key !== "Tab") return;
      if (window.innerWidth >= 768) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    nav.addEventListener("keydown", handleKeyDown);
    return () => nav.removeEventListener("keydown", handleKeyDown);
  }, [isNavOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith("/" + href.split("/")[1]);
  };

  return (
    <header className="header relative md:flex md:items-center xl:pt-10">
      <div className="header__container mx-auto flex max-w-84 justify-between py-6 md:mx-9 md:py-0 xl:mx-15">
        <Link
          href="/"
          className="header__logo relative max-w-10 md:max-w-12"
          aria-label="Space Travel homepage"
        >
          <img src="/assets/shared/logo.svg" alt="" />
        </Link>

        <button
          ref={openBtnRef}
          type="button"
          className="nav__open cursor-pointer md:hidden"
          aria-label="Open navigation menu"
          aria-controls="mobileNav"
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen(true)}
        >
          <img src="/assets/shared/icon-hamburger.svg" alt="" />
        </button>
      </div>

      <nav
        ref={navRef}
        id="mobileNav"
        className={`nav nav--mobile fixed top-0 right-0 z-[1] h-dvh w-[68.5dvw] items-baseline backdrop-blur-2xl transition-transform duration-700 ease-in-out md:relative md:ml-auto md:h-auto md:w-auto md:translate-x-0 md:opacity-100 xl:pl-34 ${
          isNavOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        hidden={
          !isNavOpen && typeof window !== "undefined" && window.innerWidth < 768
            ? true
            : undefined
        }
        aria-hidden={
          !isNavOpen && typeof window !== "undefined" && window.innerWidth < 768
        }
      >
        <div className="mt-8 flex px-5 md:hidden">
          <button
            type="button"
            className="nav__close ml-auto cursor-pointer md:hidden"
            aria-label="Close navigation menu"
            aria-controls="mobileNav"
            onClick={() => {
              setIsNavOpen(false);
              openBtnRef.current?.focus();
            }}
          >
            <img src="/assets/shared/icon-close.svg" alt="" />
          </button>
        </div>

        <ul className="nav__list flex flex-col gap-7 pr-0 font-[barlow_condensed,_sans-serif] tracking-widest md:flex-row md:gap-12 md:py-0 md:pl-0">
          {navLinks.map(({ href, label, index }) => (
            <li key={href} className="nav__item">
              <Link
                href={href}
                className={`nav__link relative flex gap-3 uppercase md:py-8.5 md:after:top-auto md:after:bottom-0 md:after:h-[3px] md:after:w-full ${
                  isActive(href) ? "active" : ""
                }`}
                aria-current={isActive(href) ? "page" : undefined}
              >
                <span
                  className="nav__index font-semibold md:hidden xl:block"
                  aria-hidden="true"
                >
                  {index}
                </span>
                <span className="font-light">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
