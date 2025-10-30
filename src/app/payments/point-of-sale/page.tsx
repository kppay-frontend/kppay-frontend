// app/services/point-of-sale/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { CreditCard, Globe, Smartphone, Shield } from 'lucide-react';

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
    </main>
  );
}
