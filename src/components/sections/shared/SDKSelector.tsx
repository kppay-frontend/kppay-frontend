// src/components/sections/shared/SDKSelector.tsx
import { cn, SDKCard, SDKOption } from '@/types';

interface SDKSelectorProps {
  heading?: string;
  options: SDKOption[];
  className?: string;
}

export const SDKSelector: React.FC<SDKSelectorProps> = ({
  heading = 'Native Mobile SDKs',
  options,
  className,
}) => {
  return (
    <section
      className={cn('py-12 md:py-16 lg:py-20 bg-surface-primary', className)}
    >
      <div className="container-padding max-w-7xl mx-auto">
        <h2 className="heading-bebas text-4xl md:text-5xl text-left text-text-primary mb-10 md:mb-12">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {options.map((option) => (
            <SDKCard key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
};
