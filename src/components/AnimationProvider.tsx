// src/components/AnimationProvider.tsx
'use client';

import { ReactNode, useEffect } from 'react';

interface AnimationProviderProps {
  children: ReactNode;
}

export default function AnimationProvider({
  children,
}: AnimationProviderProps) {
  useEffect(() => {
    // Only target standard HTML elements that definitely exist
    const selectors = [
      'section', // All sections
      'article', // Article content
      'main > div', // Direct children of main
      'h1', // Main headings
      'h2', // Subheadings
      'h3', // Tertiary headings
      'p', // Paragraphs
      'ul', // Unordered lists
      'ol', // Ordered lists
      'img', // Images
      'form', // Forms
      'video', // Videos
      'figure', // Figures
      'blockquote', // Quotes
      'div[class*="grid"] > *', // Children of any grid container
      'div[class*="flex"] > *', // Children of any flex container
    ];

    // Elements to EXCLUDE from animation
    const excludeSelectors = [
      'a', // Links
      'button', // Buttons
      'input', // Form inputs
      'select', // Dropdowns
      'textarea', // Text areas
      'label', // Labels
      'span', // Small inline elements
      'strong', // Bold text
      'em', // Italic text
      'i', // Icons (usually)
      'b', // Bold
      'small', // Small text
      'code', // Code snippets
      'header *', // Everything in header
      'nav *', // Everything in nav
      'footer *', // Everything in footer
      '[data-no-animate]', // Manual override
    ];

    const shouldExclude = (element: Element) => {
      // Check if element matches any exclude selector
      return excludeSelectors.some((selector) => {
        try {
          return (
            element.matches(selector) || element.closest(selector.split(' ')[0])
          );
        } catch {
          return false;
        }
      });
    };

    const elementsToAnimate: Element[] = [];

    // Collect all elements matching our selectors
    selectors.forEach((selector) => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          // Only add if:
          // 1. Not already in list
          // 2. Not excluded
          // 3. Inside main content area (not in header/nav/footer)
          const isInMain = el.closest('main');

          if (
            !elementsToAnimate.includes(el) &&
            !shouldExclude(el) &&
            isInMain
          ) {
            // Check if element has meaningful content or is an image/video
            const hasContent =
              el.textContent?.trim() ||
              el.tagName === 'IMG' ||
              el.tagName === 'VIDEO' ||
              el.tagName === 'FIGURE' ||
              el.children.length > 0;

            if (hasContent) {
              elementsToAnimate.push(el);

              // Add animation attribute based on element type
              if (el.tagName === 'IMG' || el.tagName === 'VIDEO') {
                el.setAttribute('data-animate', 'scale');
              } else if (
                el.tagName === 'H1' ||
                el.tagName === 'H2' ||
                el.tagName === 'H3'
              ) {
                el.setAttribute('data-animate', 'fade-up');
              } else {
                // Simple fade-up for everything else
                el.setAttribute('data-animate', 'fade-up');
              }
            }
          }
        });
      } catch (error) {
        console.warn(`Selector "${selector}" failed:`, error);
      }
    });

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    // Observe all elements
    elementsToAnimate.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      observer.disconnect();
      // Remove attributes on cleanup
      elementsToAnimate.forEach((el) => {
        el.removeAttribute('data-animate');
        el.classList.remove('animate-in');
      });
    };
  }, []);

  return <>{children}</>;
}
