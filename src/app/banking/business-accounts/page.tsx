// app/services/business-accounts/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { Globe, Receipt, CreditCard, Link } from 'lucide-react';

export default function BusinessAccountsPage() {
  const features: ServiceFeature[] = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Multi-Currency Support',
      description:
        'Hold and manage multiple currencies with competitive exchange rates.',
      items: [
        '50+ Currencies',
        'Real-time Exchange Rates',
        '24/7 Conversions',
        'Automatic Currency Conversion',
      ],
    },
    {
      icon: <Receipt className="w-10 h-10" />,
      title: 'Expense Management',
      description:
        'Track and categorize business expenses with smart automation.',
      items: [
        'Automated Categorization',
        'Receipt Scanning',
        'Budget Spending',
        'Real-time Reporting',
      ],
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: 'Team Cards',
      description:
        'Issue virtual and physical cards for your team with spending controls.',
      items: [
        'Unlimited Virtual Cards',
        'Custom Spending Limits',
        'Real-time Controls',
        'Team Management',
      ],
    },
    {
      icon: <Link className="w-10 h-10" />,
      title: 'API Integration',
      description: 'Unify your business systems with our comprehensive APIs.',
      items: [
        'RESTful API',
        'Real-time Webhooks',
        'SDK Support',
        'Sandbox Testing',
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Business Accounts"
        description="Full-featured business banking designed for modern companies. Multi-currency support, expense management, and seamless integrations."
        imageSrc={images.services.businessAccounts}
        imageAlt="Business Banking"
        primaryButtonText="Open Business Account"
        primaryButtonHref="/signup"
        secondaryButtonText="Schedule Consultation"
        secondaryButtonHref="/contact"
      />

      <ServiceFeatures
        title="Modern Business Banking Features"
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
