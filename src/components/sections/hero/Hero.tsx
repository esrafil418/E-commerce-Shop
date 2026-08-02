import { Container } from "@/components/common/Container";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <div className="absolute inset-0 bg-black/50" />

      <Container>
        <div className="relative flex min-h-150 items-center">
          <HeroContent />
        </div>
      </Container>
    </section>
  );
}
