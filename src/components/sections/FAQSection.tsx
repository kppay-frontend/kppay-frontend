'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  isUppercase: boolean;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How does verification work with KPpay?',
      answer:
        'You usually need to take some ID into the bank branch. KPPay is no different. We are a financial institution, so we need to know who is using our service, ask for you to verify your identity.',
      isUppercase: true,
    },
    {
      question: 'Is mobile money safe',
      answer:
        'Yes, mobile money is safe. We use industry-standard encryption and security measures to protect your transactions and personal information.',
      isUppercase: true,
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Our cancellation policy allows you to cancel transactions within 24 hours of initiation. Please contact our support team for assistance.',
      isUppercase: true,
    },
    {
      question: 'Can other info be added to an invoice?',
      answer:
        'Yes, you can add custom information to your invoices including business details, tax information, and payment terms.',
      isUppercase: true,
    },
    {
      question: 'How does billing work?',
      answer:
        'Billing is processed automatically based on your subscription plan. You will receive detailed invoices via email for all transactions.',
      isUppercase: true,
    },
    {
      question: 'How do I change my account email?',
      answer:
        'You can change your account email in the account settings section. Verification will be required for security purposes.',
      isUppercase: false,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-surface-secondary">
      <div className="container-padding max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="heading-bebas text-3xl sm:text-4xl text-text-main-dark mb-3">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm sm:text-base text-text-secondary italic">
            Everything you need to know about KPpay
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              {/* Glowing gradient border when open */}
              {openIndex === index && (
                <div
                  className="absolute -inset-1 rounded-xl blur-lg"
                  style={{
                    background:
                      'linear-gradient(to right, #93C5FD, #C4B5FD, #F9A8D4, #FDBA74, #FDE047)',
                  }}
                ></div>
              )}

              {/* SOLID WHITE Card */}
              <div className="relative bg-white border border-border-secondary rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left rounded-lg"
                >
                  <span
                    className={`text-sm sm:text-base text-text-main-dark ${
                      faq.isUppercase
                        ? 'heading-bebas-light'
                        : 'italic font-normal'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="shrink-0 ml-4 w-6 h-6 rounded-full border-2 border-text-main-dark flex items-center justify-center text-text-main-dark font-bold">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 bg-white rounded-b-lg animate-fadeIn">
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-surface-secondary rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="heading-bebas-light text-lg sm:text-xl text-text-main-dark mb-1">
              Send money and recieve money super fast
            </h3>
            <p className="text-sm text-text-secondary">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button variant="outlined" size="sm" href="/about">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="primary" size="sm" href="/signup">
              Sign Up
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
