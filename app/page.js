import Categories from "@/components/Categories";
import FeaturedSurprises from "@/components/FeaturedSurprises";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedSurprises />
      <HowItWorks />
    </>
  );
}
