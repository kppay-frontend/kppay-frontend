import React from 'react';
import { FeatureCard } from '@/types';
import { FileText, BookOpen, Headphones } from 'lucide-react';

const FeaturedResources = () => {
  const featuredCards = [
    {
      badge: 'Guide',
      readTime: '10 min read',
      title: 'Getting Started with KP Pay',
      description:
        'Complete guide to implementing payments in your application',
    },
    {
      badge: 'Tutorial',
      readTime: '15 min read',
      title: 'Mobile Money Integration',
      description: 'Accept mobile money payment across africa',
    },
    {
      badge: 'Tutorial',
      readTime: '20 min read',
      title: 'Security and compliance',
      description: 'Best Practices for secure payment processing',
    },
  ];

  const documentationCards = [
    {
      title: 'Payment Fundamentals',
      description: 'Secure online shopping with instant virtual cards',
    },
    {
      title: 'Security Best Practices',
      description: 'Filter by customer segments, products, or regions',
    },
    {
      title: 'Compliance Guides',
      description: 'Secure online shopping with instant virtual cards',
    },
    {
      title: 'Video Tutorials',
      description: 'Filter by customer segments, products, or regions',
    },
  ];

  const learningCentreCards = [
    {
      title: 'Payment Fundamentals',
      description: 'Secure online shopping with instant virtual cards',
    },
    {
      title: 'Security Best Practices',
      description: 'Filter by customer segments, products, or regions',
    },
    {
      title: 'Compliance Guides',
      description: 'Secure online shopping with instant virtual cards',
    },
    {
      title: 'Video Tutorials',
      description: 'Filter by customer segments, products, or regions',
    },
  ];

  const supportCommunityCards = [
    {
      title: 'Help Center',
      description: 'Secure online shopping with instant virtual cards',
    },
    {
      title: 'Developer Community',
      description: 'Filter by customer segments, products, or regions',
    },
    {
      title: 'Status Page',
      description: 'Secure online shopping with instant virtual cards',
    },
    {
      title: 'Contact Support',
      description: 'Filter by customer segments, products, or regions',
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-surface-primary">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="heading-bebas text-4xl md:text-5xl lg:text-6xl text-text-primary text-center mb-12 md:mb-16">
          Featured Resources
        </h2>

        {/* Featured Cards - Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {featuredCards.map((card, index) => (
            <div
              key={index}
              className="bg-surface-primary border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {card.badge}
                </span>
                <span className="text-text-tertiary text-xs">
                  {card.readTime}
                </span>
              </div>
              <h3 className="text-brand-primary text-lg font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-text-secondary text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Documentation Section */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-start gap-4 mb-8">
            <FileText className="w-10 h-10 text-brand-primary flex-shrink-0" />
            <div>
              <h3 className="text-text-primary text-2xl md:text-3xl font-semibold mb-1">
                Documentation
              </h3>
              <p className="text-text-secondary text-sm">
                Comprehensive guides and API references
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentationCards.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Learning Centre Section */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-start gap-4 mb-8">
            <BookOpen className="w-10 h-10 text-brand-primary flex-shrink-0" />
            <div>
              <h3 className="text-text-primary text-2xl md:text-3xl font-semibold mb-1">
                Learning Centre
              </h3>
              <p className="text-text-secondary text-sm">
                Educational content and best practices
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningCentreCards.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Support and Community Section */}
        <div>
          <div className="flex items-start gap-4 mb-8">
            <Headphones className="w-10 h-10 text-brand-primary flex-shrink-0" />
            <div>
              <h3 className="text-text-primary text-2xl md:text-3xl font-semibold mb-1">
                Support and Community
              </h3>
              <p className="text-text-secondary text-sm">
                Get help and connect with other developers
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCommunityCards.map((card, index) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;
