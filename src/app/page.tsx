import { HeroSection } from "@/app/sections/HeroSection";
import { StatsSection } from "@/app/sections/StatsSection";
import { TestimonialsSection } from "@/app/sections/TestimonialsSection";
import { CinematicLoader } from "@/app/components/CinematicLoader";

export default function HomePage() {
  return (
    <>
      <CinematicLoader />
      <main className="bg-[#0A0A0F]">
        <HeroSection />
        <StatsSection />
        <TestimonialsSection />
      </main>
    </>
  );
}