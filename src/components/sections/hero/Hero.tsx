"use client";

import { Container } from "@/components/common/Container";
import { motion } from "motion/react";
import Image from "next/image";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
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

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative">
        <Container>
          <div className="flex min-h-150 items-center">
            <HeroContent />
          </div>
        </Container>
      </div>
    </section>
  );
}
