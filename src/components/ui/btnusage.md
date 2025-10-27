import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';

/\*\*

- BUTTON COMPONENT - COMPLETE USAGE DOCUMENTATION
- Now supports Next.js Link for navigation!
  \*/

export default function ButtonUsageExamples() {
return (
<div className="p-8 space-y-12">
{/_ ============================================ 1. LINKS (Navigation) - Add href prop
Uses Next.js Link internally for internal routes
============================================ _/}

      {/* Internal link - uses Next.js Link */}
      <Button variant="primary" size="lg" href="/signup">
        Sign up
      </Button>

      {/* Link with icon */}
      <Button variant="primary" size="lg" href="/get-started">
        Get Started
        <ArrowRight className="w-5 h-5" />
      </Button>

      {/* External link - uses regular <a> tag */}
      <Button variant="primary" href="https://example.com" target="_blank">
        Visit Website
      </Button>

      {/* ============================================
          2. BUTTONS (Actions) - No href prop
          ============================================ */}

      {/* Form submit */}
      <Button variant="primary" size="lg" onClick={() => alert('Submitted!')}>
        Submit Form
      </Button>

      {/* Modal trigger */}
      <Button variant="outlined" onClick={() => console.log('Modal opened')}>
        Open Modal
      </Button>

      {/* Form reset */}
      <Button variant="secondary" type="reset">
        Reset
      </Button>

      {/* ============================================
          3. ALL VARIANTS
          ============================================ */}

      {/* Primary - Blue filled */}
      <Button variant="primary" size="lg">
        Primary Button
      </Button>

      {/* Outlined - Blue border */}
      <Button variant="outlined" size="lg">
        Outlined Button
      </Button>

      {/* Outlined White - For dark backgrounds */}
      <Button variant="outlined-white" size="lg">
        Outlined White
      </Button>

      {/* Ghost - No border */}
      <Button variant="ghost" size="lg">
        Ghost Button
      </Button>

      {/* Secondary */}
      <Button variant="secondary" size="lg">
        Secondary Button
      </Button>

      {/* ============================================
          4. SIZES
          ============================================ */}

      <Button size="sm">Small</Button>
      <Button size="md">Medium (default)</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>

      {/* ============================================
          5. WITH ICONS
          ============================================ */}

      {/* Icon right */}
      <Button variant="primary" size="lg">
        Get Started
        <ArrowRight className="w-5 h-5" />
      </Button>

      {/* Icon left */}
      <Button variant="primary" size="lg">
        <Calendar className="w-5 h-5" />
        Schedule Demo
      </Button>

      {/* Icon only */}
      <Button variant="ghost" size="md">
        <MessageSquare className="w-5 h-5" />
      </Button>

      {/* ============================================
          6. FULL WIDTH
          ============================================ */}

      <Button variant="primary" size="lg" fullWidth>
        Full Width Button
      </Button>

      {/* ============================================
          7. BORDER RADIUS
          ============================================ */}

      <Button rounded="base">Rounded Base</Button>
      <Button rounded="full">Rounded Full (default)</Button>

      {/* ============================================
          8. DISABLED
          ============================================ */}

      <Button variant="primary" disabled>
        Disabled Button
      </Button>

      {/* ============================================
          9. CUSTOM CLASSES
          ============================================ */}

      <Button variant="primary" className="min-w-[200px] shadow-xl">
        Custom Styled
      </Button>

      {/* ============================================
          10. REAL-WORLD EXAMPLES
          ============================================ */}

      {/* Hero CTA buttons */}
      <div className="flex gap-4">
        <Button variant="primary" size="lg" href="/get-started">
          Get started for free
          <ArrowRight className="w-5 h-5" />
        </Button>

        <Button variant="outlined" size="lg" href="/demo">
          Schedule Demo
        </Button>
      </div>

      {/* Auth buttons */}
      <div className="flex gap-4">
        <Button variant="primary" size="lg" href="/signup">
          Sign up
        </Button>

        <Button variant="outlined" size="lg" href="/login">
          Log in
        </Button>
      </div>

      {/* Form buttons */}
      <div className="flex gap-4">
        <Button variant="primary" size="lg" type="submit">
          Send message
        </Button>

        <Button variant="secondary" type="reset">
          Cancel
        </Button>
      </div>

      {/* Newsletter subscribe */}
      <div className="flex gap-4">
        <Button
          variant="primary"
          size="lg"
          onClick={() => console.log('Subscribed')}
        >
          Subscribe
        </Button>
      </div>

      {/* Dark background buttons */}
      <div className="bg-text-main-dark p-8 rounded-xl flex gap-4">
        <Button variant="primary" size="lg" href="/open-account">
          Open Account Now
          <ArrowRight className="w-5 h-5" />
        </Button>

        <Button variant="outlined-white" size="lg" href="/contact">
          Speak to a Specialist
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>

);
}

/\* ============================================
QUICK REFERENCE - COPY & PASTE
============================================

// Internal Navigation (uses Next.js Link)
<Button variant="primary" size="lg" href="/path">
Text
<ArrowRight className="w-5 h-5" />
</Button>

// External Link (uses <a> tag)
<Button variant="primary" size="lg" href="https://example.com" target="_blank">
Visit Website
</Button>

// Action Button
<Button variant="primary" size="lg" onClick={handleClick}>
Text
</Button>

// Props:
variant: "primary" | "outlined" | "outlined-white" | "ghost" | "secondary"
size: "sm" | "md" | "lg" | "xl"
rounded: "base" | "full"
fullWidth: boolean
href: string (makes it a Next.js Link for internal routes, or <a> for external)
onClick: function (makes it a button)
disabled: boolean
className: string
type: "button" | "submit" | "reset"
target: "\_blank" | "\_self" (only for external links)

// Navigation behavior:

- Internal routes (/path): Uses Next.js Link (client-side navigation)
- External routes (https://...): Uses <a> tag (full page navigation)
- No href: Renders as <button>

============================================ \*/
