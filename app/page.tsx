"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { HeroSection } from "@/sections/hero";
import { ServicesSection } from "@/sections/services";
import { BrandStorySection } from "@/sections/brand-story";
import { WhyChooseSection } from "@/sections/why-choose";
import { TemplatesSection } from "@/sections/templates";
import { PricingSection } from "@/sections/pricing";
import { TestimonialsSection } from "@/sections/testimonials";
import { FaqSection } from "@/sections/faq";
import { FinalCTA } from "@/sections/final-cta";
import { PageTransition } from "@/components/ui/page-transition";

export default function HomePage() {
  return (
    <MainLayout>
      <PageTransition>
        <HeroSection />
        <ServicesSection />
        <BrandStorySection />
        <WhyChooseSection />
        <TemplatesSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCTA />
      </PageTransition>
    </MainLayout>
  );
}