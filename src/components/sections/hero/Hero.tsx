import Image from "next/image";

import { Container } from "@/components/common/Container";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/bg-pexels.jpg"
        alt="E-commerce background"
        fill
        priority
        className="object-cover"
      />

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
