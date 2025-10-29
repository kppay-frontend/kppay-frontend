// components/services/LoanCards.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { LoanCardsData } from '@/types';

export const LoanCards: React.FC<LoanCardsData> = ({ title, loans }) => {
  return (
    <section className="bg-[#3d3d3d] py-16 md:py-20 lg:py-24">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="heading-bebas text-3xl md:text-4xl lg:text-5xl text-center text-[#e5b88f] mb-12 md:mb-16">
          {title}
        </h2>

        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Title */}
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                {loan.title}
              </h3>

              {/* Card Description */}
              <p className="text-text-secondary text-sm md:text-base mb-6 leading-relaxed">
                {loan.description}
              </p>

              {/* Loan Details */}
              <div className="space-y-4 mb-6">
                <div className="bg-surface-secondary rounded-lg p-3">
                  <p className="text-xs text-text-tertiary mb-1">Rate</p>
                  <p className="text-lg font-semibold text-text-primary">
                    {loan.rateRange}
                  </p>
                </div>

                <div className="bg-surface-secondary rounded-lg p-3">
                  <p className="text-xs text-text-tertiary mb-1">Amount</p>
                  <p className="text-lg font-semibold text-text-primary">
                    {loan.amountRange}
                  </p>
                </div>

                <div className="bg-surface-secondary rounded-lg p-3">
                  <p className="text-xs text-text-tertiary mb-1">Term</p>
                  <p className="text-lg font-semibold text-text-primary">
                    {loan.termRange}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2">
                {loan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-primary" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
