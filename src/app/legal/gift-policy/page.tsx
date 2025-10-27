/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import {
  Gift,
  AlertCircle,
  Calendar,
  ChevronRight,
  Download,
  Menu,
  X,
} from 'lucide-react';

export default function GiftPolicy() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false);
    }
  };

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'general-principles', title: '1. General Principles' },
    { id: 'authorized-individuals', title: '2. Authorized Individuals' },
    { id: 'types-of-gifts', title: '3. Types of Authorized Gifts' },
    { id: 'financial-thresholds', title: '4. Financial Thresholds' },
    { id: 'exclusions', title: '5. Exclusions and Prohibitions' },
    { id: 'compliance', title: '6. Compliance Requirements' },
    { id: 'declaration', title: '7. Gift Declaration' },
    { id: 'consequences', title: '8. Consequences of Non-Compliance' },
  ];

  return (
    <div className="min-h-screen bg-surface-secondary">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-secondary via-brand-primary to-brand-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <Gift className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Gift Policy
                  </h1>
                  <p className="text-text-inverse-secondary text-lg mt-2">
                    KPpay Platform
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-inverse-primary">
                <Calendar className="w-4 h-4" />
                <span>Recipients: All KPpay Employees</span>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1qJCy5q_lyvAPBdTpKO_U0PTjiD2EDsN5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-surface-secondary transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all self-start"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="bg-info/10 border-l-4 border-info sticky top-0 z-20 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto container-padding py-4">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-info flex-shrink-0 mt-0.5" />
            <div className="text-sm text-text-primary">
              <strong className="font-semibold">Important:</strong> This policy
              formalizes clear guidelines that align with ethical and regulatory
              standards, ensuring transparency in interactions and preserving
              KPpay's reputation.
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto container-padding py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-6 left-6 bg-brand-primary text-white p-4 rounded-full shadow-xl z-30 hover:bg-brand-secondary transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Sidebar Navigation */}
          <aside
            className={`lg:col-span-1 ${
              sidebarOpen
                ? 'fixed inset-0 z-20 bg-black/50 lg:relative lg:bg-transparent'
                : 'hidden lg:block'
            }`}
          >
            <div
              className={`${
                sidebarOpen
                  ? 'absolute right-0 top-0 bottom-0 w-80 overflow-y-auto'
                  : ''
              } lg:sticky lg:top-24`}
            >
              <div className="bg-white rounded-lg shadow-md p-6 h-full lg:h-auto">
                <h3 className="font-semibold text-text-primary mb-4 text-sm uppercase tracking-wide">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 group hover:bg-surface-secondary text-text-secondary"
                    >
                      <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:text-text-primary">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              {/* Introduction */}
              <section id="introduction" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  Introduction
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    In the course of business relationships with clients,
                    partners, and institutional contacts, KPpay may offer or
                    receive gifts. This practice, accepted in many sectors, also
                    serves as a marketing and communication tool. However, it
                    must adhere to reasonable limits to maintain KPpay's
                    integrity.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    This policy formalizes clear guidelines that align with
                    ethical and regulatory standards, ensuring transparency in
                    interactions and preserving KPpay's reputation. The
                    following rules aim to strengthen relationships without
                    compromising our integrity.
                  </p>
                </div>
              </section>

              {/* Section 1: General Principles */}
              <section id="general-principles" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  1. General Principles
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    KPpay's gift policy is based on four principles:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-surface-secondary p-4 rounded-lg">
                      <h3 className="font-semibold text-text-primary mb-2">
                        Transparency
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        Gifts or invitations must be given or received openly,
                        without intent to influence professional decisions or
                        create a sense of obligation.
                      </p>
                    </div>
                    <div className="bg-surface-secondary p-4 rounded-lg">
                      <h3 className="font-semibold text-text-primary mb-2">
                        Compliance
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        Gifts must comply with applicable regulations and
                        KPpay's ethical and anti-corruption policies.
                      </p>
                    </div>
                    <div className="bg-surface-secondary p-4 rounded-lg">
                      <h3 className="font-semibold text-text-primary mb-2">
                        Occasional
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        Gifts or invitations should be occasional, not
                        recurring.
                      </p>
                    </div>
                    <div className="bg-surface-secondary p-4 rounded-lg">
                      <h3 className="font-semibold text-text-primary mb-2">
                        Non-Sensitive Period
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        Gifts or invitations should not be given or received
                        during "sensitive" periods, such as tendering,
                        negotiations, or contract renewals.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Authorized Individuals */}
              <section
                id="authorized-individuals"
                className="mb-12 scroll-mt-24"
              >
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  2. Authorized Individuals
                </h2>
                <div className="prose prose-lg max-w-none">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Gifts Offered
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      The following individuals are authorized to offer gifts on
                      behalf of KPpay:
                    </p>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>CEO</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Department Directors, with hierarchical validation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Service Managers, with superior's validation
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Gifts Received
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      All KPpay employees may receive promotional gifts
                      (goodies) within defined financial limits, except for
                      executive members, who may only receive low-value
                      promotional items.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Types of Authorized Gifts */}
              <section id="types-of-gifts" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  3. Types of Authorized Gifts
                </h2>
                <div className="prose prose-lg max-w-none">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Gifts Offered
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      Authorized gifts include:
                    </p>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Promotional goodies (pens, mugs, calendars, etc.)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>KPpay products and services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Professional invitations: meals, events, or
                          entertainment in a strictly professional context
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Gifts Received
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      Employees may accept the following types of gifts:
                    </p>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>Low-value promotional items</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Products or services from partners or clients, within
                          financial limits
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Professional invitations: meals, events, or
                          entertainment related to KPpay's activities
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4: Financial Thresholds */}
              <section id="financial-thresholds" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  4. Financial Thresholds
                </h2>
                <div className="prose prose-lg max-w-none">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Gifts Offered
                    </h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Promotional items and KPpay products: maximum 50,000
                          FCFA per client/partner per year
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Professional invitations (meals, events): limit of
                          50,000 FCFA per person per year
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Gifts Received
                    </h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Promotional items: maximum 50,000 FCFA per employee
                          per year
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Products/Services from partners or clients: maximum
                          50,000 FCFA per employee per year
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Professional invitations: limit of 50,000 FCFA per
                          employee per year
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-warning/10 border-l-4 border-warning p-4 rounded">
                    <p className="text-text-secondary leading-relaxed">
                      <strong className="font-semibold">Note:</strong>{' '}
                      Thresholds are cumulative over one fiscal year per client
                      or partner.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Exclusions and Prohibitions */}
              <section id="exclusions" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  5. Exclusions and Prohibitions
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Certain practices are excluded from KPpay's gift policy:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-error/10 border-l-4 border-error p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2">
                        Prohibitions
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        Cash, electronic gifts (USBs, connected devices), and
                        privately paid trips by partners are strictly
                        prohibited.
                      </p>
                    </div>
                    <div className="bg-error/10 border-l-4 border-error p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2">
                        Conflicts of Interest
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        Employees must not accept gifts that could create
                        dependence on a supplier or partner.
                      </p>
                    </div>
                    <div className="bg-error/10 border-l-4 border-error p-4 rounded">
                      <h3 className="font-semibold text-text-primary mb-2">
                        Sensitive Periods
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        Gifts received during tendering or negotiation must be
                        refused and returned.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Compliance Requirements */}
              <section id="compliance" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  6. Compliance Requirements
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary mt-1 font-bold">
                        •
                      </span>
                      <div>
                        <strong className="font-semibold text-text-primary">
                          Limited Acceptance:
                        </strong>{' '}
                        Gifts may only be accepted if they are of moderate value
                        and occasional.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary mt-1 font-bold">
                        •
                      </span>
                      <div>
                        <strong className="font-semibold text-text-primary">
                          Justified Invitations:
                        </strong>{' '}
                        Invitations should be related to professional objectives
                        (e.g., promoting services or contract signing).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary mt-1 font-bold">
                        •
                      </span>
                      <div>
                        <strong className="font-semibold text-text-primary">
                          Mandatory Declaration:
                        </strong>{' '}
                        All gifts, whether accepted or refused, must be recorded
                        in the gift register.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 7: Gift Declaration */}
              <section id="declaration" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  7. Gift Declaration
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary mt-1 font-bold">
                        •
                      </span>
                      <div>
                        <strong className="font-semibold text-text-primary">
                          Declaration Obligation:
                        </strong>{' '}
                        Employees must declare any gift or invitation offered or
                        received to their assistant.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary mt-1 font-bold">
                        •
                      </span>
                      <div>
                        <strong className="font-semibold text-text-primary">
                          Gift Register:
                        </strong>{' '}
                        Assistants keep a manual or digital record for tracking
                        purposes.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8: Consequences of Non-Compliance */}
              <section id="consequences" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  8. Consequences of Non-Compliance
                </h2>
                <div className="prose prose-lg max-w-none">
                  <div className="bg-error/10 border-l-4 border-error p-6 rounded">
                    <p className="text-text-secondary leading-relaxed">
                      Non-compliance with KPpay's gift policy constitutes a
                      professional violation and may result in disciplinary
                      actions, including potential legal proceedings.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
