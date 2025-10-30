// app/services/compliance/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { Shield, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

export default function CompliancePage() {
  const features: ServiceFeature[] = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'PCI DSS Compliance',
      description:
        'Comprehensive financial statements and accounting reports for regulatory compliance.',
      items: [
        'Profit & Loss Statement',
        'Balance Sheet',
        'Cash Flow Statement',
        'Tax Summaries',
      ],
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'AML/KYC Management',
      description:
        'Detailed transaction data and payment processing analytics for anti-money laundering compliance.',
      items: [
        'Transaction Summary',
        'Payment Method Analysis',
        'Flagged Payment Report',
        'Chargeback Report',
      ],
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: 'Fraud Detection',
      description:
        'Customer behavior and demographic analysis reports to identify and prevent fraudulent activities.',
      items: [
        'Customer Lifetime Value',
        'Acquisition Report',
        'Retention Analysis',
        'Geographic Distribution',
      ],
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: 'Regulatory Reporting',
      description:
        'Regulatory and compliance documentation for audits with automated report generation.',
      items: [
        'AML Compliance Report',
        'PCI DSS Documentation',
        'KYC Status Report',
        'Audit Trail',
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Compliance and Risk Management"
        description="Generate comprehensive financial reports automatically. Customizable templates, automated delivery, and compliance documentation to keep your business informed and compliant."
        imageSrc={images.services.compliance}
        imageAlt="Compliance and Risk Management"
        primaryButtonText="Compliance Assessment"
        primaryButtonHref="/assessment"
        secondaryButtonText="View Compliance Demo"
        secondaryButtonHref="/demo/compliance"
      />

      <ServiceFeatures
        title="Comprehensive Compliance Suite"
        features={features}
        variant="blue"
        customColors={{
          sectionTitle: 'text-text-inverse-secondary',
          featureTitle: 'text-text-inverse-secondary',
          description: 'text-text-main-white',
          checkIcon: 'text-text-inverse-secondary',
          listItem: 'text-white',
        }}
        boxOpacity={10}
      />
    </main>
  );
}
