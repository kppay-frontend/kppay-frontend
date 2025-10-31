'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button, images } from '@/types';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const peopleImages = [
    images.hero.people1,
    images.hero.people2,
    images.hero.people3,
    images.hero.people4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % peopleImages.length
        );
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [peopleImages.length]);

  return (
    <section className="relative -mt-24 overflow-hidden">
      {/* Hero Container */}
      <div className="relative h-[680px] sm:h-[700px] md:h-[750px] lg:h-[800px]">
        {/* Slideshow Images - Desktop & Tablet */}
        <div className="hidden sm:block absolute top-12 left-0 right-0 bottom-0">
          {peopleImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex && !isTransitioning
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`KP Pay User ${index + 1}`}
                fill
                className="object-cover object-top"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Static Image - Mobile Only - Using people3 */}
        <div className="block sm:hidden absolute top-12 left-0 right-0 bottom-0">
          <Image
            src={images.hero.people3}
            alt="KP Pay User"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Gradient Overlay - Creates the visual blend */}
        <div className="absolute inset-0 z-[1]">
          <Image
            src={images.hero.gradient}
            alt=""
            fill
            className="object-cover opacity-70 mix-blend-multiply"
            priority
          />
        </div>

        {/* Dark overlay with gradient - Ensures text readability */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>

        {/* Content Layer - Better positioning for all viewports */}
        <div className="relative z-10 container-padding h-full flex flex-col items-center justify-end pb-16 sm:pb-32 md:pb-36 lg:pb-40">
          <div className="text-center max-w-5xl mx-auto">
            {/* Heading with text shadow for extra pop */}
            <h1 className="hero-heading drop-shadow-lg">
              THE SAFEST AND MOST RELIABLE
              <br />
              MONEY TRANSACTION PLATFORM
            </h1>

            {/* Description with text shadow */}
            <p className="hero-description drop-shadow-md">
              Send money globally, receive payments, deposit and request funds,
              invest
              <br className="hidden sm:block" />
              and exchange across multiple currencies with low fees, speed and
              safety.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg">
                Get started for free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outlined-white" size="lg">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
