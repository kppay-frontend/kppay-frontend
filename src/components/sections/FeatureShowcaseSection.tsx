import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button, images } from '@/types';

interface FeatureShowcaseProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  layout: 'image-left' | 'image-right';
  theme: 'blue' | 'light';
}

export default function FeatureShowcaseSection({
  title,
  description,
  ctaText,
  ctaHref = '#',
  imageSrc,
  imageAlt,
  layout,
  theme,
}: FeatureShowcaseProps) {
  const isBlueTheme = theme === 'blue';
  const isImageLeft = layout === 'image-left';

  return (
    <section
      className={`relative py-12 md:py-16 lg:py-20 overflow-hidden ${
        isBlueTheme ? 'bg-brand-secondary' : 'bg-surface-secondary'
      }`}
    >
      <div className="container-padding max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center`}
        >
          {/* Text Content */}
          <div className={`${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2
              className={`heading-bebas text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.05] mb-4 ${
                isBlueTheme
                  ? 'text-text-inverse-secondary'
                  : 'text-text-primary'
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-[14px] md:text-[15px] lg:text-base mb-6 leading-relaxed max-w-[480px] ${
                isBlueTheme ? 'text-white/85' : 'text-text-secondary'
              }`}
            >
              {description}
            </p>
            <Button
              variant={isBlueTheme ? 'white' : 'primary'}
              size="lg"
              href={ctaHref}
              className={isBlueTheme ? 'px-0 justify-start' : ''}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Image Content */}
          <div
            className={`${isImageLeft ? 'lg:order-1' : 'lg:order-2'} relative`}
          >
            <div
              className="relative w-full max-w-[420px] lg:max-w-[480px] mx-auto"
              style={{ aspectRatio: '1.1' }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
