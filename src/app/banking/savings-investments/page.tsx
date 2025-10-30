// app/services/savings-investment/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { TrendingUp, Award, Shield, Target } from 'lucide-react';

export default function SavingsInvestmentPage() {
  const features: ServiceFeature[] = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'High-Yield Savings',
      description:
        'Earn more on your deposits with competitive interest rates and no hidden fees.',
      items: [
        'Up to 5% APY',
        'FDIC Insured',
        'Daily Compounding',
        'No Monthly Fees',
      ],
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Certificate of Deposit',
      description:
        'Lock in competitive returns with our flexible CD terms and guaranteed protection.',
      items: [
        'Guaranteed Returns',
        'Fixed Rate Protection',
        'Multiple Terms',
        'Auto-renewal Options',
      ],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Investment Portfolio',
      description:
        'Diversified portfolios managed by expert advisors with low fees and transparency.',
      items: [
        'Professional Management',
        'Diversified Holdings',
        'Low Fees',
        'Tax Optimization',
      ],
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Goal-Based Savings',
      description:
        'Automated savings plans to help you reach your financial goals faster.',
      items: [
        'Automatic Transfers',
        'Goal Tracking',
        'Round-Up Savings',
        'Progress Insights',
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Savings & Investment"
        description="Grow your wealth with high-yield savings accounts, smart investment portfolios, and automated savings tools designed to help you reach your financial goals."
        imageSrc={images.services.savings}
        imageAlt="Savings and Investment Growth"
        primaryButtonText="Start Saving"
        primaryButtonHref="/signup"
        secondaryButtonText="Savings Calculator"
        secondaryButtonHref="/tools/calculator"
      />

      <ServiceFeatures
        title="Savings & Investment Products"
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
