// src/types/index.ts
// Central types file - import from '@/types' everywhere

// ============================================
// Re-exports for centralized imports
// ============================================

// Layout Components
export { default as Header } from '@/components/layout/Header';
export { default as Footer } from '@/components/layout/Footer';

// Section Components
export { default as HeroSection } from '@/components/sections/HeroSection';
export { default as GlobalReachSection } from '@/components/sections/GlobalReachSection';
export { default as FeatureShowcaseSection } from '@/components/sections/FeatureShowcaseSection';
export { default as WhyChooseKPpay } from '@/components/sections/WhyChooseKPpay';
export { default as TestimonialsSection } from '@/components/sections/TestimonialsSection';
export { default as SecurePaymentsSection } from '@/components/sections/SecurePaymentsSection';
export { default as PartnersSection } from '@/components/sections/PartnersSection';
export { default as ServicesSection } from '@/components/sections/ServicesSection';
export { default as FAQSection } from '@/components/sections/FAQSection';

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
