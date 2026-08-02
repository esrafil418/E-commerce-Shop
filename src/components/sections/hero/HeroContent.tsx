import { HeroActions } from "./HeroActions";

export function HeroContent() {
  return (
    <div className="max-w-2xl space-y-6 text-white">
      <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
        New Collection
      </span>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
        Discover products
        <br />
        made for modern life
      </h1>

      <p className="max-w-xl text-lg text-white/80">
        Explore premium products with amazing design, quality and experience.
      </p>

      <HeroActions />
    </div>
  );
}
