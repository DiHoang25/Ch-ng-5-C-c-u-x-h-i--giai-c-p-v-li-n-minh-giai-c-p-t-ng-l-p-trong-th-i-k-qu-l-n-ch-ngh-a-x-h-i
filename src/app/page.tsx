import { HeroSection } from "@/components/sections/HeroSection";
import { PresentationOutlineSection } from "@/components/sections/PresentationOutlineSection";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-16">
      <ParticlesBackground />
      <HeroSection />
      <PresentationOutlineSection />
    </main>
  );
}
