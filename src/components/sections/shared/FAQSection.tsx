'use client';

import React, { useState } from 'react';
import { Button } from '@/types';
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
      question: 'How do I complete onboarding and account setup?',
      answer:
        'Simple registration with user details and quick verification. Most accounts are approved within minutes for immediate access.',
      isUppercase: true,
    },
    {
      question: 'How does safety and tokenization work?',
      answer:
        'We use advanced tokenization and bank-level security protocols to protect your financial data and transactions at all times.',
      isUppercase: true,
    },
    {
      question: 'Can I cancel or stop payments?',
      answer:
        'Yes, you can cancel pending payments before processing. Once completed, you can request assistance through our support team.',
      isUppercase: true,
    },
    {
      question: 'How long does document verification take?',
      answer:
        "Document verification typically takes 2-3 business days. You'll receive updates on the status throughout the process.",
      isUppercase: true,
    },
    {
      question: 'How do I manage my password securely?',
      answer:
        'Use strong, unique passwords and enable two-factor authentication. You can update your password anytime in account settings.',
      isUppercase: true,
    },
    {
      question: "What's the difference between mobile and online banking?",
      answer:
        'Both offer full functionality. Mobile app provides convenience on-the-go, while web platform offers comprehensive dashboard views.',
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
