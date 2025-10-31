import { FAQSection } from '@/types';

export const metadata = {
  title: 'FAQs - Kppay | Frequently Asked Questions',
  description:
    'Find answers to common questions about Kppay payment solutions, banking services, account setup, transactions, fees, security, and more.',
};

export default function faQs() {
  return (
    <main className="page-transition">
      {/* Frequently Asked Questions */}
      <FAQSection />
    </main>
  );
}
