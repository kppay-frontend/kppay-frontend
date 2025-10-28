// src/types/index.ts
// Central types file - import from '@/types' everywhere

// ============================================
// Re-exports for centralized imports
// ============================================

// Layout Components
export { default as Header } from '@/components/layout/Header';
export { default as Footer } from '@/components/layout/Footer';

// Contact Components
export { default as ContactForm } from '@/components/ContactDB/ContactForm';
export { default as ContactInfo } from '@/components/ContactDB/ContactInfo';
export { default as Newsletter } from '@/components/ContactDB/Newsletter';

// Section Components
export { default as HeroSection } from '@/components/sections/Homepage/HeroSection';
export { default as GlobalReachSection } from '@/components/sections/Homepage/GlobalReachSection';
export { default as FeatureShowcaseSection } from '@/components/sections/Homepage/FeatureShowcaseSection';
export { default as WhyChooseKPpay } from '@/components/sections/Homepage/WhyChooseKPpay';
export { default as TestimonialsSection } from '@/components/sections/Homepage/TestimonialsSection';
export { default as SecurePaymentsSection } from '@/components/sections/Homepage/SecurePaymentsSection';
export { default as PartnersSection } from '@/components/sections/Homepage/PartnersSection';
export { default as ServicesSection } from '@/components/sections/Homepage/ServicesSection';
export { default as ScrollToTop } from '@/components/ScrollToTop';
export { default as AnimationProvider } from '@/components/AnimationProvider';

// Shared Components
export { default as FAQSection } from '@/components/sections/shared/FAQSection';
export { default as FeatureCard } from '@/components/sections/shared/FeatureCard';
export { default as FeaturedResources } from '@/components/sections/shared/FeaturedResources';

// AboutUs Page Components
export { default as AboutHeroSection } from '@/components/sections/AboutUsPage/AboutHeroSection';
export { default as DiscoverSection } from '@/components/sections/AboutUsPage/DiscoverSection';
export { default as HiringSection } from '@/components/sections/AboutUsPage/HiringSection';

// Pricing Components
export { default as IndividualPricingHero } from '@/components/sections/Individual/IndividualPricingHero';
export { default as EnterprisePricingHero } from '@/components/sections/Enterprise/EnterprisePricingHero';

export { default as IndividualPricingCards } from '@/components/sections/Individual/IndividualPricingCards';
export { default as ModernBankingFeatures } from '@/components/sections/Individual/ModernBankingFeatures';
export { default as EnterprisePricingCards } from '@/components/sections/Enterprise/EnterprisePricingCards';

export { default as EnterpriseCTA } from '@/components/sections/Enterprise/EnterpriseCTA';
export { default as WhyChooseEnterprise } from '@/components/sections/Enterprise/WhyChooseEnterprise';
export { default as BusinessBankingSuite } from '@/components/sections/Enterprise/BusinessBankingSuite';

// Resources and Documentation
export { default as ResourcesHeroSection } from '@/components/sections/Resources/ResourcesHeroSection';

// UI Components
export { Button, buttonVariants } from '@/components/ui/Button';

// Config
export { getLayoutConfig } from '@/config/layout.config';
export { default as images, getOptimizedImage } from '@/config/images';

// Utils
export { cn } from '@/lib/utils';

// ============================================
// Layout Types
// ============================================
export type HeaderVariant = 'light' | 'dark';
export type FooterType = 'footer1' | 'footer2';

export interface LayoutConfig {
  header: HeaderVariant;
  footer: FooterType;
}

export interface HeaderProps {
  variant?: HeaderVariant;
}

// ============================================
// Navigation Types
// ============================================
export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface MegaMenuColumn {
  title: string;
  description: string;
  links: NavLink[];
}

// ============================================
// Page Types
// ============================================
export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
