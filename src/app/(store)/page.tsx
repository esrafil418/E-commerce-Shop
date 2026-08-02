import { CategoryProducts } from "@/components/sections/categories/CategoryProducts";
import { FeaturedProducts } from "@/components/sections/featured-products/FeaturedProducts";
import { Hero } from "@/components/sections/hero/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />

      <CategoryProducts />
    </>
  );
}
