import {
  EnterpriseCTA,
  IndividualPricingCards,
  IndividualPricingHero,
  ModernBankingFeatures,
} from '@/types';

export const metadata = {
  title: 'Individual Pricing | KPPay - Banking Made Simple',
  description:
    'Experience modern banking designed for your personal financial needs. Affordable pricing plans with instant payments, smart savings, and more. Available in 50 countries.',
};

const IndividualPricingPage = () => {
  return (
    <main className="page-transition">
      <IndividualPricingHero />
      <IndividualPricingCards />
      <ModernBankingFeatures />
      <EnterpriseCTA />
    </main>
  );
};

export default IndividualPricingPage;
