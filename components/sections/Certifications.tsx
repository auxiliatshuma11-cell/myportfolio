import Reveal from "@/components/Reveal";
import { certifications } from "@/lib/data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-line/60 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
            Certifications
          </h2>
        </Reveal>
        {certifications.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <li
                key={certification.href}
                className="rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur sm:p-6"
              >
                <h3 className="text-lg font-bold">{certification.title}</h3>
                {certification.issuer && (
                  <p className="mt-2 text-muted">{certification.issuer}</p>
                )}
                {certification.date && (
                  <p className="mt-1 text-sm text-muted">{certification.date}</p>
                )}
                <a
                  href={certification.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-iris hover:underline"
                >
                  View certificate
                  <FaArrowUpRightFromSquare aria-hidden="true" size={12} />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-2xl border border-line bg-panel/70 p-6 text-center text-muted">
            My certificates will appear here soon.
          </p>
        )}
      </div>
    </section>
  );
}
