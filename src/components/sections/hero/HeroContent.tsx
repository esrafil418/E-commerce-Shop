import { motion } from "motion/react";
import { HeroActions } from "./HeroActions";

export function HeroContent() {
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
      className="max-w-2xl space-y-6 text-white"
    >
      <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
        New Collection
      </span>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
        Discover products
        <br />
        made for modern life
      </h1>

      <p className="max-w-xl text-lg text-white/80">
        Shop from a wide collection of products with modern design, great
        quality, and a seamless shopping experience.
      </p>

      <HeroActions />
    </motion.div>
  );
}
