'use client';
import React from 'react';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import LogoWithArc from '../LogoWithArc';

export default function FooterSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '15min' });
      cal('ui', {
        theme: 'dark',
        hideEventTypeDetails: true,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <section
      className="text-white pt-24 pb-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black overflow-hidden"
      id="book"
    >
      {/* Grid lines (white) */}
      <div className="absolute top-0 bottom-0 left-[0.875rem] sm:left-[1.25rem] md:left-[2.75rem] xl:left-1/2 xl:-translate-x-[640px] w-px bg-white opacity-20 z-0 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[0.875rem] sm:right-[1.25rem] md:right-[2.75rem] xl:left-1/2 xl:translate-x-[640px] w-px bg-white opacity-20 z-0 pointer-events-none" />

      {/* Main container */}
      <div className="relative z-10 max-w-[90vw] sm:max-w-[560px] md:max-w-[768px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          {/* Left column */}
          <div className="lg:w-2/3 w-full">
            <LogoWithArc inverted />
            <h1 className="text-[40px] md:text-[64px] font-bold leading-tight tracking-tight mt-6">
              See if Designjoy is the right fit for you{' '}
              <span className="italic">(it totally is)</span>
            </h1>
            <p className="mt-6 text-lg max-w-lg text-gray-300">
              Schedule a quick, 15 minute guided tour through Designjoy.
            </p>
          </div>

          {/* Right column */}
          <div className="lg:w-1/3 w-full lg:mt-0 mt-10">
            <div className="bg-black rounded-xl p-6 shadow-2xl h-full text-white">
              <div className="h-full border-2 border-pink-600 rounded-xl bg-pink-950 p-6 text-pink-600 shadow-2xl bg-blend-overlay">
                <p className="mb-4 text-sm">
                  Designjoy is experiencing a high volume of bookings, so slots
                  are limited. For faster service, email{' '}
                  <a
                    href="mailto:hello@designjoy.co"
                    className="text-pink-600 underline"
                  >
                    {' '}
                    hello@designjoy.co{' '}
                  </a>{' '}
                  for a same-day response.
                </p>
              </div>
              <div className="w-full h-[674px] overflow-hidden rounded-lg bg-[#171717]">
                <Cal
                  namespace="15min"
                  calLink="sadik-rajabasha-ftszqz/15min"
                  style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                  config={{ layout: 'month_view', theme: 'dark' }}
                />
              </div>

              {/* Smiley shown in right column for desktop only */}
              <img
                src="/assets/images/smiley-faces.svg"
                alt="Smiley faces"
                className="mt-10 w-full max-w-xl hidden lg:block"
              />
            </div>
          </div>
        </div>

        {/* Mobile-only Smiley (after layout) */}
        <div className="mt-20 block lg:hidden">
          <img
            src="/assets/images/smiley-faces.svg"
            alt="Smiley faces"
            className="w-full max-w-xl mx-auto"
          />
        </div>

        {/* Footer Info (always last) */}
        <div className="mt-8 text-sm flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-8 items-center text-center text-gray-300">
          <span className="font-semibold text-white">
            Headquartered in Phoenix, Arizona
          </span>
          <a
            href="https://brettwill1025.notion.site/Terms-Conditions-4901d894656448a69c4c4e04d40d3bbc"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of service
          </a>
          <a
            href="https://brettwill1025.notion.site/DesignJoy-Privacy-Policy-0011594d80724a68821940237f9f7b02"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
