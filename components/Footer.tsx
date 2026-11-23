import { socials } from "@/lib/socials";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-night/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold">Auxilia Tshuma</p>
          <p className="text-sm text-muted">
            Junior Software Developer &amp; Designer
          </p>
        </div>
        <div className="flex flex-col gap-5 md:items-end">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm font-semibold text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-3">
            {socials.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-iris hover:text-iris"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-line/70 py-4 text-center text-sm text-muted">
        © 2026 Auxilia Tshuma. All rights reserved.
      </p>
    </footer>
  );
}