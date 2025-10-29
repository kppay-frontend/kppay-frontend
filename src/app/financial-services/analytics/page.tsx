// app/services/analytics/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { BarChart3, TrendingUp, Users, Target } from 'lucide-react';

export default function AnalyticsPage() {
  const features: ServiceFeature[] = [
    {
      icon: <BarChart3 className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Real-time Dashboards',
      description:
        'Monitor your business performance with live data visualization.',
      items: [
        'Live Transaction Monitoring',
        'Custom Dashboard Builder',
        'Mobile-responsive Design',
        'Real-time Alerts',
      ],
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Financial Insights',
      description:
        'Deep analysis of revenue, expenses, and cash flow patterns.',
      items: [
        'Revenue Forecasting',
        'Expense Categorization',
        'Cash Flow Analysis',
        'Profitability Tracking',
      ],
    },
    {
      icon: <Users className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Customer Analytics',
      description: "Understand your customers' behaviors and payment patterns.",
      items: [
        'Customer Segmentation',
        'Lifetime Value Analysis',
        'Churn Prediction',
        'Payment Preferences',
      ],
    },
    {
      icon: <Target className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Performance Metrics',
      description: 'Track KPIs and business metrics that matter most.',
      items: [
        'Custom KPI Tracking',
        'Benchmark Comparisons',
        'Goal Setting',
        'Performance Scoring',
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Analytics"
        description="Transform your data into actionable insights with comprehensive analytics tools. Real-time dashboards, financial reports, and predictive analytics to drive business growth."
        imageSrc={images.services.analytics}
        imageAlt="Analytics Dashboard"
        primaryButtonText="Start Analytics"
        primaryButtonHref="/signup"
        secondaryButtonText="View Demo"
        secondaryButtonHref="/demo"
      />

      <ServiceFeatures
        title="Powerful Analytics Features"
        features={features}
        variant="blue"
      />
    </main>
  );
}
