"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// Turns off movement automatically for visitors who set "reduce motion"
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}