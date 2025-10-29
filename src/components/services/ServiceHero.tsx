// components/services/ServiceHero.tsx
import React from 'react';
import Image from 'next/image';
import { Button, type ServiceHeroData } from '@/types';

export const ServiceHero: React.FC<ServiceHeroData> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}) => {
  return (
    <section className="bg-surface-primary py-16 md:py-20 lg:py-24">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Title */}
          <h1 className="heading-bebas text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
            {title}
          </h1>

          {/* Description */}
          <p className="text-text-secondary text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" href={primaryButtonHref}>
              {primaryButtonText}
            </Button>
            {secondaryButtonText && secondaryButtonHref && (
              <Button variant="outlined" size="lg" href={secondaryButtonHref}>
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-4xl mx-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};
