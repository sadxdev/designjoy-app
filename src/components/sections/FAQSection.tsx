"use client";

import { faqs } from "@/constants/faqs";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pricing bg-white text-black" id="faq">
      <div className="container faqq px-6 mx-auto">
        <div className="inner-container">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            <div className="faq__left lg:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-italics italic">Frequently</span> asked questions
              </h1>
              <div className="div-block-13 space-y-4 mt-8">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="faq__row border-b border-gray-200 pb-4 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="faq__question m-b-0 font-semibold text-lg">
                        {faq.question}
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19b8_chevron-down%201.svg"
                        alt="toggle"
                        className={`faq__arrow h-4 transform transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                    {openIndex === index && (
                      <p className="faq__answer mt-2 text-sm text-gray-700">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="faq__card opacity-100 lg:w-1/3">
              <div className="faq__card-inner">
                <img
                  loading="lazy"
                  src="/assets/images/smile-lazy.png"
                  alt=""
                  className="image-11"
                />
                <div className="hero__member-card-header _2">
                  Book a 15-min intro call
                </div>
                <a href="#book" className="button w-button mt-4">
                  Book a call
                </a>
              </div>
              <a
                href="mailto:hello@designjoy.co?subject=Website%20Inquiry"
                className="hero__member-card-call w-inline-block mt-6"
              >
                <div className="hero__member-card-call-left flex items-center">
                  <img
                    loading="lazy"
                    src="/assets/images/mail.png"
                    alt=""
                    className="image-2 send mr-3"
                  />
                  <div>
                    <div>Prefer to email?</div>
                    <div className="hero__member-card-call-schedule">
                      hello@designjoy.co
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="/assets/images/right-arrow.svg"
                  alt=""
                  className="ml-2"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </section>
  );
}