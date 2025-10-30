// app/services/personal-banking/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { PiggyBank, Smartphone, Globe, CreditCard } from 'lucide-react';

export default function PersonalBankingPage() {
  const features: ServiceFeature[] = [
    {
      icon: <PiggyBank className="w-10 h-10" />,
      title: 'Smart Budgeting',
      description:
        'AI-powered budgeting tools to help you manage your financial life with ease.',
      items: [
        'Automatic Categorization',
        'Spending Insights',
        'Budget Alerts',
        'Goal Tracking',
      ],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile-First Banking',
      description:
        'Complete banking experience at your fingertips with our intuitive mobile app.',
      items: [
        'Instant Transfers',
        'Mobile Check Deposit',
        'Bill Pay',
        'ATM Locator',
      ],
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Global Payments',
      description:
        'Send and receive money internationally with competitive rates and fast processing.',
      items: [
        '100+ Countries',
        'Real-time Transfers',
        'Low Fees',
        'Currency Exchange',
      ],
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: 'Premium Cards',
      description:
        'Virtual and physical cards with rewards program and security controls.',
      items: [
        'Cashback Rewards',
        'No Foreign Fees',
        'Instant Virtual Cards',
        'Spending Controls',
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Personal Banking"
        description="Modern personal banking designed for your lifestyle. Smart budgeting, global payments, and mobile-first banking experience."
        imageSrc={images.services.onlinePayment}
        imageAlt="Personal Banking Experience"
        primaryButtonText="Open Personal Account"
        primaryButtonHref="/signup"
        secondaryButtonText="Explore Features"
        secondaryButtonHref="/features"
      />

      <ServiceFeatures
        title="Banking That Works For You"
        features={features}
        variant="gray"
        customColors={{
          sectionTitle: 'text-text-inverse-dark',
          featureTitle: 'text-text-inverse-dark',
          description: 'text-text-main-white',
          checkIcon: 'text-text-inverse-dark',
          listItem: 'text-white',
        }}
        boxOpacity={10}
      />
    </main>
  );
}
