import * as React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-primary text-text-main-white hover:bg-brand-secondary active:bg-brand-secondary',
        outlined:
          'bg-transparent border-1 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-text-main-white',
        'outlined-white':
          'bg-transparent border-1 border-text-main-white text-text-main-white hover:bg-text-main-white hover:text-text-main-dark',
        ghost: 'bg-transparent text-brand-primary hover:bg-surface-secondary',
        secondary:
          'bg-surface-secondary text-text-primary hover:bg-border-secondary',
        white:
          'bg-transparent text-text-main-white hover:text-text-inverse-secondary/70',
      },
      size: {
        sm: 'px-4 py-2 text-sm gap-2',
        md: 'px-6 py-3 text-base gap-2',
        lg: 'px-8 py-4 text-lg gap-3',
        xl: 'px-10 py-5 text-xl gap-3',
      },
      rounded: {
        base: 'rounded-lg',
        full: 'rounded-full',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'full',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  target?: '_blank' | '_self';
  children: React.ReactNode;
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      rounded,
      fullWidth,
      href,
      target,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      buttonVariants({
        variant,
        size,
        rounded,
        fullWidth,
        className,
      })
    );

    // If href is provided, render as Link
    if (href) {
      // External link
      if (href.startsWith('http') || href.startsWith('//')) {
        return (
          <a
            href={href}
            target={target || '_blank'}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className={classes}
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {children}
          </a>
        );
      }

      // Internal link
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    // Regular button
    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
