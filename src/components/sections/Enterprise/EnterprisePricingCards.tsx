import { Button } from '@/types';
import { Check } from 'lucide-react';

const EnterprisePricingCards = () => {
  const plans = [
    {
      name: 'Startup',
      title: 'Contact Us',
      description: 'Perfect for early-stage businesses and entrepreneurs',
      features: [
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
      ],
      buttonText: 'Schedule Demo',
      buttonVariant: 'outlined' as const,
      isPopular: false,
    },
    {
      name: 'Growth',
      title: 'Custom Pricing',
      description:
        'Ideal for growing businesses with higher transaction volumes',
      features: [
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
      ],
      buttonText: 'Request Quote',
      buttonVariant: 'primary' as const,
      isPopular: true,
    },
    {
      name: 'Enterprise Account',
      title: 'Tailored Solutions',
      description:
        'Full-featured solution for large businesses and corporations',
      features: [
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outlined' as const,
      isPopular: false,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-surface-primary">
      <div className="container-padding max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-bebas text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-3">
            Enterprise Solutions
          </h2>
          <p className="text-text-secondary text-base">
            Tailored solutions that grow with your business
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.isPopular
                  ? 'bg-brand-primary text-white shadow-xl'
                  : 'bg-surface-secondary'
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`text-sm font-semibold mb-2 ${
                    plan.isPopular ? 'text-white' : 'text-text-secondary'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-3 leading-relaxed ${
                    plan.isPopular ? 'text-white/80' : 'text-text-secondary'
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-3">
                  <span
                    className={`text-3xl font-bold ${
                      plan.isPopular ? 'text-white' : 'text-text-primary'
                    }`}
                  >
                    {plan.title}
                  </span>
                </div>
              </div>

              {/* Features - 2 Column Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div
                      className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.isPopular ? 'bg-white/20' : 'bg-brand-primary/10'
                      }`}
                    >
                      <Check
                        className={`w-2.5 h-2.5 ${
                          plan.isPopular ? 'text-white' : 'text-brand-primary'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs leading-tight ${
                        plan.isPopular ? 'text-white' : 'text-text-primary'
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.isPopular ? 'primary' : plan.buttonVariant}
                size="lg"
                fullWidth
                rounded="full"
                className={
                  plan.isPopular
                    ? 'bg-white text-brand-primary hover:bg-white/90'
                    : ''
                }
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterprisePricingCards;
