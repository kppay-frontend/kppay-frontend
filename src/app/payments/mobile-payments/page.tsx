// app/services/mobile-payments/page.tsx
// ============================================
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  MobileAppSelector,
  SDKSelector,
  images,
  type ServiceFeature,
  type MobileAppOption,
  type SDKOption,
} from '@/types';
import {
  Smartphone,
  QrCode,
  Wallet,
  Code,
  ShoppingCart,
  HandCoins,
  PlayCircle,
  Apple,
  Bot,
} from 'lucide-react';

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

  const mobileAppOptions: MobileAppOption[] = [
    {
      id: 'ecommerce-apps',
      icon: <ShoppingCart size={40} strokeWidth={1.5} />,
      title: 'E-commerce Apps',
      description: 'Perfect for retail and marketplace mobile applications',
      useCases: [
        { label: 'Online Stores' },
        { label: 'Marketplaces' },
        { label: 'Fashion Apps' },
        { label: 'Electronics' },
      ],
      features: [
        'Product Catalogs',
        'Shopping Carts',
        'Order Management',
        'Customer Profiles',
      ],
      ctaText: 'Learn More',
      ctaHref: '/solutions/ecommerce',
    },
    {
      id: 'on-demand-services',
      icon: <HandCoins size={40} strokeWidth={1.5} />,
      title: 'On-Demand Services',
      description: 'Ideal for service-based and gig economy applications',
      useCases: [
        { label: 'Food Delivery' },
        { label: 'Ride Sharing' },
        { label: 'Home Services' },
        { label: 'Healthcare' },
      ],
      features: [
        'Real-time bookings',
        'Service tracking',
        'Rating systems',
        'Multi-party payments',
      ],
      ctaText: 'Learn More',
      ctaHref: '/solutions/on-demand',
    },
    {
      id: 'subscription-apps',
      icon: <PlayCircle size={40} strokeWidth={1.5} />,
      title: 'Subscription Apps',
      description: 'Streamlined billing for subscription and membership apps',
      useCases: [
        { label: 'Media Streaming' },
        { label: 'SaaS Tools' },
        { label: 'Fitness Apps' },
        { label: 'News Platforms' },
      ],
      features: [
        'Recurring billing',
        'Trial periods',
        'Plan management',
        'Usage tracking',
      ],
      ctaText: 'Learn More',
      ctaHref: '/solutions/subscriptions',
    },
  ];

  const sdkOptions: SDKOption[] = [
    {
      id: 'ios-sdk',
      icon: <Apple size={40} strokeWidth={1.5} />,
      title: 'iOS SDK',
      description:
        'Native Swift SDK with full iOS integration and Apple Pay support',
      features: [
        'Swift Package Manager',
        'Apple Pay Integration',
        'Touch/Face ID Support',
        'iOS 12+ Compatibility',
      ],
      ctaText: 'Download iOS SDK',
      ctaHref: '/sdk/ios',
    },
    {
      id: 'android-sdk',
      icon: <Bot size={40} strokeWidth={1.5} />,
      title: 'Android SDK',
      description:
        'Native Kotlin SDK with Google Pay and modern Android features',
      features: [
        'Gradle Dependency',
        'Google Pay Integration',
        'Biometric Authentication',
        'Android 6+ Support',
      ],
      ctaText: 'Download Android SDK',
      ctaHref: '/sdk/android',
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

      <MobileAppSelector
        heading="Perfect For Any Mobile App"
        options={mobileAppOptions}
      />

      <SDKSelector heading="Native Mobile SDKs" options={sdkOptions} />
    </main>
  );
}
