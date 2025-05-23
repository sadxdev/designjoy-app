import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import MembershipBenefits from "@/components/sections/MembershipBenefits";
import PricingSection from "@/components/sections/PricingSection";
import PricingTestimonials from "@/components/sections/PricingTestimonials";
import RecentWorkMarquee from "@/components/sections/RecentWorkMarquee";
import ServicesList from "@/components/sections/ServicesList";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <MembershipBenefits />
      <ServicesList />
      <PricingTestimonials /> 
      <RecentWorkMarquee />
      <PricingSection />
      <FAQSection/>
      <FooterSection/>
    </>
  );
}
