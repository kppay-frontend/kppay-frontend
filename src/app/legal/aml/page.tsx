/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import {
  ShieldCheck,
  AlertCircle,
  Calendar,
  ChevronRight,
  Download,
  Menu,
  X,
} from 'lucide-react';

export default function AMLCFTPolicy() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false);
    }
  };

  const sections = [
    { id: 'purpose', title: '1. Purpose and Scope' },
    { id: 'principles', title: '2. Guiding Principles' },
    { id: 'kyc', title: '3. Customer Identification and Verification (KYC)' },
    { id: 'risk-assessment', title: '4. Risk-Based Assessment and Management' },
    {
      id: 'monitoring',
      title: '5. Transaction Monitoring and Suspicious Activity Reporting',
    },
    {
      id: 'sanctions',
      title: '6. Targeted Financial Sanctions and Asset Freezing',
    },
    { id: 'wmd', title: '7. Anti-Proliferation Financing of WMD' },
    { id: 'training', title: '8. Training and Awareness' },
    { id: 'roles', title: '9. Roles and Responsibilities' },
    { id: 'cooperation', title: '10. National and International Cooperation' },
    { id: 'controls', title: '11. Internal Controls and Audit' },
    { id: 'conclusion', title: '12. Conclusion' },
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
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    AML/CFT/APWMD Policy
                  </h1>
                  <p className="text-text-inverse-secondary text-lg mt-2">
                    KPpay Platform
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-inverse-primary">
                <Calendar className="w-4 h-4" />
                <span>
                  Anti-Money Laundering, Counter-Terrorist Financing, and
                  Anti-Proliferation of Weapons of Mass Destruction
                </span>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1b2IV203PwXLYv3eE1C93vtxD4nEC3qe_/view?usp=drive_link"
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
              applies to all KPpay operations, subsidiaries, employees, and
              partners in line with international standards.
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
              {/* Section 1: Purpose and Scope */}
              <section id="purpose" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  1. Purpose and Scope
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    This policy outlines KPpay's commitment to preventing and
                    detecting illegal activities such as money laundering,
                    terrorist financing, and the proliferation of weapons of
                    mass destruction. It applies to all KPpay operations,
                    subsidiaries, employees, and partners in line with
                    international standards established by the FATF, GIABA, and
                    other relevant authorities.
                  </p>
                </div>
              </section>

              {/* Section 2: Guiding Principles */}
              <section id="principles" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  2. Guiding Principles
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  KPpay implements this policy with the following principles:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Prevention:
                        </strong>{' '}
                        Assess and mitigate AML/CFT/APWMD risks in all company
                        operations.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Detection:
                        </strong>{' '}
                        Actively monitor and identify suspicious transactions.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Reporting:
                        </strong>{' '}
                        Notify competent authorities of any suspicious activity
                        in compliance with local and international regulations.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Collaboration:
                        </strong>{' '}
                        Facilitate information sharing with regulators and
                        authorities responsible for financial crime prevention.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Customer Identification and Verification (KYC) */}
              <section id="kyc" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  3. Customer Identification and Verification (KYC)
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  KPpay applies a rigorous KYC process for all clients:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Initial Identification:
                        </strong>{' '}
                        Verify customers' identities before establishing
                        business relationships.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Beneficial Ownership:
                        </strong>{' '}
                        Identify and verify beneficial owners, especially for
                        corporate entities and complex structures.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Politically Exposed Persons (PEPs):
                        </strong>{' '}
                        Apply enhanced measures for PEPs, including their family
                        members and close associates.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Ongoing Updates:
                        </strong>{' '}
                        Regularly update customer information to ensure accuracy
                        and compliance with standards.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4: Risk-Based Assessment and Management */}
              <section id="risk-assessment" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  4. Risk-Based Assessment and Management
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  KPpay's approach to AML/CFT/APWMD is risk-based:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Risk Assessment:
                        </strong>{' '}
                        Conduct periodic risk assessments of clients, products,
                        and geographic regions.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Customer Categorization:
                        </strong>{' '}
                        Classify clients by risk levels (low, medium, high) and
                        adjust control measures accordingly.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Resource Allocation:
                        </strong>{' '}
                        Prioritize resources towards high-risk areas and
                        entities for AML/CFT/APWMD risks.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5: Transaction Monitoring and Suspicious Activity Reporting */}
              <section id="monitoring" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  5. Transaction Monitoring and Suspicious Activity Reporting
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  KPpay continuously monitors transactions to detect suspicious
                  activities:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Automated Alerts:
                        </strong>{' '}
                        Use analytical tools to flag unusual or suspicious
                        transactions.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Suspicious Activity Reporting (SAR):
                        </strong>{' '}
                        Report any suspicious operations to relevant
                        authorities, following local regulations.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Attempted Transactions:
                        </strong>{' '}
                        Extend reporting obligations to attempted but incomplete
                        suspicious transactions.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6: Targeted Financial Sanctions and Asset Freezing */}
              <section id="sanctions" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  6. Targeted Financial Sanctions and Asset Freezing
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  In line with international standards, KPpay enforces targeted
                  financial sanctions set by authorities:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Asset Freezing:
                        </strong>{' '}
                        Take measures to freeze assets of designated persons or
                        entities involved in AML/CFT/APWMD.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Transaction Screening:
                        </strong>{' '}
                        Monitor transactions involving sanctioned individuals,
                        entities, or countries.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Compliance with Freezing Orders:
                        </strong>{' '}
                        Ensure compliance with asset freezing and seizure
                        requirements.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 7: Anti-Proliferation Financing of WMD */}
              <section id="wmd" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  7. Anti-Proliferation Financing of Weapons of Mass Destruction
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  KPpay implements stringent measures to avoid any involvement
                  in proliferation financing:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Screening Sensitive Transactions:
                        </strong>{' '}
                        Review transactions involving goods or services that
                        could be used for WMD proliferation.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Sanction Compliance:
                        </strong>{' '}
                        Rigorously enforce sanctions related to WMD
                        proliferation financing in accordance with FATF
                        recommendations.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8: Training and Awareness */}
              <section id="training" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  8. Training and Awareness
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  KPpay invests in employee training and awareness to ensure
                  effective AML/CFT/APWMD policy application:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Initial and Ongoing Training:
                        </strong>{' '}
                        Provide regular AML/CFT/APWMD training for all
                        employees, covering transaction handling and red flag
                        identification.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Partner Awareness:
                        </strong>{' '}
                        Educate business partners and service providers on
                        KPpay's AML/CFT/APWMD commitments.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Compliance Culture:
                        </strong>{' '}
                        Promote a culture of compliance so that all employees
                        understand their role in preventing financial crime
                        risks.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 9: Roles and Responsibilities */}
              <section id="roles" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  9. Roles and Responsibilities
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Responsibilities for implementing this policy are clearly
                  defined:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Leadership Responsibility:
                        </strong>{' '}
                        KPpay's Compliance Committee is responsible for
                        developing, implementing, and updating this policy.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Employee Responsibility:
                        </strong>{' '}
                        All employees must adhere to AML/CFT/APWMD procedures
                        and report any suspicious activity.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Compliance Officer:
                        </strong>{' '}
                        A dedicated compliance officer supervises internal
                        controls for AML/CFT/APWMD.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 10: National and International Cooperation */}
              <section id="cooperation" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  10. National and International Cooperation
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  KPpay recognizes the importance of cooperation in combating
                  financial crime:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Judicial Cooperation:
                        </strong>{' '}
                        Collaborate with judicial authorities and international
                        bodies for information sharing and investigations.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Information Exchange:
                        </strong>{' '}
                        Participate in information exchange networks for AML/CFT
                        purposes globally.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Inter-Institutional Cooperation:
                        </strong>{' '}
                        Work with other financial and non-financial institutions
                        to ensure a coordinated approach.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 11: Internal Controls and Audit */}
              <section id="controls" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  11. Internal Controls and Audit
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Regular internal controls and audits are performed to assess
                  the effectiveness of this policy:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Periodic Checks:
                        </strong>{' '}
                        Review operations for compliance with AML/CFT/APWMD
                        procedures.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Independent Audits:
                        </strong>{' '}
                        Engage external auditors to evaluate and validate
                        KPpay's AML/CFT/APWMD controls.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Continuous Improvement:
                        </strong>{' '}
                        Adapt processes based on audit recommendations and
                        regulatory changes.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 12: Conclusion */}
              <section id="conclusion" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  12. Conclusion
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    KPpay is firmly committed to supporting the global fight
                    against money laundering, terrorist financing, and weapons
                    proliferation. Through this policy and in collaboration with
                    regulators, KPpay actively contributes to protecting the
                    integrity and stability of the global financial system.
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
