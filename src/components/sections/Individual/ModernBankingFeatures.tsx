import React from 'react';
import { FeatureCard } from '@/types';

const ModernBankingFeatures = () => {
  const features = [
    {
      title: 'Virtual Cards',
      description: 'Secure online shopping with instant virtual cards',
    },
    {
      title: 'Global Transfers',
      description: 'Filter by customer segments, products, or regions',
    },
    {
      title: 'Smart Savings',
      description: 'Include or exclude specific data points and metrics',
    },
    {
      title: 'Mobile First',
      description: 'Add custom calculations and business KPIs',
    },
    {
      title: 'Real-time Alerts',
      description: 'Secure online shopping with instant virtual cards',
    },
    {
      title: 'Budgeting Tools',
      description: 'Filter by customer segments, products, or regions',
    },
    {
      title: 'Multi-currency',
      description: 'Include or exclude specific data points and metrics',
    },
    {
      title: '24/7 Support',
      description: 'Add custom calculations and business KPIs',
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-surface-primary">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-bebas text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4">
            Everything You Need for Modern Banking
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            Start free and upgrade as your needs grow
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernBankingFeatures;
