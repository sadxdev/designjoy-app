"use client";

export default function FooterSection() {
  return (
    <section className="footer bg-black text-white pt-24 pb-16 px-6 w-full" id="book">
      <div className="w-full bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

            {/* Left content */}
            <div className="lg:w-1/2">
              <img
                src="/assets/images/designjoy-logo.svg"
                alt="Designjoy Logo"
                className="mb-6 w-32"
              />
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                See if Designjoy is the right fit for you{" "}
                <span className="italic">(it totally is)</span>
              </h1>
              <p className="mt-4 text-base max-w-md text-gray-300">
                Schedule a quick, 15 minute guided tour through Designjoy.
              </p>
              <img
                src="/assets/images/smiley-faces.svg"
                alt="Smiley faces"
                className="mt-10 w-full max-w-md"
              />
              <div className="mt-8 text-sm space-x-6 flex flex-wrap gap-2 items-center">
                <span className="font-semibold block">Headquartered in Phoenix, Arizona</span>
                <a
                  href="https://brettwill1025.notion.site/Terms-Conditions-4901d894656448a69c4c4e04d40d3bbc"
                  className="underline"
                  target="_blank"
                >
                  Terms of service
                </a>
                <a
                  href="https://brettwill1025.notion.site/DesignJoy-Privacy-Policy-0011594d80724a68821940237f9f7b02"
                  className="underline"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-xl p-6 shadow-xl h-full text-black">
                <p className="text-sm mb-4">
                  Designjoy is experiencing a high volume of bookings, so slots are limited.
                  For faster service, email{" "}
                  <a
                    href="mailto:hello@designjoy.co"
                    className="text-pink-600 underline"
                  >
                    hello@designjoy.co
                  </a>{" "}
                  for a same-day response.
                </p>
                <div className="w-full h-[674px] overflow-hidden rounded-lg">
                  <iframe
                    className="w-full h-full border-0"
                    title="Book a 15-min intro call"
                    src="https://app.cal.com/designjoy/15min/embed?embed=15min&layout=month_view&theme=dark&embedType=inline"
                    loading="lazy"
                    allow="clipboard-write; fullscreen"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}