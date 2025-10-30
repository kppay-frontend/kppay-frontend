// app/services/reporting/page.tsx
import React from 'react';
import {
  ServiceHero,
  ServiceFeatures,
  images,
  type ServiceFeature,
} from '@/types';
import { FileText, BarChart, Users, Shield } from 'lucide-react';

export default function ReportingPage() {
  const features: ServiceFeature[] = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Financial Reports',
      description:
        'Comprehensive financial statements and accounting reports with customizable templates.',
      items: [
        'Profit & Loss Statement',
        'Balance Sheet',
        'Cash Flow Statement',
        'Tax Summaries',
      ],
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: 'Transaction Reports',
      description:
        'Detailed transaction data and payment processing analytics for business insights.',
      items: [
        'Transaction Summary',
        'Payment Method Analysis',
        'Flagged Payment Report',
        'Chargeback Report',
      ],
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Customer Reports',
      description:
        'Customer behavior and demographic analysis reports to understand your client base better.',
      items: [
        'Customer Lifetime Value',
        'Acquisition Report',
        'Retention Analysis',
        'Geographic Distribution',
      ],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Compliance Reports',
      description:
        'Regulatory and compliance documentation for audits with automated generation and delivery.',
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
        title="Reporting and Documentation"
        description="Generate comprehensive financial reports automatically. Customizable templates, automated delivery, and compliance documentation to keep your business informed and compliant."
        imageSrc={images.services.businessAccounts}
        imageAlt="Reporting and Documentation"
        primaryButtonText="Setup Reporting"
        primaryButtonHref="/signup"
        secondaryButtonText="View Report Samples"
        secondaryButtonHref="/samples"
      />

      <ServiceFeatures
        title="Comprehensive Report Library"
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
