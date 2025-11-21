import HeroSection from "@/components/HeroSection";
import CoreCapabilities from "@/components/CoreCapabilities";
import FuturisticExamples from "@/components/FuturisticExamples";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CoreCapabilities />
      <FuturisticExamples />
      <ImpactSection />
      <CTASection />
    </div>
  );
};

export default Index;
