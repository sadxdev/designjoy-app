// src/fonts/fonts.ts
// import localFont from 'next/font/local';

// Local font: Figtree
// export const figtree = localFont({
//   src: [
//     { path: '../fonts/Figtree-Regular.ttf', weight: '400', style: 'normal' },
//     { path: '../fonts/Figtree-Medium.ttf', weight: '500', style: 'normal' },
//     { path: '../fonts/Figtree-Bold.ttf', weight: '700', style: 'normal' },
//   ],
//   variable: '--font-figtree',
//   display: 'swap',
// });

import { Figtree } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Cormorant } from 'next/font/google';

// Google font: Figtree
export const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  variable: '--font-figtree',
  display: 'swap',
});

// Google font: Playfair Display
export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  variable: '--font-playfair',
  display: 'swap',
});

// Google font: Cormorant
export const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['italic', 'normal'],
  variable: '--font-cormorant',
  display: 'swap',
});
