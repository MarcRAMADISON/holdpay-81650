import { Navigation } from "@/components/layout/navigation";
import Hero from "@/components/landing/Hero";
import FeatureSection from "@/components/landing/FeatureSection";
import TimelineSteps from "@/components/landing/TimelineSteps";
import FeatureGrid from "@/components/landing/FeatureGrid";
import Testimonial from "@/components/landing/Testimonial";
import FinalCTA from "@/components/landing/FinalCTA";
import FooterMinimal from "@/components/landing/FooterMinimal";
import { isAuthenticated } from "@/lib/utils";

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation isAuthenticated={isAuthenticated()} />
      <Hero />
      <FeatureSection />
      <TimelineSteps />
      <FeatureGrid />
      <Testimonial />
      <FinalCTA />
      <FooterMinimal />
    </div>
  );
}