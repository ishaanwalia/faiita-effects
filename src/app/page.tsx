import { HeroSection } from "@/app/sections/HeroSection";
import { StatsSection } from "@/app/sections/StatsSection";
import { GlobeSection } from "@/app/sections/GlobeSection";
import { TestimonialsSection } from "@/app/sections/TestimonialsSection";
import { CinematicLoader } from "@/app/components/CinematicLoader";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import InteractiveIndiaMap from "@/app/components/InteractiveIndiaMap";

export default function HomePage() {
  return (
    <>
      <CinematicLoader />
      <main className="bg-[#0A0A0F]">
        <HeroSection />
        <StatsSection />

        {/* Globe Section */}
        <section className="py-24 px-4">
          <ScrollReveal>
            <GlobeSection />
          </ScrollReveal>
        </section>

        <TestimonialsSection />

        {/* India Map Section */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
              State Associations
            </h2>
            <p className="text-[#A0A0B0] text-center mb-12 max-w-2xl mx-auto">
              Click on any state to explore our regional associations and their leadership
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <InteractiveIndiaMap />
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}