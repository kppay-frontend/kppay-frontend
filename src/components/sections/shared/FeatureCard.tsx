import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  className = '',
}) => {
  return (
    <div
      className={`bg-surface-primary border-2 border-brand-primary rounded-xl p-6 ${className}`}
    >
      <h3 className="text-text-primary text-lg font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
