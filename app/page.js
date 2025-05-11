import CallToAction from "@/components/CallToAction";
import Categories from "@/components/Categories";
import FeaturedSurprises from "@/components/FeaturedSurprises";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedSurprises />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </>
  );
}
