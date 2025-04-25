import AnimatedPage from "@/components/AnimatedPage";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <AnimatedPage>
      <HeroSection />
      <ServicesPreview />
      <AdvantagesSection />
      <ReviewsSection />
      <CtaSection />
    </AnimatedPage>
  );
};

export default Index;
