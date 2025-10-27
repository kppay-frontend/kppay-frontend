import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button, images } from '@/types';

export default function HeroSection() {
  return (
    <section className="relative -mt-24 overflow-visible">
      {/* Background Gradient Container */}
      <div className="relative h-[650px] sm:h-[700px] md:h-[750px] lg:h-[800px]">
        {/* Gradient Background */}
        <Image
          src={images.hero.gradient}
          alt=""
          fill
          className="object-cover"
          priority
        />

        {/* All Content */}
        <div className="relative z-10 container-padding h-full flex flex-col items-center justify-start pt-32 sm:pt-36 md:pt-40 lg:pt-44">
          <div className="text-center">
            {/* Heading */}
            <h1 className="heading-bebas text-[40px] md:text-[55px] lg:text-[60px] text-white leading-[1.05] mb-5">
              THE SAFEST AND MOST RELIABLE
              <br />
              MONEY TRANSACTION PLATFORM
            </h1>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-white/95 mb-8 leading-relaxed max-w-[420px] sm:max-w-[700px] mx-auto">
              Send money globally, receive payments, deposit and request funds,
              invest
              <br className="hidden sm:block" />
              and exchange across multiple currencies with low fees, speed and
              safety.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
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

      {/* Hero Dashboard Image - Overlaps into next section */}
      <div className="relative -mt-48 sm:-mt-56 md:-mt-64 lg:-mt-72 z-20 container-padding">
        <div className="max-w-[650px] md:max-w-[750px] mx-auto">
          <div className="relative w-full aspect-[16/10]">
            <Image
              src={images.hero.main}
              alt="EP Pay Platform Dashboard"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
