import React from 'react';
import { CheckCircle } from 'lucide-react';

const BusinessBankingSuite = () => {
  const industries = [
    {
      title: 'E-commerce and Marketplaces',
      features: [
        'Split payments',
        'Vendor Management',
        'Automated Reconciliation',
        'Multi-seller Support',
      ],
    },
    {
      title: 'Fintech and SaaS',
      features: [
        'Split payments',
        'Vendor Management',
        'Automated Reconciliation',
        'Multi-seller Support',
      ],
    },
    {
      title: 'Healthcare and Education',
      features: [
        'Split payments',
        'Vendor Management',
        'Automated Reconciliation',
        'Multi-seller Support',
      ],
    },
    {
      title: 'Manufacturing and Logistics',
      features: [
        'Split payments',
        'Vendor Management',
        'Automated Reconciliation',
        'Multi-seller Support',
      ],
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-surface-secondary">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="heading-bebas text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Complete Business Banking Suite
        </h2>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-surface-primary rounded-2xl p-6 shadow-card flex flex-col"
            >
              {/* Card Header */}
              <h3 className="text-brand-primary text-lg font-semibold mb-6">
                {industry.title}
              </h3>

              {/* Card Body - Blue Background with rounded corners */}
              <div className="bg-brand-primary rounded-xl p-5 space-y-3 flex-1">
                {industry.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-text-main-white flex-shrink-0" />
                    <span className="text-text-main-white text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBankingSuite;
