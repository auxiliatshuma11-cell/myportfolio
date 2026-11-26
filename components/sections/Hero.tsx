"use client";

import { motion } from "motion/react";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import Reveal from "@/components/Reveal";
import TechIcons from "@/components/TechIcons";
import TypingText from "@/components/TypingText";

const ROLES: string[] = ["full-stack software engineer"];

const codeCard = `const developer = {
  name: "Auxilia Tshuma",
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
            Hi, I&rsquo;m <span className="text-iris">Auxilia Tshuma</span>
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
              href="/Tshuma_Auxilia_Chilongezyo_CV_styled.pdf"
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
        className="relative mx-auto order-1 w-[17rem] sm:w-[22rem] md:order-2 md:w-[26rem]"
      >
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full border border-dashed border-iris/40 sm:h-72 sm:w-72 md:h-80 md:w-80"
        />

        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div
            aria-label="Laptop profile"
            className="relative mx-auto w-[88%] rounded-t-[1.15rem] border-[6px] border-b-0 border-[#1a2147] bg-[#050818] p-2 shadow-[0_0_55px_rgba(139,108,255,0.38)]"
          >
            <div className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-muted/70" />
            <div className="mt-1 flex h-32 items-center justify-center overflow-hidden rounded-t-lg border border-line/70 bg-gradient-to-br from-[#11183d] to-[#090d25] sm:h-36 md:h-44">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-iris-gradient text-3xl font-black text-white shadow-[0_0_32px_rgba(139,108,255,0.55)] sm:h-24 sm:w-24 sm:text-4xl">
                AT
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[#090d25] bg-emerald-400" />
              </div>
            </div>
          </div>

          <div className="mx-auto h-3 w-full rounded-b-[1.1rem] border-t border-[#343d73] bg-gradient-to-b from-[#59618f] via-[#242a55] to-[#11152f] shadow-[0_16px_30px_rgba(0,0,0,0.35)]" />
          <div className="mx-auto h-2 w-[74%] rounded-b-[1.2rem] bg-[#080b1d] shadow-[0_8px_20px_rgba(0,0,0,0.5)]" />

          <pre
            aria-label="Developer profile code"
            className="mx-auto mt-5 w-[88%] overflow-hidden rounded-xl border border-line bg-night/95 p-4 text-left font-mono text-[11px] leading-relaxed text-muted shadow-2xl sm:p-5 sm:text-xs md:text-sm"
          >
            <code>{codeCard}</code>
          </pre>
        </motion.div>
      </motion.div>
    </section>
  );
}