// app/services/online-payments/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { CreditCard, Smartphone, Globe, Lock } from 'lucide-react';

export default function OnlinePaymentsPage() {
  const features: ServiceFeature[] = [
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: 'Credit and Debit Cards',
      description: 'Accept all major card payments worldwide.',
      items: [
        'Visa, Mastercard Support',
        'Amex Integration',
        '3D Secure Authentication',
        'Dynamic Currency Conversion',
        'Fraud Protection',
      ],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Local Payment Methods',
      description: 'Regional payment options for African markets.',
      items: [
        'Visa, Mastercard, Amex',
        'Mobile Money Integration',
        'Dynamic Currency Conversion',
        'Local Mobile Money',
      ],
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Digital Wallets',
      description: 'Integrate popular digital payment methods.',
      items: [
        'Apple Pay Integration',
        'Google Pay Support',
        '3D Secure Authentication',
        'Dynamic Currency Conversion',
        'One-click Checkout',
      ],
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: 'Digital Wallets',
      description: 'Integrate popular digital payment methods.',
      items: [
        'Samsung Pay',
        'Alipay & WeChat Pay',
        'Paypal Integration',
        'Fraud Protection',
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Online Payments"
        description="Accept payments on your website with a simple integration. Support for global payment methods, instant settlement, and enterprise-grade security."
        imageSrc={images.services.onlinePayment}
        imageAlt="Online Payments"
        primaryButtonText="Start in Sales"
        primaryButtonHref="/signup"
        secondaryButtonText="Get started"
        secondaryButtonHref="/demo"
      />

      <ServiceFeatures
        title="Accept Any Payment Method"
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
