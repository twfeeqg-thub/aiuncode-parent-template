"use client";
import config from "../config.json";
import dynamic from 'next/dynamic';

// الأقسام الأساسية (Core)
const Header = dynamic(() => import('@/components/common/Header'));
const HeroSection = dynamic(() => import('@/components/common/HeroSection'));
const ContactSection = dynamic(() => import('@/components/common/ContactSection'));
const Footer = dynamic(() => import('@/components/common/Footer'));
const FaqSection = dynamic(() => import('@/components/common/FaqSection'));

// الأقسام العامة (Generic) - تم حقنها آلياً
const ServicesSection = dynamic(() => import('@/components/sectors/Generic/ServicesSection'));
const TeamMembersSection = dynamic(() => import('@/components/sectors/Generic/TeamMembersSection'));
const FeaturesSection = dynamic(() => import('@/components/sectors/Generic/FeaturesSection'));
const PricingSection = dynamic(() => import('@/components/sectors/Generic/PricingSection'));
const TestimonialsSection = dynamic(() => import('@/components/sectors/Generic/TestimonialsSection'));
const StatsSection = dynamic(() => import('@/components/sectors/Generic/StatsSection'));
const TrustBar = dynamic(() => import('@/components/sectors/Generic/TrustBar'));
const CTASection = dynamic(() => import('@/components/sectors/Generic/CTASection'));

const SmartAmbassadorGuided = dynamic(() => import('@/components/ui/SmartAmbassadorGuided').then(mod => mod.SmartAmbassadorGuided));

export default function LandingPage() {
  return (
    <main className="w-full" dir="rtl">
      {config.features.showHeader && <Header data={config.site} />}
      {config.features.showTrustBar && <TrustBar data={config.content.trustBar} />}
      {config.features.showHero && <HeroSection data={config.content.hero} />}
      {config.features.showStats && <StatsSection data={config.content.statsSection} />}
      {config.features.showFeatures && <FeaturesSection data={config.content.featuresSection} />}
      {config.features.showServices && <ServicesSection data={config.content.servicesSection} />}
      {config.features.showPricing && <PricingSection data={config.content.pricingSection} />}
      {config.features.showTestimonials && <TestimonialsSection data={config.content.testimonialsSection} />}
      {config.features.showTeam && <TeamMembersSection data={config.content.teamMembersSection} />}
      {config.features.showCTA && <CTASection data={config.content.ctaSection} />}
      {config.features.showFaq && <FaqSection data={config.content.faqSection} />}
      {config.features.showContact && <ContactSection data={config.content.contactForm} />}
      {config.features.showFooter && <Footer data={config.site} />}
      {config.features.showSmartAssistant && <SmartAmbassadorGuided config={config.guidedAssistant} />}
    </main>
  );
}
