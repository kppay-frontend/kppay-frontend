// src/components/layout/Footer.tsx
'use client';

import Link from 'next/link';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { images } from '@/types';

export default function Footer2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-primary py-16">
      <div className="max-w-7xl mx-auto border-t border-border-secondary container-padding py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column - Full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="relative w-[140px] h-[40px]">
                <Image
                  src={images.logos.primary}
                  alt="KPPAY Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-text-secondary text-sm mb-6">
              KPpay, a secured online payment gateway that allows payment in
              multiple currencies easily, safely and securely.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-text-secondary hover:text-brand-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-text-secondary hover:text-brand-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-text-secondary hover:text-brand-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-text-secondary hover:text-brand-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-text-secondary mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/resources-and-documentation"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-text-secondary mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/features"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Help desk
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-text-secondary mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content-writing"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Content Writing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  SEO for Business
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-design"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  UI Design
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Legal links horizontal on all screens */}
        <div className="border-t border-border-secondary pt-6 mt-6">
          {/* Legal Links - Horizontal on all screens */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-text-secondary mb-4">
            <Link
              href="/legal/terms"
              className="hover:text-brand-primary transition-colors"
            >
              Terms and Condition
            </Link>
            <span>|</span>
            <Link
              href="/legal/privacy"
              className="hover:text-brand-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/legal/cookie-policy"
              className="hover:text-brand-primary transition-colors"
            >
              Cookie Policy
            </Link>
            <span>|</span>
            <Link
              href="/legal/intellectual-property"
              className="hover:text-brand-primary transition-colors"
            >
              Intellectual Property Policy
            </Link>
            <span>|</span>
            <Link
              href="/legal/aml"
              className="hover:text-brand-primary transition-colors"
            >
              Anti-Money Laundry Policy
            </Link>
            <span>|</span>
            <Link
              href="/legal/anti-corruption"
              className="hover:text-brand-primary transition-colors"
            >
              Anti-Corruption Policy
            </Link>
            <span>|</span>
            <Link
              href="/legal/gift-policy"
              className="hover:text-brand-primary transition-colors"
            >
              Gift Policy
            </Link>
          </div>

          {/* Copyright - All views */}
          <p className="text-center text-sm text-text-secondary">
            © {currentYear} KPPAY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
