/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import {
  Shield,
  AlertCircle,
  Calendar,
  ChevronRight,
  Download,
  Menu,
  X,
} from 'lucide-react';

export default function IntellectualPropertyPolicy() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false);
    }
  };

  const sections = [
    { id: 'preamble', title: '1. Preamble' },
    { id: 'objectives', title: '2. Policy Objectives' },
    { id: 'definitions', title: '3. Definitions' },
    { id: 'scope', title: '4. Scope' },
    { id: 'ownership', title: '5. Ownership of Intellectual Property' },
    { id: 'use', title: '6. Use of Intellectual Property' },
    { id: 'protection', title: '7. Protection of Intellectual Property' },
    {
      id: 'responsibilities',
      title: '8. Responsibilities of Employees and Users',
    },
    { id: 'third-party', title: '9. Third-Party Intellectual Property' },
    { id: 'enforcement', title: '10. Enforcement and Sanctions' },
    { id: 'law', title: '11. Applicable Law and Jurisdiction' },
    { id: 'implementation', title: '12. Implementation and Updates' },
    // { id: 'contact', title: '13. Contact' },
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
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Intellectual Property Policy
                  </h1>
                  <p className="text-text-inverse-secondary text-lg mt-2">
                    KPpay Platform
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-inverse-primary">
                <Calendar className="w-4 h-4" />
                <span>Effective Date: January 2024</span>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1n3-eyz16D_iZNFFMeAajd9nEMbGt_A1J/view?usp=drive_link"
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
              protects KPpay's intellectual property assets and establishes
              guidelines for their use by employees, partners, and users.
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto container-padding py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-6 right-6 bg-brand-primary text-white p-4 rounded-full shadow-xl z-30 hover:bg-brand-secondary transition-colors"
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
              {/* Section 1: Preamble */}
              <section id="preamble" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  1. Preamble
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    KPpay, recognizes that the protection of its intellectual
                    property is essential to its business success and
                    competitive advantage. This policy aims to protect our
                    intellectual assets, including our platform, websites,
                    applications, and any other content created or owned by
                    KPpay.
                  </p>
                </div>
              </section>

              {/* Section 2: Policy Objectives */}
              <section id="objectives" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  2. Policy Objectives
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    This policy aims to:
                  </p>
                  <ul className="space-y-3">
                    <li className="text-text-secondary leading-relaxed flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <span>
                        Protect KPpay's intellectual property assets from
                        unauthorized use, disclosure, or misappropriation.
                      </span>
                    </li>
                    <li className="text-text-secondary leading-relaxed flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <span>
                        Ensure respect for third-party intellectual property
                        rights in all our activities.
                      </span>
                    </li>
                    <li className="text-text-secondary leading-relaxed flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <span>
                        Raise awareness among employees, partners, and users
                        about the importance of intellectual property and their
                        related responsibilities.
                      </span>
                    </li>
                    <li className="text-text-secondary leading-relaxed flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <span>
                        Establish clear procedures for managing, protecting, and
                        using intellectual property.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Definitions */}
              <section id="definitions" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  3. Definitions
                </h2>
                <div className="space-y-6 ml-4">
                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Intellectual Property (IP):
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      Refers to all rights related to intellectual creations,
                      including, but not limited to, patents, trademarks,
                      designs, copyrights, trade secrets, software, databases,
                      domain names, and any other innovation or creation
                      protected by law.
                    </p>
                  </div>

                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Employee:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      Any person working for KPpay or K-POLYGONE FINTCH SARL,
                      including salaried staff, contractors, consultants,
                      interns, and any other person associated with the company.
                    </p>
                  </div>

                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Confidential Information:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      All non-public information, including trade secrets,
                      technical, financial, commercial, marketing data, and any
                      other sensitive information belonging to KPpay.
                    </p>
                  </div>

                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Users:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      Any person accessing KPpay's websites, applications, or
                      services, including customers, visitors, and partners.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Scope */}
              <section id="scope" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  4. Scope
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    This policy applies to:
                  </p>
                  <ul className="space-y-3">
                    <li className="text-text-secondary leading-relaxed flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <span>
                        All employees of KPpay and K-POLYGONE FINTCH SARL.
                      </span>
                    </li>
                    <li className="text-text-secondary leading-relaxed flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <span>
                        Contractors, consultants, and business partners.
                      </span>
                    </li>
                    <li className="text-text-secondary leading-relaxed flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <span>
                        Users of KPpay's websites, applications, and services.
                      </span>
                    </li>
                    <li className="text-text-secondary leading-relaxed flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <span>
                        Any person having access to the company's intellectual
                        property assets.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5: Ownership */}
              <section id="ownership" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  5. Ownership of Intellectual Property
                </h2>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      5.1
                    </span>
                    KPpay's Assets
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Website and Application Content:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        The general structure of the websites www.kppay.com,
                        www.k-polygone.com, and www.k-polygone.org, as well as
                        texts, graphics, images, sounds, videos, logos,
                        databases, software, and any other component of these
                        sites and applications are the exclusive property of
                        KPpay or its partners.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Legal Protection:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        These elements are protected by applicable laws and
                        regulations related to intellectual property, including
                        the Intellectual Property Code of Togo.
                      </p>
                    </div>
                  </div>
                </article>

                <article>
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      5.2
                    </span>
                    Employee Creations
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Works Created Within Employment:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Any invention, work, creation, development, or
                        improvement made by an employee within the scope of
                        their duties or using KPpay's resources is the exclusive
                        property of KPpay.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Assignment of Rights:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Employees irrevocably assign to KPpay all rights,
                        titles, and interests in such creations, including
                        intellectual property rights, without time or
                        territorial limitations.
                      </p>
                    </div>
                  </div>
                </article>
              </section>

              {/* Section 6: Use */}
              <section id="use" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  6. Use of Intellectual Property
                </h2>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      6.1
                    </span>
                    Use by Users
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Limited License:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay grants users a limited, non-exclusive, and
                        non-transferable license to access and use the websites
                        and applications for personal, non-commercial use, in
                        accordance with the terms of use.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Restrictions:
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium text-text-primary mb-2">
                            Prohibition of Unauthorized Reproduction:
                          </p>
                          <p className="text-text-secondary leading-relaxed">
                            Any reproduction, representation, modification,
                            publication, or adaptation of all or part of the
                            elements of the website or application, by any
                            means, is prohibited without prior written
                            authorization from KPpay.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-text-primary mb-2">
                            Hypertext Links:
                          </p>
                          <p className="text-text-secondary leading-relaxed">
                            Creating deep hypertext links to any element of
                            KPpay's sites other than the homepage is prohibited
                            without prior written consent from KPpay.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      6.2
                    </span>
                    Internal Use
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Authorized Access:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Employees may use KPpay's intellectual property assets
                        only within the scope of their duties and for business
                        purposes.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Protection of Information:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Employees must protect confidential information and not
                        disclose it without prior authorization.
                      </p>
                    </div>
                  </div>
                </article>

                <article>
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      6.3
                    </span>
                    Use by Third Parties
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Licenses and Agreements:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Any use of KPpay's intellectual property by third
                        parties must be subject to a written agreement, such as
                        a license or partnership contract, approved by
                        management.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Compliance with Terms:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Authorized third parties must strictly comply with the
                        terms of use defined in the corresponding agreements.
                      </p>
                    </div>
                  </div>
                </article>
              </section>

              {/* Section 7: Protection */}
              <section id="protection" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  7. Protection of Intellectual Property
                </h2>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      7.1
                    </span>
                    Prohibition of Unauthorized Reproduction
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Penalties for Violation:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Any unauthorized representation or reproduction of
                        KPpay's sites, by any means, is strictly prohibited and
                        constitutes an infringement punishable by law.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Legal Actions:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Offenders are subject to civil and criminal penalties,
                        and KPpay reserves the right to initiate legal
                        proceedings to enforce its rights.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      7.2
                    </span>
                    Security Measures
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Access Controls:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Implement measures to control access to confidential
                        information and intellectual property assets.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Training:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Provide training to employees on best practices in
                        intellectual property protection.
                      </p>
                    </div>
                  </div>
                </article>

                <article>
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      7.3
                    </span>
                    Monitoring and Investigation
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Monitoring:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay actively monitors the use of its intellectual
                        property to detect any infringement or unauthorized use.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Investigation:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Any suspected infringement will be thoroughly
                        investigated, and appropriate actions will be taken.
                      </p>
                    </div>
                  </div>
                </article>
              </section>

              {/* Section 8: Responsibilities */}
              <section id="responsibilities" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  8. Responsibilities of Employees and Users
                </h2>
                <div className="space-y-6 ml-4">
                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Compliance:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      Employees and users must comply with this policy and
                      applicable intellectual property laws.
                    </p>
                  </div>

                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Reporting:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      Immediately report to management any infringement or
                      suspected infringement of KPpay's or third-party
                      intellectual property rights.
                    </p>
                  </div>

                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Confidentiality:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      Maintain the confidentiality of sensitive information and
                      not disclose information without authorization.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Third-Party IP */}
              <section id="third-party" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  9. Third-Party Intellectual Property
                </h2>
                <div className="space-y-6 ml-4">
                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Respect for Third-Party Rights:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      KPpay is committed to respecting third-party intellectual
                      property rights. Employees and users must avoid any
                      unauthorized use of intellectual property assets belonging
                      to others.
                    </p>
                  </div>

                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Licenses and Permissions:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      Before using third-party intellectual property, obtain the
                      necessary licenses or permissions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Enforcement */}
              <section id="enforcement" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  10. Enforcement and Sanctions
                </h2>
                <div className="space-y-6 ml-4">
                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Non-Compliance:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      Any violation of this policy may result in disciplinary
                      action for employees, including termination, and legal
                      proceedings for offending users or third parties.
                    </p>
                  </div>

                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Legal Actions:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      KPpay reserves the right to take all legal measures to
                      protect its intellectual property rights.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Law and Jurisdiction */}
              <section id="law" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  11. Applicable Law and Jurisdiction
                </h2>
                <div className="space-y-6 ml-4">
                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Applicable Law:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      This policy is governed by the laws of the Republic of
                      Togo, including provisions related to intellectual
                      property.
                    </p>
                  </div>

                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Jurisdiction:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      Any dispute relating to the interpretation or execution of
                      this policy shall be subject to the exclusive jurisdiction
                      of the courts of Lomé (Togo).
                    </p>
                  </div>

                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Policy Evolution:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      The terms of this policy are subject to change; users and
                      employees are advised to refer to it regularly.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 12: Implementation */}
              <section id="implementation" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  12. Implementation and Updates
                </h2>
                <div className="space-y-6 ml-4">
                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Communication:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      This policy will be communicated to all employees, users,
                      and relevant partners.
                    </p>
                  </div>

                  <div className="border-l-2 border-border-secondary pl-4">
                    <h4 className="font-semibold text-text-primary mb-2">
                      Review:
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      The policy will be regularly reviewed to reflect
                      legislative, regulatory, or strategic changes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 13: Contact */}
              {/* <section id="contact" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  13. Contact
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-6">
                    For any questions regarding this policy or KPpay's
                    intellectual property, please contact:
                  </p>
                  <div className="bg-gradient-to-br from-surface-secondary to-surface-inverse-dark-bg p-6 rounded-lg border-l-4 border-brand-primary">
                    <h3 className="font-semibold text-text-primary text-xl mb-3">
                      Legal Department
                    </h3>
                    <p className="text-text-primary font-medium mb-4">
                      K-POLYGONE FINTCH SARL
                    </p>
                    <div className="space-y-2 text-text-secondary">
                      <p>
                        <span className="font-medium text-text-primary">
                          Registered Office:
                        </span>{' '}
                        Lomé (TOGO), rue Lotiyè, quartier Tokoin Doumassessé
                      </p>
                      <p>
                        <span className="font-medium text-text-primary">
                          Phone:
                        </span>{' '}
                        Company phone
                      </p>
                      <p>
                        <span className="font-medium text-text-primary">
                          Email:
                        </span>{' '}
                        <a
                          href="mailto:kppay@k-polygone.com"
                          className="text-brand-primary hover:underline font-medium"
                        >
                          Company email
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
