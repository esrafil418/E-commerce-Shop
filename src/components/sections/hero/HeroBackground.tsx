"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function HeroBackground() {
  return (
    <motion.div
      initial={{
        scale: 1.1,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="absolute inset-0"
    >
      <Image
        src="/images/bg-pexels.jpg"
        alt="E-commerce background"
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
