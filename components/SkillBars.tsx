"use client";

import { motion } from "motion/react";
import { skills } from "@/lib/data";

export default function SkillBars() {
  return (
    <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, i) => (
        <li key={skill.name}>
          <div className="flex justify-between text-sm font-semibold">
            <span>{skill.name}</span>
            <span className="text-muted">{skill.level}%</span>
          </div>
          <div
            role="progressbar"
            aria-label={skill.name}
            aria-valuenow={skill.level}
            aria-valuemin={0}
            aria-valuemax={100}
            className="mt-2 h-2 overflow-hidden rounded-full bg-line"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.07, ease: "easeOut" }}
              className="h-full origin-left rounded-full bg-iris-gradient"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}