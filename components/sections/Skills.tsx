import Reveal from "@/components/Reveal";
import SkillBars from "@/components/SkillBars";
import { roles } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line/60 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
            Technologies I master
          </h2>
        </Reveal>
        <SkillBars />

        <Reveal>
          <h3 className="mb-6 mt-16 text-center text-xl font-bold sm:text-2xl">
            How I work
          </h3>
        </Reveal>
        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {roles.map((role, i) => (
            <li key={role.title}>
              <Reveal
                delay={i * 0.12}
                className="h-full rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur sm:p-6"
              >
                <h4 className="text-lg font-bold sm:text-xl">{role.title}</h4>
                <p className="mt-3 font-semibold text-iris">My role is to:</p>
                <ol className="mt-2 list-inside list-decimal space-y-1 text-muted">
                  {role.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}