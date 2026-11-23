"use client";

import { motion } from "motion/react";
import type { IconType } from "react-icons";
import {
  FaCalendarDays,
  FaCode,
  FaFaceSmile,
  FaTrophy,
} from "react-icons/fa6";
import CountUp from "@/components/CountUp";
import { stats } from "@/lib/data";

const icons: IconType[] = [FaCalendarDays, FaCode, FaFaceSmile, FaTrophy];

export default function StatsGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {stats.map((stat, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.li
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 rounded-2xl border border-line bg-panel/70 p-4 backdrop-blur sm:p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-iris-gradient text-sm text-white sm:h-12 sm:w-12">
              <Icon aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-bold sm:text-2xl">
                <CountUp value={stat.value} />
              </p>
              <p className="text-xs text-muted sm:text-sm">{stat.label}</p>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}