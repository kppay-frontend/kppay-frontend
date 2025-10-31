// app/services/point-of-sale/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  IntegrationSelector,
  images,
  type ServiceFeature,
  type IntegrationOption,
} from '@/types';
import {
  CreditCard,
  Globe,
  Smartphone,
  Shield,
  ShoppingCart,
  Coffee,
  Briefcase,
} from 'lucide-react';

export default function PointOfSalePage() {
  const features: ServiceFeature[] = [
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: 'Tap to Pay',
      description:
        'Accept contactless payments using any smartphone or tablet.',
      items: [
        'NFC & Chip Reading',
        'Contactless Payments',
        'Mobile Wallet Support',
        'No Hardware Needed',
      ],
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Universal Acceptance',
      description: 'Accept all major card brands and 40+ payment methods.',
      items: [
        'Visa, Mastercard, Amex',
        'Apple Pay, Google Pay',
        'Local Mobile Money',
        'QR Code Payments',
      ],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Offline Capability',
      description: 'Continue processing payments even without internet.',
      items: [
        'Offline Mode',
        'Auto-sync When Online',
        'Reliable Processing',
        'No Missed Sales',
      ],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption.',
      items: [
        'PCI DSS Compliant',
        'End-to-end Encryption',
        'EMV Certification',
        'Fraud Protection',
      ],
    },
  ];

  const businessTypeOptions: IntegrationOption[] = [
    {
      id: 'retail-stores',
      icon: <ShoppingCart size={40} strokeWidth={1.5} />,
      title: 'Retail Stores',
      description:
        'Perfect for brick-and-mortar shops, boutiques, and retail chains',
      timeToIntegrate: '2.7% + 5¢',
      complexity: 'PER TRANSACTION',
      features: [
        'Quick checkout',
        'Inventory integration',
        'Customer receipts',
        'Multi-location support',
      ],
      ctaText: 'Learn More',
      ctaHref: '/solutions/retail',
    },
    {
      id: 'restaurants-cafes',
      icon: <Coffee size={40} strokeWidth={1.5} />,
      title: 'Restaurants & Cafes',
      description:
        'Streamline payments for dining, takeout, and delivery orders',
      timeToIntegrate: '2.7% + 5¢',
      complexity: 'PER TRANSACTION',
      features: [
        'Table-side payments',
        'Split billing',
        'Tip management',
        'Order integration',
      ],
      ctaText: 'Learn More',
      ctaHref: '/solutions/restaurants',
    },
    {
      id: 'service-businesses',
      icon: <Briefcase size={40} strokeWidth={1.5} />,
      title: 'Service Businesses',
      description: 'Ideal for salons, repair shops, and professional services',
      timeToIntegrate: '2.7% + 5¢',
      complexity: 'PER TRANSACTION',
      features: [
        'Appointment booking',
        'Service tracking',
        'Customer management',
        'Payment scheduling',
      ],
      ctaText: 'Learn More',
      ctaHref: '/solutions/services',
    },
  ];

  const hardwareOptions: IntegrationOption[] = [
    {
      id: 'mobile-card-reader',
      icon: <ShoppingCart size={40} strokeWidth={1.5} />,
      title: 'Mobile Card Reader',
      description: 'Compact card reader for smartphones and tablets',
      timeToIntegrate: 'Free',
      complexity: '',
      features: [
        'Quick checkout',
        'Inventory integration',
        'Customer receipts',
        'Multi-location support',
      ],
      ctaText: 'Learn More',
      ctaHref: '/hardware/mobile-reader',
    },
    {
      id: 'countertop-terminal',
      icon: <Coffee size={40} strokeWidth={1.5} />,
      title: 'Countertop Terminal',
      description: 'Full-featured terminal for high-volume businesses',
      timeToIntegrate: '$149',
      complexity: '',
      features: [
        'Table-side payments',
        'Split billing',
        'Tip management',
        'Order integration',
      ],
      ctaText: 'Learn More',
      ctaHref: '/hardware/countertop',
    },
    {
      id: 'all-in-one-pos',
      icon: <Briefcase size={40} strokeWidth={1.5} />,
      title: 'All-in-One POS',
      description: 'Complete point-of-sale system with integrated payments',
      timeToIntegrate: '$299',
      complexity: '',
      features: [
        'Appointment booking',
        'Service tracking',
        'Customer management',
        'Payment scheduling',
      ],
      ctaText: 'Learn More',
      ctaHref: '/hardware/all-in-one',
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Point of Sale Solutions"
        description="Transform any device into a powerful payment terminal. Accept in-person payments with tap, chip, and mobile wallets for your business."
        imageSrc={images.services.pointOfSale}
        imageAlt="Point of Sale Solutions"
        primaryButtonText="Get POS System"
        primaryButtonHref="/signup"
        secondaryButtonText="Request Demo"
        secondaryButtonHref="/demo"
        imageSize="sm"
      />

      <ServiceFeatures
        title="Everything You Need in One System"
        features={features}
        variant="primary"
        customColors={{
          sectionTitle: 'text-text-inverse-primary',
          featureTitle: 'text-text-inverse-primary',
          description: 'text-text-main-white',
          checkIcon: 'text-text-inverse-primary',
          listItem: 'text-white',
        }}
        boxOpacity={10}
      />

      <IntegrationSelector
        heading="Perfect For Every Business"
        options={businessTypeOptions}
      />

      <IntegrationSelector
        heading="Choose Your Hardware"
        options={hardwareOptions}
      />
    </main>
  );
}
