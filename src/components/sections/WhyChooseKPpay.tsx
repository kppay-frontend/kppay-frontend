import React from 'react';
import { Flame, Smartphone, Globe, Shield } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
      {/* Icon Container */}
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
        {icon}
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-semibold text-text-main-white mb-1.5">
          {title}
        </h3>
        <p className="text-sm text-white/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseKPpay: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: 'Clear Pricing',
      description:
        "Plan with confidence using KPpay's clear pricing structure. No hidden fees—just straightforward costs per product.",
    },
    {
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: 'Fast Integration',
      description:
        'KPpay integrates seamlessly into any tech environment, ensuring a smooth transition for you and your customers.',
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: 'Global Compatibility',
      description:
        'KPpay is globally compatible with major cards and payment methods like Amex, Mastercard, Visa, WeChat, and AliPay.',
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: 'Total Security',
      description:
        "KPpay's advanced security ensures peace of mind for both you and your customers.",
    },
  ];

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'var(--color-gradient-feature)',
      }}
    >
      {/* Container */}
      <div className="container-padding max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="heading-bebas text-3xl sm:text-4xl lg:text-5xl text-text-main-white mb-3">
            WHY CHOOSE KPPAY?
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Experience fast, seamless, and hassle-free transactions with KPpay
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Optional: Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default WhyChooseKPpay;
