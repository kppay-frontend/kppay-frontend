// app/services/mobile-payments/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { Smartphone, QrCode, Wallet, Code } from 'lucide-react';

export default function MobilePaymentsPage() {
  const features: ServiceFeature[] = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Mobile SDKs',
      description: 'Native iOS and Android SDKs for seamless integration.',
      items: [
        'iOS & Android SDKs',
        'Native Performance',
        'Auto-updates',
        'Offline Payments',
      ],
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'In-App Payments',
      description: 'Accept payments directly inside your mobile app.',
      items: [
        'Seamless UX',
        'One-tap Checkout',
        'Biometric Auth',
        'Saved Payment Methods',
      ],
    },
    {
      icon: <Wallet className="w-10 h-10" />,
      title: 'Mobile Wallets',
      description: 'Support for Apple Pay, Google Pay, and more.',
      items: ['Apple Pay', 'Google Pay', 'Samsung Pay', 'Biometric Auth'],
    },
    {
      icon: <QrCode className="w-10 h-10" />,
      title: 'QR Code Payments',
      description: 'Generate dynamic and static QR codes for payments.',
      items: [
        'Dynamic QR Codes',
        'Static QR Codes',
        'Bulk Recognition',
        'Analytics Tracking',
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Mobile Payments"
        description="Accept payments on mobile devices with native SDKs, in-app checkout, and mobile wallet support. Optimized for the best mobile user experience."
        imageSrc={images.services.mobilePayments}
        imageAlt="Mobile Payments"
        primaryButtonText="Download SDK"
        primaryButtonHref="/signup"
        secondaryButtonText="Integration Guide"
        secondaryButtonHref="/docs"
      />

      <ServiceFeatures
        title="Mobile-First Payment Features"
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
