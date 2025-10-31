import { Button, cn } from '@/types';

// src/components/sections/shared/SDKCard.tsx
interface SDKOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

interface SDKCardProps {
  option: SDKOption;
  className?: string;
}

export const SDKCard: React.FC<SDKCardProps> = ({ option, className }) => {
  const {
    icon,
    title,
    description,
    features,
    ctaText = 'Download SDK',
    ctaHref,
    onCtaClick,
  } = option;

  return (
    <div
      className={cn(
        'bg-surface-secondary rounded-lg p-8 flex flex-col h-full',
        className
      )}
    >
      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center mb-4 text-brand-primary">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-text-primary mb-3">{title}</h3>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-6">
        {description}
      </p>

      {/* Blue Features Section */}
      <div className="bg-brand-primary rounded-lg p-6 flex flex-col flex-grow">
        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-text-main-white text-sm"
            >
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
              </svg>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant="outlined-white"
          size="md"
          fullWidth
          href={ctaHref}
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};
