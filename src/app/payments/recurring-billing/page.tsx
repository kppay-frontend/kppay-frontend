// app/services/subscriptions/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { RefreshCw, Target, Users, TrendingUp } from 'lucide-react';

export default function SubscriptionsPage() {
  const features: ServiceFeature[] = [
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: 'Automated Billing',
      description: 'Set up recurring billing that works on autopilot.',
      items: [
        'Recurring Billing Cycles',
        'Automatic Retries',
        'Dunning Management',
        'Proration Support',
      ],
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Flexible Plans',
      description: 'Create unlimited pricing plans and tiers.',
      items: [
        'Usage-Based Billing',
        'Tiered Pricing',
        'Add-on Services',
        'Custom Pricing',
      ],
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Customer Management',
      description: 'Comprehensive tools to manage your subscribers.',
      items: [
        'Customer Portal',
        'Self-Service Options',
        'Payment History',
        'Account Updates',
      ],
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Analytics & Insights',
      description: 'Deep insights into your subscription business.',
      items: [
        'MRR Tracking',
        'Churn Analysis',
        'Cohort Analysis',
        'Customer Lifetime Value',
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Recurring Billing & Subscriptions"
        description="Build and scale your subscription business with automatic billing, flexible pricing models, and comprehensive customer management tools."
        imageSrc={images.services.subscriptions}
        imageAlt="Recurring Billing & Subscriptions"
        primaryButtonText="Start Billing"
        primaryButtonHref="/signup"
        secondaryButtonText="View Demo"
        secondaryButtonHref="/demo"
      />

      <ServiceFeatures
        title="Everything for Subscription Success"
        features={features}
        variant="primary"
        customColors={{
          sectionTitle: 'text-text-inverse-primary',
          featureTitle: 'text-text-inverse-primary',
          description: 'text-text-main-white',
          checkIcon: 'text-text-inverse-primary',
          listItem: 'text-white',
        }}
        boxOpacity={10}
      />
    </main>
  );
}
