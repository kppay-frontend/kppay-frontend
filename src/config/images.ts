// config/images.ts

// CDN Base URL
const CDN_BASE_URL =
  process.env.NEXT_PUBLIC_CDN_URL || 'https://res.cloudinary.com/dfwty72r9';

export const images = {
  // Logos
  logos: {
    primary: `${CDN_BASE_URL}/image/upload/v1761386939/logo-primary_j3dggp.png`,
    white: `${CDN_BASE_URL}/image/upload/v1761386938/logo-secondary_hyuj8m.png`,
    icon: `${CDN_BASE_URL}/logos/logo-icon.svg`,
  },

  // Hero section images
  hero: {
    gradient: `${CDN_BASE_URL}/image/upload/v1761381285/mainGradient_ts84qy.png`,
    main: `${CDN_BASE_URL}/image/upload/v1761388414/heroImage_tj2zy6.png`,
  },

  // homepage section images
  homepage: {
    map: `${CDN_BASE_URL}/image/upload/v1761388729/map_ngenmt.webp`,
    setup1: `${CDN_BASE_URL}/image/upload/v1761391731/image1_ohjudc.png`,
    setup2: `${CDN_BASE_URL}/image/upload/v1761391731/image2_dgiwhx.png`,
    setup3: `${CDN_BASE_URL}/image/upload/v1761391730/image3_mpgqkb.png`,
  },

  // Testimonials images
  testimonials: {
    Ashley: `${CDN_BASE_URL}/image/upload/v1761537133/Ashley_Cooper_bny1pp.webp`,
    Jack: `${CDN_BASE_URL}/image/upload/v1761537132/Jackline_Fare_yisupz.webp`,
    John: `${CDN_BASE_URL}/image/upload/v1761537132/John_Cooper_sqt0nm.webp`,
    quotes: `${CDN_BASE_URL}/image/upload/v1761538152/quotes_ntk1te.png`,
  },

  // Features/Services icons
  features: {
    api: `${CDN_BASE_URL}/image/upload/v1761541049/api_h6wqy3.webp`,
    currency: `${CDN_BASE_URL}/image/upload/v1761541049/currency_vvtarw.webp`,
    flexible: `${CDN_BASE_URL}/image/upload/v1761541049/flexible_asewnw.webp`,
    payment: `${CDN_BASE_URL}/image/upload/v1761541049/payment_pppa8v.webp`,
  },

  // Partners logos
  partners: {
    ecobank: `${CDN_BASE_URL}/image/upload/v1761540380/ecobank_kxq90x.webp`,
    desjardins: `${CDN_BASE_URL}/image/upload/v1761540378/Desjardins_rreump.webp`,
    airtel: `${CDN_BASE_URL}/image/upload/v1761540386/airtel_eols4k.webp`,
    safaricom: `${CDN_BASE_URL}/image/upload/v1761540383/safaricom_lka7tb.webp`,
    nsia: `${CDN_BASE_URL}/image/upload/v1761540379/nsia_q4dwkv.webp`,
    bsic: `${CDN_BASE_URL}/image/upload/v1761540389/biic_r4bsly.webp`,
    mtn: `${CDN_BASE_URL}/image/upload/v1761540379/mtn_vvickz.webp`,
    vodacom: `${CDN_BASE_URL}/image/upload/v1761540385/vodacom_kowncv.webp`,
    bni: `${CDN_BASE_URL}/image/upload/v1761540378/bni_ueitnn.webp`,
    cic: `${CDN_BASE_URL}/image/upload/v1761540378/cic_bws1l9.webp`,
    bankOfAfrica: `${CDN_BASE_URL}/image/upload/v1761540386/bankofafrica_qlkus9.webp`,
    orange: `${CDN_BASE_URL}/image/upload/v1761540382/orange_ogh3mo.webp`,
    biic: `${CDN_BASE_URL}/image/upload/v1761540389/biic_r4bsly.webp`,
    societeGenerale: `${CDN_BASE_URL}/image/upload/v1761540384/societe_fgaobs.webp`,
    flutterwave: `${CDN_BASE_URL}/image/upload/v1761540379/flutterwave_pniu23.webp`,
    banqueAtlantique: `${CDN_BASE_URL}/image/upload/v1761540387/banque_suolnf.webp`,
  },

  // Services icons
  services: {
    secure:
      'https://res.cloudinary.com/dfwty72r9/image/upload/v1761542953/secure_ga4mvp.webp',
    wallet:
      'https://res.cloudinary.com/dfwty72r9/image/upload/v1761542953/wallet_vvqght.webp',
    bill: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1761542953/bill_ryz6nl.webp',
    ecommerce:
      'https://res.cloudinary.com/dfwty72r9/image/upload/v1761542953/ecommerce_iyplvz.webp',
  },

  // Background images
  backgrounds: {
    gradient1: `${CDN_BASE_URL}/backgrounds/gradient-1.webp`,
    pattern1: `${CDN_BASE_URL}/backgrounds/pattern-1.svg`,
  },

  // Team/About images
  team: {},

  // Icons/Illustrations
  illustrations: {},

  // Placeholder images (for development)
  placeholders: {
    square: 'https://placehold.co/600x600/e5e5e5/737373?text=Image',
    landscape: 'https://placehold.co/1200x600/e5e5e5/737373?text=Image',
    portrait: 'https://placehold.co/600x900/e5e5e5/737373?text=Image',
  },
};

// Helper function to get optimized image URL with transformations
export function getOptimizedImage(
  path: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpg' | 'png';
  }
) {
  // For Cloudinary optimization
  const params = new URLSearchParams();

  if (options?.width) params.append('w', options.width.toString());
  if (options?.height) params.append('h', options.height.toString());
  if (options?.quality) params.append('q', options.quality.toString());
  if (options?.format) params.append('f', options.format);

  return `${path}?${params.toString()}`;
}

export default images;
