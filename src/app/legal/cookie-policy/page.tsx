/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import {
  Cookie,
  AlertCircle,
  Calendar,
  ChevronRight,
  Download,
  Menu,
  X,
} from 'lucide-react';

export default function CookieUsePolicy() {
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
    { id: 'what-is-cookie', title: '1. What is a Cookie?' },
    { id: 'types-of-cookies', title: '2. Types of Cookies Used' },
    { id: 'how-we-use', title: '3. How We Use Cookies' },
    { id: 'recording', title: '4. Recording of Communications' },
    { id: 'data-retention', title: '5. Data Retention' },
    { id: 'data-sharing', title: '6. Data Sharing' },
    { id: 'your-rights', title: '7. Your Rights' },
    { id: 'managing-cookies', title: '8. Managing and Controlling Cookies' },
    { id: 'third-party', title: '9. Third-Party Cookies' },
    { id: 'changes', title: '10. Changes to the Cookie Use Policy' },
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
                  <Cookie className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Cookie Use Policy
                  </h1>
                  <p className="text-text-inverse-secondary text-lg mt-2">
                    KPpay Platform
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-inverse-primary">
                <Calendar className="w-4 h-4" />
                <span>Effective Date: October 2024</span>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1Z39nIGCMM-OqpGTw9S5tCjRia0_guUbk/view?usp=drive_link"
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
              <strong className="font-semibold">Important:</strong> By visiting
              our website, you automatically agree that KPpay installs cookies
              on your device in accordance with this policy.
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
                    This Cookie Use Policy explains how KPpay uses cookies and
                    similar technologies on our website and mobile applications.
                    It aims to inform you about the types of cookies we use, the
                    purposes for which we use them, and your choices regarding
                    their use.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    By visiting our website, you automatically agree that KPpay
                    installs cookies on your device in accordance with this
                    policy. We invite you to read it carefully and contact us if
                    you have any questions.
                  </p>
                </div>
              </section>

              {/* Section 1: What is a Cookie */}
              <section id="what-is-cookie" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  1. What is a Cookie?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    Cookies are small information files that are installed in
                    your browser when you visit a website. Cookies have several
                    useful functions, such as remembering your preferences and
                    improving your online experience. We use two main types of
                    cookies: session cookies and permanent cookies.
                  </p>
                </div>
              </section>

              {/* Section 2: Types of Cookies */}
              <section id="types-of-cookies" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  2. Types of Cookies Used
                </h2>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      2.1
                    </span>
                    Session Cookies
                  </h3>

                  <div className="space-y-4">
                    <p className="text-text-secondary leading-relaxed">
                      Session cookies last only for the duration of your visit
                      and are deleted when you close your browser. They allow:
                    </p>
                    <ul className="space-y-3 ml-4">
                      <li className="text-text-secondary leading-relaxed flex gap-3">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>To record the pages you visit.</span>
                      </li>
                      <li className="text-text-secondary leading-relaxed flex gap-3">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>To support site security.</span>
                      </li>
                      <li className="text-text-secondary leading-relaxed flex gap-3">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          To keep an active connection to the Client Area when
                          you navigate through the pages or services of your
                          account.
                        </span>
                      </li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed italic">
                      Session cookies do not contain any personal information
                      that can be used to identify an individual.
                    </p>
                  </div>
                </article>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      2.2
                    </span>
                    Permanent Cookies
                  </h3>

                  <div className="space-y-4">
                    <p className="text-text-secondary leading-relaxed">
                      Permanent cookies persist after you close your browser and
                      allow sites to remember your actions and preferences.
                      KPpay uses permanent cookies to:
                    </p>
                    <ul className="space-y-3 ml-4">
                      <li className="text-text-secondary leading-relaxed flex gap-3">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Remember your username when you log in (cookie called
                          User ID).
                        </span>
                      </li>
                      <li className="text-text-secondary leading-relaxed flex gap-3">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          Analyze client visits to our site (e.g., our cookie
                          called WT_fpc).
                        </span>
                      </li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed">
                      These cookies allow us to understand how clients access
                      and use our site so that we can improve the Client Area
                      service.
                    </p>
                  </div>
                </article>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      2.3
                    </span>
                    Essential Cookies
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    These cookies are essential for the operation of our website
                    and services. They enable you to navigate the site and use
                    its features, such as accessing secure areas. Without these
                    cookies, certain services cannot be provided.
                  </p>
                </article>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      2.4
                    </span>
                    Performance Cookies
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    These cookies collect information about how visitors use our
                    site, for example, which pages are most visited and if error
                    messages are displayed. They help us improve the
                    functionality of the site.
                  </p>
                </article>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      2.5
                    </span>
                    Functionality Cookies
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    These cookies allow the site to remember your choices (such
                    as your username, language, or the region you are in) and
                    provide enhanced, more personalized features.
                  </p>
                </article>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      2.6
                    </span>
                    Targeting or Advertising Cookies
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    These cookies are used to deliver advertisements more
                    relevant to you and your interests. They are also used to
                    limit the number of times you see an advertisement and to
                    measure the effectiveness of advertising campaigns.
                  </p>
                </article>

                <article>
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      2.7
                    </span>
                    Social Media Cookies
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    These cookies enable you to interact with social media
                    platforms such as Facebook, Twitter, LinkedIn. They may be
                    used to allow you to share content on social networks.
                  </p>
                </article>
              </section>

              {/* Section 3: How We Use Cookies */}
              <section id="how-we-use" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  3. How We Use Cookies
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    We use cookies to:
                  </p>
                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Manage your orders and our commercial relationship:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        The information and data concerning you are necessary
                        for the management of your order and our commercial
                        relations. They may be transmitted to companies that
                        contribute to these relations, such as those responsible
                        for executing services and orders, for their management,
                        execution, processing, and payment.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Enhance user experience:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        By remembering your preferences and settings to offer
                        you a personalized experience.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Analyze traffic:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        To understand how users interact with our site and
                        improve our services.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Strengthen security:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        To prevent fraudulent activities and protect your
                        information.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Provide you with relevant advertisements:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Based on your interests and browsing behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Recording */}
              <section id="recording" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  4. Recording of Communications
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    Calls may be recorded to verify that we have executed your
                    orders correctly and to improve the quality of service.
                  </p>
                </div>
              </section>

              {/* Section 5: Data Retention */}
              <section id="data-retention" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  5. Data Retention
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    The information and data collected via cookies are retained
                    for 7 years for security purposes, to comply with legal and
                    regulatory obligations, and to allow us to improve and
                    personalize the services we offer you and the information we
                    send you.
                  </p>
                </div>
              </section>

              {/* Section 6: Data Sharing */}
              <section id="data-sharing" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  6. Data Sharing
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    The data collected may be transmitted to companies that
                    contribute to our commercial relations, such as those
                    responsible for executing services and orders, for their
                    management, execution, processing, and payment.
                  </p>
                </div>
              </section>

              {/* Section 7: Your Rights */}
              <section id="your-rights" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  7. Your Rights
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    In accordance with applicable laws relating to the
                    protection of privacy with regard to personal data, you have
                    the following rights:
                  </p>
                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Right of access:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You can request access to the personal data we hold
                        about you.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Right to rectification:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You can request the correction of inaccurate or
                        incomplete data.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Right to object:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You can object to the processing of your personal data
                        for legitimate reasons.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Right to erasure:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You can request the deletion of your personal data,
                        subject to legal obligations.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Right to restrict processing:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You can request the restriction of processing of your
                        data in certain cases.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Right to data portability:
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You can request to receive your data in a structured,
                        commonly used format.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-surface-secondary p-6 rounded-lg">
                    <p className="text-text-secondary leading-relaxed mb-4">
                      To exercise your rights, simply write to us via your
                      Client Area, indicating your surname, first name, email
                      address, and references. In accordance with the
                      regulations in force, your request must be signed and
                      accompanied by a photocopy of an identity document.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      A response will be provided to you, at the latest, within
                      45 days following the receipt of your request.
                    </p>
                  </div>

                  <p className="text-text-secondary leading-relaxed mt-4">
                    Depending on your choices made during the creation or
                    consultation of your account, you may receive offers from
                    our company, as well as from our partners.
                  </p>
                </div>
              </section>

              {/* Section 8: Managing Cookies */}
              <section id="managing-cookies" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  8. Managing and Controlling Cookies
                </h2>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      8.1
                    </span>
                    Browser Settings
                  </h3>

                  <div className="space-y-4">
                    <p className="text-text-secondary leading-relaxed">
                      Most browsers automatically accept cookies, but you can
                      usually modify your browser settings to refuse cookies if
                      you prefer. Here's how you can manage cookies in common
                      browsers:
                    </p>
                    <ul className="space-y-3 ml-4">
                      <li className="text-text-secondary leading-relaxed flex gap-3">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          <strong>Google Chrome:</strong> Instructions
                        </span>
                      </li>
                      <li className="text-text-secondary leading-relaxed flex gap-3">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          <strong>Mozilla Firefox:</strong> Instructions
                        </span>
                      </li>
                      <li className="text-text-secondary leading-relaxed flex gap-3">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          <strong>Microsoft Edge:</strong> Instructions
                        </span>
                      </li>
                      <li className="text-text-secondary leading-relaxed flex gap-3">
                        <span className="text-brand-primary mt-1">•</span>
                        <span>
                          <strong>Safari:</strong> Instructions
                        </span>
                      </li>
                    </ul>
                    <div className="bg-warning/10 border-l-4 border-warning p-4 rounded-r-lg mt-6">
                      <p className="text-text-secondary leading-relaxed">
                        <strong className="text-text-primary">
                          Please note:
                        </strong>{' '}
                        Blocking cookies may affect your user experience, and
                        some site functionalities may not work properly.
                      </p>
                    </div>
                  </div>
                </article>

                <article>
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      8.2
                    </span>
                    Cookie Management Tools
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    We provide tools to manage your cookie preferences on our
                    site. You can access the cookie settings via the "Cookie
                    Settings" link available at the bottom of the page.
                  </p>
                </article>
              </section>

              {/* Section 9: Third-Party Cookies */}
              <section id="third-party" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  9. Third-Party Cookies
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    We may allow third parties to place cookies on your device
                    for the purposes described above. These third parties may
                    collect information about your online activities over time
                    and across different websites.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    To learn more about these third parties' practices and how
                    to opt out of their cookies, please consult their privacy
                    policies.
                  </p>
                </div>
              </section>

              {/* Section 10: Changes */}
              <section id="changes" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  10. Changes to the Cookie Use Policy
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    We may update this policy from time to time. Any changes
                    will be posted on this page with the updated date. We
                    encourage you to review this page regularly to stay informed
                    about any updates.
                  </p>
                </div>
              </section>

              {/* Section 11: Contact */}
              {/* <section id="contact" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  11. Contact Us
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-6">
                    If you have any questions or concerns regarding this Cookie
                    Use Policy, please contact us:
                  </p>
                  <div className="bg-gradient-to-br from-surface-secondary to-surface-inverse-dark-bg p-6 rounded-lg border-l-4 border-brand-primary">
                    <h3 className="font-semibold text-text-primary text-xl mb-3">
                      Contact Information
                    </h3>
                    <p className="text-text-primary font-medium mb-4">KPpay</p>
                    <div className="space-y-2 text-text-secondary">
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
                      <p>
                        <span className="font-medium text-text-primary">
                          Phone:
                        </span>{' '}
                        Company phone
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
