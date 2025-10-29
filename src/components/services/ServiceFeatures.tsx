// components/services/ServiceFeatures.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { ServiceFeaturesData } from '@/types';

export const ServiceFeatures: React.FC<ServiceFeaturesData> = ({
  title,
  features,
  variant = 'blue',
}) => {
  const bgColor = variant === 'blue' ? 'bg-brand-secondary' : 'bg-[#3d3d3d]';
  const titleColor =
    variant === 'blue' ? 'text-text-main-white' : 'text-[#e5b88f]';

  return (
    <section className={`${bgColor} py-16 md:py-20 lg:py-24`}>
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          className={`heading-bebas text-3xl md:text-4xl lg:text-5xl text-center ${titleColor} mb-12 md:mb-16`}
        >
          {title}
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-white">
              {/* Icon */}
              {feature.icon && (
                <div className="mb-4 flex justify-start">{feature.icon}</div>
              )}

              {/* Feature Title */}
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-text-inverse-secondary text-sm md:text-base mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Feature Items */}
              <ul className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 text-sm md:text-base"
                  >
                    <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0 text-text-inverse-secondary" />
                    <span className="text-white/90">{item}</span>
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
