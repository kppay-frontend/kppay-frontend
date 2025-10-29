// app/services/reporting/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { FileText, BarChart2, Users as UsersIcon, Shield } from 'lucide-react';

export default function ReportingPage() {
  const features: ServiceFeature[] = [
    {
      icon: <FileText className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Financial Reports',
      description: 'Comprehensive financial statements and accounting reports.',
      items: [
        'Profit & Loss Statement',
        'Balance Sheet',
        'Cash Flow Statement',
        'Tax Summaries',
      ],
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Transaction Reports',
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
      icon: <UsersIcon className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Customer Reports',
      description: 'Customer behavior and demographic analysis reports.',
      items: [
        'Customer Lifetime Value',
        'Acquisition Report',
        'Retention Analysis',
        'Geographic Distribution',
      ],
    },
    {
      icon: <Shield className="w-10 h-10 text-text-inverse-secondary" />,
      title: 'Compliance Reports',
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
        title="Reporting and Documentation"
        description="Generate comprehensive financial reports automatically. Customizable templates, automated delivery, and compliance documentation to keep your business informed and compliant."
        imageSrc={images.services.businessAccounts}
        imageAlt="Business Reports"
        primaryButtonText="Setup Reporting"
        primaryButtonHref="/signup"
        secondaryButtonText="View Report Samples"
        secondaryButtonHref="/samples"
      />

      <ServiceFeatures
        title="Comprehensive Report Library"
        features={features}
        variant="blue"
      />
    </main>
  );
}
