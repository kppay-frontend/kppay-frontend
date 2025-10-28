import {
  BusinessBankingSuite,
  EnterprisePricingCards,
  EnterprisePricingHero,
  WhyChooseEnterprise,
} from '@/types';

export const metadata = {
  title: 'Enterprise Pricing | KPPay - Financial Infrastructure for Business',
  description:
    'Power your business with scalable financial infrastructure. From startups to global enterprises, get 99.9% uptime SLA, SOC 2 compliance, and dedicated support.',
};

const EnterprisePricingPage = () => {
  return (
    <main className="page-transition">
      <EnterprisePricingHero />
      <EnterprisePricingCards />
      <BusinessBankingSuite />
      <WhyChooseEnterprise />
    </main>
  );
};

export default EnterprisePricingPage;
