import ProjectCards from "@/components/ProjectCards";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line/60 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
            Some of my recent work
          </h2>
        </Reveal>
        <ProjectCards />
      </div>
    </section>
  );
}