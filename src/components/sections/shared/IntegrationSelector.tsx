// src/components/sections/shared/IntegrationSelector.tsx
import * as React from 'react';
import { cn, IntegrationCard, type IntegrationSelectorProps } from '@/types';

export const IntegrationSelector: React.FC<IntegrationSelectorProps> = ({
  heading = 'Choose Your Integration',
  options,
  className,
}) => {
  return (
    <section
      className={cn('py-12 md:py-16 lg:py-20 bg-surface-primary', className)}
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="heading-bebas text-4xl md:text-5xl text-center text-text-primary mb-10 md:mb-12">
          {heading}
        </h2>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option) => (
            <IntegrationCard key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSelector;
