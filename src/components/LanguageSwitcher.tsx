// src/components/LanguageSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages: string;
              layout: number;
              autoDisplay: boolean;
            },
            elementId: string
          ): void;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
    googleTranslateElementInit: () => void;
  }
}

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', abbr: 'EN' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', abbr: 'FR' },
  { code: 'pt', name: 'Português', flag: '🇵🇹', abbr: 'PT' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', abbr: 'AR' },
];

// Get initial language from cookie outside component
function getInitialLanguage(): string {
  if (typeof window === 'undefined') return 'en';

  const value = `; ${document.cookie}`;
  const parts = value.split(`; googtrans=`);
  if (parts.length === 2) {
    const cookie = parts.pop()?.split(';').shift();
    if (cookie) {
      const lang = cookie.split('/')[2];
      if (lang && languages.some((l) => l.code === lang)) {
        return lang;
      }
    }
  }
  return 'en';
}

export default function LanguageSwitcher({
  variant = 'desktop',
}: {
  variant?: 'desktop' | 'mobile';
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(getInitialLanguage);

  useEffect(() => {
    // Load Google Translate script
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,fr,pt,ar',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    // Use setTimeout to defer the side effects
    setTimeout(() => {
      // Set cookie for Google Translate
      document.cookie = `googtrans=/en/${langCode}; path=/`;

      // Reload page to apply translation
      window.location.reload();
    }, 0);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  const isMobile = variant === 'mobile';

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      {/* Custom Language Switcher - Add notranslate class to prevent translation */}
      <div className="relative notranslate">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 rounded-lg transition-colors ${
            isMobile
              ? 'px-2 py-2 bg-surface-primary border border-border-secondary'
              : 'px-3 py-2 hover:bg-surface-secondary'
          }`}
          style={
            isMobile
              ? {
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                }
              : undefined
          }
          aria-label="Change language"
        >
          {isMobile ? (
            <span className="text-xs font-semibold text-text-primary">
              {currentLanguage.abbr}
            </span>
          ) : (
            <>
              <Globe className="w-4 h-4 text-text-secondary" />
              <span className="text-sm font-medium text-text-primary hidden sm:inline">
                {currentLanguage.flag} {currentLanguage.name}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </>
          )}
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div
              className="absolute right-0 mt-2 w-48 bg-surface-primary border border-border-secondary rounded-lg overflow-hidden z-50"
              style={{
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
              }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-4 py-3 hover:bg-surface-secondary transition-colors flex items-center gap-3 ${
                    currentLang === lang.code ? 'bg-surface-secondary' : ''
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-sm font-medium text-text-primary">
                    {lang.name}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Hide Google Translate toolbar */}
      <style jsx global>{`
        .goog-te-banner-frame,
        .goog-te-balloon-frame,
        .goog-tooltip {
          display: none !important;
        }

        body {
          top: 0 !important;
        }

        .skiptranslate {
          display: none !important;
        }
      `}</style>
    </>
  );
}
