import { Button } from '@/types';
import { Check } from 'lucide-react';

const IndividualPricingCards = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Perfect for getting started with digital banking',
      features: [
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
      ],
      buttonText: 'Get Started Free',
      buttonVariant: 'outlined' as const,
      isPopular: false,
    },
    {
      name: 'Premium',
      price: '$9.99',
      description: 'Enhanced features for active users',
      features: [
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
        'Unlimited Accounts',
        'Dedicated Infrastructure',
      ],
      buttonText: 'Start Premium Trial',
      buttonVariant: 'primary' as const,
      isPopular: true,
    },
    {
      name: 'Elite',
      price: '$24.99',
      description: 'Premium experience with exclusive benefits',
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
      ],
      buttonText: 'Go Elite',
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
            Choose Your Plan
          </h2>
          <p className="text-text-secondary text-base">
            Start free and upgrade as your needs grow
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
                  className={`text-sm font-semibold mb-3 ${
                    plan.isPopular ? 'text-white' : 'text-text-secondary'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-3">
                  <span
                    className={`text-4xl font-bold ${
                      plan.isPopular ? 'text-white' : 'text-text-primary'
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.isPopular ? 'text-white/90' : 'text-text-secondary'
                  }`}
                >
                  {plan.description}
                </p>
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

export default IndividualPricingCards;
