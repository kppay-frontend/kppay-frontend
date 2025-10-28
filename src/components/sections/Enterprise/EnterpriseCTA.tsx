import React from 'react';
import { Button } from '@/types';
import { ArrowRight, Phone, Users, ShieldCheck } from 'lucide-react';

const EnterpriseCTA = () => {
  const benefits = [
    { icon: Phone, text: 'Get a response within 24 hours' },
    { icon: Users, text: 'Dedicated enterprise support team' },
    { icon: ShieldCheck, text: 'SOC 2 and PCI-DSS compliant' },
  ];

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="bg-brand-primary py-10 md:py-12 px-6 md:px-10 lg:px-14 rounded-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
            {/* Left Content */}
            <div className="flex-1 min-w-0">
              <h2 className="heading-bebas text-3xl md:text-4xl text-text-main-white mb-3">
                Ready to scale your business?
              </h2>
              <p className="text-text-main-white/90 text-sm md:text-base mb-5">
                Let&apos;s discuss how our enterprise solutions can transform
                your financial operations
              </p>

              {/* Benefits List - Single line on desktop */}
              <div className="flex flex-col lg:flex-row lg:flex-wrap gap-y-2 lg:gap-x-5 text-xs md:text-sm">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-text-main-white"
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full lg:w-auto">
              <Button
                href="/contact"
                variant="outlined-white"
                size="md"
                className="whitespace-nowrap bg-white text-brand-primary hover:bg-white/90 hover:text-brand-primary border-white"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                href="/contact"
                variant="outlined-white"
                size="md"
                className="whitespace-nowrap"
              >
                Request Custom Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
