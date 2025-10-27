// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { images } from '@/types';

export default function Footer2() {
  return (
    <footer className="bg-surface-primary py-16">
      <div className="max-w-7xl mx-auto border-t border-border-secondary container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
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

          {/* Legal Column - Extended with more policies */}
          <div>
            <h3 className="font-semibold text-text-secondary mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/legal/terms"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/intellectual-property"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Intellectual Property Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/cookie-policy"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/aml"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Anti-Money Laundry Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/anti-corruption"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Anti-Corruption Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/gift-policy"
                  className="text-text-main-dark hover:text-brand-primary transition-colors text-sm"
                >
                  Gift Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
