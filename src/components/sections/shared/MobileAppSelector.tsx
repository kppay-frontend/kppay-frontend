// src/components/sections/shared/MobileAppSelector.tsx
import { cn, MobileAppCard, MobileAppOption } from '@/types';

interface MobileAppSelectorProps {
  heading?: string;
  options: MobileAppOption[];
  className?: string;
}

export const MobileAppSelector: React.FC<MobileAppSelectorProps> = ({
  heading = 'Perfect For Any Mobile App',
  options,
  className,
}) => {
  return (
    <section
      className={cn('py-12 md:py-16 lg:py-20 bg-surface-primary', className)}
    >
      <div className="container-padding max-w-7xl mx-auto">
        <h2 className="heading-bebas text-4xl md:text-5xl text-center text-text-primary mb-10 md:mb-12">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option) => (
            <MobileAppCard key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
};
