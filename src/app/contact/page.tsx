import { ContactForm, ContactInfo, FAQSection, Newsletter } from '@/types';

export const metadata = {
  title: 'Contact Us | Your Company Name',
  description: "Get in touch with our team. We're here to help.",
};

export default function ContactPage() {
  return (
    <main className="page-transition">
      <div className="min-h-screen px-6">
        {/* Hero Section - Optional */}
        <section className="bg-gradient-feature text-text-main-white">
          <div className="container-padding max-w-4xl mx-auto text-center">
            <h1 className="heading-bebas text-5xl md:text-6xl mb-4">
              Let&apos;s Talk
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container-padding pb-8 md:pb-12 bg-surface-primary">
          <div className="max-w-7xl mx-auto">
            <ContactForm />
          </div>
        </section>

        {/* Divider Line */}
        <div className="border-t border-border-secondary"></div>

        {/* Contact Info Section */}
        <section className="container-padding py-16 md:py-24 bg-surface-secondary">
          <div className="max-w-7xl mx-auto">
            <ContactInfo />
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Newsletter Section */}
        <section className="container-padding py-16 md:py-24 bg-surface-primary">
          <div className="max-w-7xl mx-auto">
            <Newsletter />
          </div>
        </section>
      </div>
    </main>
  );
}
