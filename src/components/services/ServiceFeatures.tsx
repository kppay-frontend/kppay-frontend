// components/services/ServiceFeatures.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { ServiceFeaturesData } from '@/types';

export const ServiceFeatures: React.FC<ServiceFeaturesData> = ({
  title,
  features,
  variant = 'blue',
  boxOpacity = 20,
  customColors,
}) => {
  // Background color
  const bgColor =
    variant === 'primary'
      ? 'bg-brand-primary'
      : variant === 'blue'
      ? 'bg-brand-secondary'
      : 'bg-[#3d3d3d]';

  // Title color (main section heading)
  const titleColor =
    customColors?.sectionTitle ||
    (variant === 'primary'
      ? 'text-text-inverse-primary'
      : variant === 'blue'
      ? 'text-text-main-white'
      : 'text-[#e5b88f]');

  // Feature title color (h3 headings)
  const featureTitleColor =
    customColors?.featureTitle ||
    (variant === 'primary' ? 'text-text-inverse-primary' : 'text-white');

  // Description text color
  const descriptionColor =
    customColors?.description || 'text-text-inverse-secondary';

  // Check icon color (list bullet icons)
  const checkIconColor =
    customColors?.checkIcon ||
    (variant === 'primary'
      ? 'text-text-inverse-primary'
      : 'text-text-inverse-secondary');

  // List item text color
  const listItemColor = customColors?.listItem || 'text-white/90';

  // Box background opacity
  const boxBgOpacity = `bg-black/${boxOpacity}`;

  return (
    <section className={`${bgColor} py-12 md:py-16 relative z-10`}>
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          className={`heading-bebas text-3xl md:text-4xl text-center ${titleColor} mb-10 md:mb-12`}
        >
          {title}
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${featureTitleColor} text-center sm:text-left py-6 px-4 rounded-xl ${boxBgOpacity} feature-card transition-all duration-300`}
            >
              {/* Icon */}
              {feature.icon && (
                <div className="mb-3 flex justify-center sm:justify-start">
                  {feature.icon}
                </div>
              )}

              {/* Feature Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p
                className={`feature-description ${descriptionColor} text-sm mb-3 leading-relaxed transition-colors duration-300`}
              >
                {feature.description}
              </p>

              {/* Feature Items */}
              <ul className="space-y-1.5">
                {feature.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 text-sm justify-center sm:justify-start"
                  >
                    <CheckCircle
                      className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${checkIconColor}`}
                    />
                    <span className={listItemColor}>{item}</span>
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
