"use client";

import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa6";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("home");

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-night/70 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 text-lg font-bold"
        >
          <FaCode aria-hidden="true" className="text-iris" />
          Auxilia Tshuma
        </a>

        <ul
          id="nav-menu"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-line/70 bg-night/95 p-4 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "text-iris" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="md:hidden">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-iris-gradient px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Hire me
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-iris-gradient px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110 md:inline-block"
        >
          Hire me
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg border border-line px-3 py-1.5 text-sm font-semibold md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
    </header>
  );
}