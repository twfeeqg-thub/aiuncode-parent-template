"use client";
import config from "../config.json";
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/common/Header'));
const HeroSection = dynamic(() => import('@/components/common/HeroSection'));
const ContactSection = dynamic(() => import('@/components/common/ContactSection'));
const Footer = dynamic(() => import('@/components/common/Footer'));
const FaqSection = dynamic(() => import('@/components/common/FaqSection'));
const ServicesSection = dynamic(() => import('@/components/sectors/Generic/ServicesSection'));
const TeamMembersSection = dynamic(() => import('@/components/sectors/Generic/TeamMembersSection'));
const SmartAmbassadorGuided = dynamic(() => import('@/components/ui/SmartAmbassadorGuided').then(mod => mod.SmartAmbassadorGuided));

export default function LandingPage() {
  return (
    <main className="w-full" dir="rtl">
      {/* تمرير بيانات الموقع للهيدر */}
      {config.features.showHeader && <Header data={config.site} />}
      
      {/* تمرير بيانات الهيرو */}
      {config.features.showHero && <HeroSection data={config.content.hero} />}
      
      {/* تمرير بيانات الخدمات */}
      {config.features.showServices && <ServicesSection data={config.content.servicesSection} />}
      
      {/* تمرير بيانات الفريق */}
      {config.features.showTeam && <TeamMembersSection data={config.content.teamMembersSection} />}
      
      {/* تمرير بيانات الأسئلة الشائعة */}
      {config.features.showFaq && <FaqSection data={config.content.faqSection} />}
      
      {/* تمرير بيانات التواصل */}
      {config.features.showContact && <ContactSection data={config.content.contactForm} />}
      
      {/* تمرير بيانات الفوتر */}
      {config.features.showFooter && <Footer data={config.site} />}
      
      {/* تمرير إعدادات المساعد الذكي */}
      {config.features.showSmartAssistant && <SmartAmbassadorGuided config={config.guidedAssistant} />}
    </main>
  );
}
