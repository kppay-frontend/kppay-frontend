import React from 'react';
import { EnterpriseCTA } from '@/types';

const WhyChooseEnterprise = () => {
  const stats = [
    {
      value: '$2B+',
      label: 'Proven Scale',
      description: 'Processing $2B+ annually for 500+ enterprise clients',
      color: 'text-brand-primary',
    },
    {
      value: '50+',
      label: 'Global Reach',
      description: 'Operations across 50+ countries with local compliance',
      color: 'text-brand-primary',
    },
    {
      value: '99.9%',
      label: 'Enterprise Support',
      description: 'Dedicated support team with 99.9% uptime guarantee',
      color: 'text-brand-primary',
    },
  ];

  return (
    <section className="w-full bg-surface-secondary">
      {/* Why Choose Section */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="container-padding max-w-7xl mx-auto">
          {/* Section Header */}
          <h2 className="heading-bebas text-3xl md:text-4xl lg:text-5xl text-text-primary text-center mb-10 md:mb-12 lg:mb-16">
            Why Choose KP Pay Enterprise
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {/* Stat Value */}
                <div
                  className={`heading-bebas ${stat.color} text-4xl md:text-5xl lg:text-6xl mb-3`}
                >
                  {stat.value}
                </div>

                {/* Stat Label */}
                <h3 className="text-brand-primary text-lg md:text-xl font-semibold mb-2">
                  {stat.label}
                </h3>

                {/* Stat Description */}
                <p className="text-text-primary text-sm md:text-base max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <EnterpriseCTA />
    </section>
  );
};

export default WhyChooseEnterprise;
