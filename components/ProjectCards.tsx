"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects, type Project } from "@/lib/data";

function ProjectImage({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();
  const images = project.gallery?.length
    ? project.gallery
    : [{ src: project.image, alt: project.imageAlt }];
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    if (reduceMotion || images.length < 2) return;

    const timer = window.setInterval(() => {
      setCurrentImage((current) => (current + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [images.length, reduceMotion]);

  return (
    <div className="px-4 pt-5 sm:px-5 sm:pt-6" aria-label={`${project.title} laptop preview`}>
      <div className="rounded-[1.1rem] border-[5px] border-[#22284d] bg-[#22284d] shadow-[0_18px_35px_rgba(0,0,0,0.32)]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[0.65rem] bg-night/50">
          {images.map((image, imageIndex) => (
            <Image
              key={image.src}
              src={image.src}
              alt={imageIndex === currentImage ? image.alt : ""}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
              aria-hidden={imageIndex !== currentImage}
              className={`object-contain transition-opacity duration-700 ${
                imageIndex === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {images.length > 1 && (
            <span className="absolute bottom-2 right-2 rounded-md bg-night/85 px-2 py-1 text-[10px] font-semibold backdrop-blur">
              {currentImage + 1}/{images.length}
            </span>
          )}
          <span className="absolute left-2 top-2 rounded-md bg-night/85 px-2 py-1 text-[10px] font-semibold backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="mx-auto h-3 w-[82%] rounded-b-[70%] bg-gradient-to-b from-[#59627e] via-[#30385c] to-[#171b38]"
      />
      <div
        aria-hidden="true"
        className="mx-auto h-1.5 w-[94%] rounded-b-lg bg-[#11142b]"
      />
    </div>
  );
}

export default function ProjectCards() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, i) => (
        <motion.li
          key={project.href}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
          whileHover={{ y: -8 }}
          className="group overflow-hidden rounded-2xl border border-line bg-panel/70 backdrop-blur transition-colors hover:border-iris"
        >
          <ProjectImage project={project} index={i} />
          <div className="px-5 pb-5 pt-4">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{project.description}</p>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-iris hover:underline"
            >
              View project
              <FaArrowUpRightFromSquare aria-hidden="true" size={12} />
            </a>
            {project.secondaryLink && (
              <a
                href={project.secondaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-fit items-center gap-2 text-sm font-semibold text-iris hover:underline"
              >
                {project.secondaryLink.label}
                <FaArrowUpRightFromSquare aria-hidden="true" size={12} />
              </a>
            )}
          </div>
        </motion.li>
      ))}
    </ul>
  );
}