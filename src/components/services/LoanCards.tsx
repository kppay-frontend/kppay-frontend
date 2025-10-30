// components/services/LoanCards.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { LoanCardsData } from '@/types';

export const LoanCards: React.FC<LoanCardsData> = ({ title, loans }) => {
  return (
    <section className="bg-[#3d3d3d] py-12 md:py-16 relative z-10">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="heading-bebas text-3xl md:text-4xl text-center text-[#e5b88f] mb-10 md:mb-12">
          {title}
        </h2>

        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Title */}
              <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2">
                {loan.title}
              </h3>

              {/* Card Description */}
              <p className="text-text-secondary text-xs md:text-sm mb-4 leading-relaxed">
                {loan.description}
              </p>

              {/* Loan Details */}
              <div className="space-y-3 mb-4">
                <div className="bg-surface-secondary rounded-lg p-2.5">
                  <p className="text-xs text-text-tertiary mb-0.5">Rate</p>
                  <p className="text-base font-semibold text-text-primary">
                    {loan.rateRange}
                  </p>
                </div>

                <div className="bg-surface-secondary rounded-lg p-2.5">
                  <p className="text-xs text-text-tertiary mb-0.5">Amount</p>
                  <p className="text-base font-semibold text-text-primary">
                    {loan.amountRange}
                  </p>
                </div>

                <div className="bg-surface-secondary rounded-lg p-2.5">
                  <p className="text-xs text-text-tertiary mb-0.5">Term</p>
                  <p className="text-base font-semibold text-text-primary">
                    {loan.termRange}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-1.5">
                {loan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-xs"
                  >
                    <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-brand-primary" />
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
