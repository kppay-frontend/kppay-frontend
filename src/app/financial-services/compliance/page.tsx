// app/services/compliance/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { Shield, FileCheck, AlertTriangle, FileText } from 'lucide-react';

export default function CompliancePage() {
  const features: ServiceFeature[] = [
    {
      icon: <Shield className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'PCI DSS Compliance',
      description: 'Comprehensive financial statements and accounting reports.',
      items: [
        'Profit & Loss Statement',
        'Balance Sheet',
        'Cash Flow Statement',
        'Tax Summaries',
      ],
    },
    {
      icon: <FileCheck className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'AML/KYC Management',
      description:
        'Detailed transaction data and payment processing analytics.',
      items: [
        'Transaction Summary',
        'Payment Method Analysis',
        'Failed Payment Report',
        'Chargeback Report',
      ],
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Fraud Detection',
      description: 'Customer behavior and demographic analysis reports.',
      items: [
        'Customer Lifetime Value',
        'Acquisition Report',
        'Retention Analysis',
        'Geographic Distribution',
      ],
    },
    {
      icon: <FileText className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Regulatory Reporting',
      description: 'Regulatory and compliance documentation for audits.',
      items: [
        'AML Compliance Report',
        'KYC Status Report',
        'PCI DSS Documentation',
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
        imageAlt="Compliance Management"
        primaryButtonText="Compliance Assessment"
        primaryButtonHref="/signup"
        secondaryButtonText="View Compliance Demo"
        secondaryButtonHref="/demo"
      />

      <ServiceFeatures
        title="Comprehensive Compliance Suite"
        features={features}
        variant="blue"
      />
    </main>
  );
}
