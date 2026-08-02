"use client";

import { motion } from "motion/react";

type HeroAnimationProps = {
  children: React.ReactNode;
};

export function HeroAnimation({ children }: HeroAnimationProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
}
