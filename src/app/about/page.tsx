import { AboutHeroSection, HiringSection, DiscoverSection } from '@/types';

export const metadata = {
  title: 'About Us | K-POLYGONE - Financial Happiness for Everyone',
  description:
    "Learn about K-POLYGONE and KPPay. We're a dedicated team helping over 4,000 companies achieve remarkable results through seamless cross-border payments and digital transformation.",
};

const AboutPage = () => {
  return (
    <main className="page-transition">
      <AboutHeroSection />
      <DiscoverSection />
      <HiringSection />
    </main>
  );
};

export default AboutPage;
