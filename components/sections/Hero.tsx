"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import Reveal from "@/components/Reveal";
import TechIcons from "@/components/TechIcons";
import TypingText from "@/components/TypingText";

const ROLES: string[] = ["full-stack software engineer"];

const codeCard = `const developer = {
  name: "Auxilia",
  role: "Full-stack software engineer",
  passion: "Building for the web",
};`;

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-12 md:py-24"
    >
      <div className="order-2 md:order-1">
        <Reveal y={20}>
          <p className="inline-block rounded-md border border-line bg-panel/70 px-3 py-1 text-sm font-semibold text-iris">
            Full-stack software engineer
          </p>
        </Reveal>
        <Reveal delay={0.1} y={20}>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Hi, I&rsquo;m <span className="text-iris">Auxilia</span>
            <br />
            <span className="text-2xl font-bold sm:text-4xl md:text-5xl">
              I build things for the web.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.2} y={20}>
          <p className="mt-5 min-h-8 text-lg font-semibold sm:text-xl">
            I am a{" "}
            <span className="text-iris">
              <TypingText words={ROLES} />
            </span>
          </p>
          <p className="mt-3 max-w-md text-base text-muted sm:text-lg">
            Building full-stack web applications from front to back.
          </p>
        </Reveal>
        <Reveal delay={0.3} y={20}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-iris-gradient px-6 py-3 font-semibold text-white"
            >
              View my work
              <FaArrowRight aria-hidden="true" />
            </motion.a>
            <motion.a
              href="/Tshuma_Auxilia_Chilongezyo_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-6 py-3 font-semibold transition-colors hover:bg-panel"
            >
              Download CV
              <FaDownload aria-hidden="true" />
            </motion.a>
          </div>
        </Reveal>
        <Reveal delay={0.4} y={20}>
          <p className="mt-10 text-sm font-semibold text-muted">
            Technologies I work with
          </p>
          <div className="mt-3">
            <TechIcons />
          </div>
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto order-1 h-64 w-64 sm:h-80 sm:w-80 md:order-2 md:h-96 md:w-96"
      >
        {/* Slowly rotating dashed orbit */}
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-5 rounded-full border border-dashed border-iris/50"
        />

        {/* Photo, gently floating */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full rounded-full bg-iris-gradient p-1.5 shadow-[0_0_80px_rgba(139,108,255,0.45)]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-panel">
            <Image
              src="/IMG/profile.jpeg"
              alt="Portrait of Auxilia Tshuma"
              fill
              priority
              sizes="(min-width: 768px) 384px, 288px"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Code card, floating the other way */}
        <motion.pre
          aria-hidden="true"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -right-2 hidden rounded-xl border border-line bg-panel/90 p-3 font-mono text-[10px] leading-relaxed text-muted backdrop-blur sm:-right-4 sm:block md:-right-12 md:p-4 md:text-xs lg:-right-16"
        >
          {codeCard}
        </motion.pre>
      </motion.div>
    </section>
  );
}