// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button, images } from '@/types';
import {
  Menu,
  X,
  ChevronDown,
  Smartphone,
  CreditCard,
  RotateCcw,
  Store,
  Building2,
  User,
  PiggyBank,
  Coins,
  BarChart3,
  FileText,
  Receipt,
  Shield,
} from 'lucide-react';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface HeaderProps {
  variant?: 'light' | 'dark';
}

export default function Header({ variant = 'light' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const isLight = variant === 'light';

  const handleMegaMenuEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    const timeout = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
    setCloseTimeout(timeout);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [closeTimeout]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(false);
  };

  const openMobileSubMenu = () => {
    setMobileSubMenuOpen(true);
  };

  const closeMobileSubMenu = () => {
    setMobileSubMenuOpen(false);
  };

  const useSolidBg = isScrolled || mobileMenuOpen;
  const useWhiteText = !isScrolled && !isLight && !mobileMenuOpen;

  return (
    <>
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes slide-down-fade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-down-fade {
          animation: slide-down-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-up {
          animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-left {
          animation: slide-left 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <nav
          className={`header-container transition-all duration-300 ${
            useSolidBg ? 'bg-surface-secondary' : 'header-light-bg'
          }`}
        >
          <div
            className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${
              isScrolled ? 'py-2' : 'py-3'
            }`}
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <div
                  className="relative transition-all duration-300"
                  style={{
                    width: isScrolled ? '120px' : '140px',
                    height: isScrolled ? '32px' : '40px',
                  }}
                >
                  <Image
                    src={
                      useWhiteText ? images.logos.white : images.logos.primary
                    }
                    alt="EP PAY Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              <div className="hidden md:flex items-center gap-4 lg:gap-8">
                <Link
                  href="/about"
                  className={`font-medium text-xs lg:text-sm transition-colors ${
                    useWhiteText
                      ? 'text-text-main-white hover:text-brand-primary'
                      : 'text-text-primary hover:text-brand-primary'
                  }`}
                >
                  About
                </Link>

                <div
                  className="relative flex items-center gap-1"
                  onMouseEnter={handleMegaMenuEnter}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <span
                    className={`font-medium text-xs lg:text-sm transition-colors cursor-default ${
                      useWhiteText
                        ? 'text-text-main-white hover:text-brand-primary'
                        : 'text-text-primary hover:text-brand-primary'
                    }`}
                  >
                    Product
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-all duration-300 ${
                      megaMenuOpen ? 'rotate-180' : ''
                    } ${
                      useWhiteText
                        ? 'text-text-main-white'
                        : 'text-text-primary'
                    }`}
                  />
                </div>

                <Link
                  href="/individual"
                  className={`font-medium text-xs lg:text-sm transition-colors ${
                    useWhiteText
                      ? 'text-text-main-white hover:text-brand-primary'
                      : 'text-text-primary hover:text-brand-primary'
                  }`}
                >
                  Individual
                </Link>

                <Link
                  href="/enterprise"
                  className={`font-medium text-xs lg:text-sm transition-colors ${
                    useWhiteText
                      ? 'text-text-main-white hover:text-brand-primary'
                      : 'text-text-primary hover:text-brand-primary'
                  }`}
                >
                  Enterprise
                </Link>

                <Link
                  href="/resources"
                  className={`font-medium text-xs lg:text-sm transition-colors ${
                    useWhiteText
                      ? 'text-text-main-white hover:text-brand-primary'
                      : 'text-text-primary hover:text-brand-primary'
                  }`}
                >
                  Resources
                </Link>
              </div>

              <div className="hidden md:flex items-center gap-3">
                {/* Language Switcher */}
                <LanguageSwitcher />

                <Button
                  variant={useWhiteText ? 'outlined-white' : 'outlined'}
                  size="sm"
                  href="/login"
                >
                  Log in
                </Button>
                <Button variant="primary" size="sm" href="/signup">
                  Sign up
                </Button>
              </div>

              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="text-text-primary w-6 h-6" />
                ) : (
                  <Menu
                    className={`w-6 h-6 ${
                      useWhiteText
                        ? 'text-text-main-white'
                        : 'text-text-main-dark'
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Desktop Mega Menu */}
      {megaMenuOpen && !mobileMenuOpen && (
        <>
          {/* Backdrop - clicking it closes the menu */}
          <div
            className="fixed inset-0 z-40 bg-text-main-dark/20 animate-fade-in"
            onClick={() => {
              if (closeTimeout) clearTimeout(closeTimeout);
              setMegaMenuOpen(false);
            }}
          />

          {/* Mega Menu Content */}
          <div
            className="hidden md:block fixed top-[78px] left-1/2 -translate-x-1/2 w-full max-w-7xl rounded-lg border border-border-secondary bg-surface-primary shadow-xl animate-slide-down-fade z-50"
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className="px-12 py-12">
              <div className="relative mb-8">
                <div className="grid grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-2">
                      PAYMENTS
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      Accept payments online and in person
                    </p>
                  </div>
                  <div>
                    <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-2">
                      BANKING
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      Digital banking and financial services
                    </p>
                  </div>
                  <div>
                    <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-2">
                      FINANCIAL SERVICES
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      Advanced financial tools and analytics
                    </p>
                  </div>
                </div>
                <hr className="absolute bottom-0 left-0 right-0 border-t border-border-secondary" />
              </div>

              <div className="grid grid-cols-3 gap-12">
                {/* Payments Column */}
                <div className="space-y-6">
                  <Link
                    href="/payments/online"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <CreditCard className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Online Payments
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Accept payments online and in person
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/payments/point-of-sale"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Store className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Point of Sale
                        </h4>
                        <p className="text-sm text-text-secondary">
                          In-person payment processing
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/payments/mobile-payments"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Smartphone className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Mobile Payments
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Accept payments on mobile devices
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/payments/recurring-billing"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <RotateCcw className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Recurring Billing
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Automated subscription management
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Banking Column */}
                <div className="space-y-6">
                  <Link
                    href="/banking/business-accounts"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Building2 className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Business Accounts
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Digital banking and financial services
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/banking/personal-banking"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <User className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Personal Banking
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Modern personal banking solutions
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/banking/savings-investments"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <PiggyBank className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Savings & Investments
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Grow your money with high-yield accounts
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/banking/loans-credit"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Coins className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Loans & Credit
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Quick access to business and personal credit
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Financial Services Column */}
                <div className="space-y-6">
                  <Link
                    href="/financial-services/analytics"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <BarChart3 className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Analytics
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Deep insights into your financial data
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/financial-services/reporting"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <FileText className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Reporting
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Comprehensive financial reporting
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/financial-services/tax-services"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Receipt className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Tax Services
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Automated tax preparation and filing
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/financial-services/compliance"
                    className="block group"
                    onClick={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                      setMegaMenuOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <Shield className="w-5 h-5 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          Compliance
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Stay compliant with financial regulations
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile Main Menu */}
      {mobileMenuOpen && !mobileSubMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-surface-primary z-[40] animate-slide-up">
          <div className="flex flex-col h-full justify-center px-6 pb-8 pt-24">
            <div className="flex flex-col gap-8 text-2xl px-6">
              <Link
                href="/about"
                className="font-medium text-text-primary hover:text-brand-primary transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <button
                onClick={openMobileSubMenu}
                className="font-medium flex items-center justify-between text-text-primary hover:text-brand-primary transition-colors"
              >
                Product
                <ChevronDown className="w-6 h-6 -rotate-90" />
              </button>
              <Link
                href="/individual"
                className="font-medium text-text-primary hover:text-brand-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Individual
              </Link>
              <Link
                href="/enterprise"
                className="font-medium text-text-primary hover:text-brand-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Enterprise
              </Link>
              <Link
                href="/resources"
                className="font-medium text-text-primary hover:text-brand-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
            </div>

            <div className="mt-auto flex flex-col gap-4 px-6">
              {/* Language Switcher for Mobile */}
              <div className="mb-4">
                <LanguageSwitcher />
              </div>

              <Button variant="outlined" size="md" href="/login" fullWidth>
                Log in
              </Button>
              <Button variant="primary" size="md" href="/signup" fullWidth>
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Submenu */}
      {mobileSubMenuOpen && mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-surface-primary z-[60] overflow-y-auto animate-slide-left">
          <div className="sticky top-0 bg-surface-primary border-b border-border-secondary z-10">
            <div className="flex items-center justify-between px-6 py-5">
              <button
                onClick={closeMobileSubMenu}
                className="flex items-center gap-2 text-text-primary hover:text-brand-primary transition-colors"
                aria-label="Go back"
              >
                <ChevronDown className="w-5 h-5 rotate-90" />
                <span className="font-medium text-lg">Back</span>
              </button>
              <button
                onClick={closeMobileMenu}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-text-primary" />
              </button>
            </div>
          </div>

          <div className="px-6 py-8 space-y-10">
            {/* Payments */}
            <div>
              <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-3">
                PAYMENTS
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Accept payments online and in person
              </p>
              <div className="space-y-6">
                {[
                  {
                    href: '/payments/online',
                    icon: CreditCard,
                    title: 'Online Payments',
                    desc: 'Accept payments online and in person',
                  },
                  {
                    href: '/payments/point-of-sale',
                    icon: Store,
                    title: 'Point of Sale',
                    desc: 'In-person payment processing',
                  },
                  {
                    href: '/payments/mobile-payments',
                    icon: Smartphone,
                    title: 'Mobile Payments',
                    desc: 'Accept payments on mobile devices',
                  },
                  {
                    href: '/payments/recurring-billing',
                    icon: RotateCcw,
                    title: 'Recurring Billing',
                    desc: 'Automated subscription management',
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block group"
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <item.icon className="w-6 h-6 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Banking */}
            <div>
              <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-3">
                BANKING
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Digital banking and financial services
              </p>
              <div className="space-y-6">
                {[
                  {
                    href: '/banking/business-accounts',
                    icon: Building2,
                    title: 'Business Accounts',
                    desc: 'Digital banking and financial services',
                  },
                  {
                    href: '/banking/personal-banking',
                    icon: User,
                    title: 'Personal Banking',
                    desc: 'Modern personal banking solutions',
                  },
                  {
                    href: '/banking/savings-investments',
                    icon: PiggyBank,
                    title: 'Savings & Investments',
                    desc: 'Grow your money with high-yield accounts',
                  },
                  {
                    href: '/banking/loans-credit',
                    icon: Coins,
                    title: 'Loans & Credit',
                    desc: 'Quick access to business and personal credit',
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block group"
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <item.icon className="w-6 h-6 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Financial Services */}
            <div>
              <h3 className="text-text-tertiary uppercase text-xs font-semibold tracking-wider mb-3">
                FINANCIAL SERVICES
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Advanced financial tools and analytics
              </p>
              <div className="space-y-6">
                {[
                  {
                    href: '/financial-services/analytics',
                    icon: BarChart3,
                    title: 'Analytics',
                    desc: 'Deep insights into your financial data',
                  },
                  {
                    href: '/financial-services/reporting',
                    icon: FileText,
                    title: 'Reporting',
                    desc: 'Comprehensive financial reporting',
                  },
                  {
                    href: '/financial-services/tax-services',
                    icon: Receipt,
                    title: 'Tax Services',
                    desc: 'Automated tax preparation and filing',
                  },
                  {
                    href: '/financial-services/compliance',
                    icon: Shield,
                    title: 'Compliance',
                    desc: 'Stay compliant with financial regulations',
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block group"
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors shrink-0">
                        <item.icon className="w-6 h-6 text-brand-primary group-hover:text-text-main-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
