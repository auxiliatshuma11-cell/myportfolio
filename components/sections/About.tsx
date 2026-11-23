"use client";

import { motion } from "motion/react";
import Reveal from "@/components/Reveal";
import StatsGrid from "@/components/StatsGrid";
import { aboutParagraphs } from "@/lib/data";

function AnimatedWords({
  text,
  baseDelay = 0,
  className,
}: {
  text: string;
  baseDelay?: number;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.035,
            delayChildren: baseDelay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.42, ease: "easeOut" },
            },
          }}
          className="inline-block"
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function About() {
  return (
    <section id="about" className="border-t border-line/60 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-2 md:gap-10">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">
            <AnimatedWords text="I’m passionate about creating digital solutions" />
          </h2>
          <div className="mt-5 max-w-prose space-y-4 text-sm text-muted sm:text-base">
            {aboutParagraphs.map((text, index) => (
              <p key={text}>
                <AnimatedWords text={text} baseDelay={0.08 + index * 0.04} />
              </p>
            ))}
          </div>
        </Reveal>
        <StatsGrid />
      </div>
    </section>
  );
}