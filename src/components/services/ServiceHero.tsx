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
  imageSize = 'md',
}) => {
  // Image size classes
  const imageSizeClass =
    imageSize === 'sm'
      ? 'max-w-lg'
      : imageSize === 'md'
      ? 'max-w-2xl'
      : imageSize === 'lg'
      ? 'max-w-3xl'
      : 'max-w-4xl';

  return (
    <section className="bg-surface-primary py-16 md:py-20 lg:py-24">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Title */}
          <h1 className="hero-heading-dark">{title}</h1>

          {/* Description */}
          <p className="hero-description-dark">{description}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="md" href={primaryButtonHref}>
              {primaryButtonText}
            </Button>
            {secondaryButtonText && secondaryButtonHref && (
              <Button variant="outlined" size="md" href={secondaryButtonHref}>
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>

        {/* Hero Image - Smaller and will be overlapped */}
        <div
          className={`relative w-full ${imageSizeClass} mx-auto -mb-32 md:-mb-40`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};
