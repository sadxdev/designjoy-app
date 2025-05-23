export default function RecentWorkMarquee() {
  return (
    <section className="pricing py-20 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Marquee */}
        <div className="mb-12 overflow-hidden relative whitespace-nowrap animate-slide">
          <div className="flex gap-8 w-max">
            {[1, 2].map((loop) => (
              <>
                <img
                  key={`a${loop}`}
                  src="/assets/images/recent-work-logo-1.png"
                  alt="Recent work logo 1"
                  className="h-12"
                />
                <img
                  key={`b${loop}`}
                  src="/assets/images/recent-work-logo-2.png"
                  alt="Recent work logo 2"
                  className="h-12"
                />
                <img
                  key={`c${loop}`}
                  src="/assets/images/recent-work-logo-3.png"
                  alt="Recent work logo 3"
                  className="h-12"
                />
                <img
                  key={`d${loop}`}
                  src="/assets/images/recent-work-logo-4.png"
                  alt="Recent work logo 4"
                  className="h-12"
                />
              </>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
            <img
              src="/assets/images/bmc-1.svg"
              alt="Buy Me A Coffee"
              className="h-10 mx-auto mb-2"
            />
            <p className="font-semibold mb-1">Buy Me A Coffee</p>
            <p className="text-sm text-gray-600">Fintech Product of the Year</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
            <img
              src="/assets/images/switchboard.svg"
              alt="Switchboard"
              className="h-10 mx-auto mb-2"
            />
            <p className="font-semibold mb-1">Switchboard</p>
            <p className="text-sm text-gray-600">Remote Work Product of the Year</p>
          </div>
        </div>

        {/* Heading & Button */}
        <div className="text-left max-w-xl mb-6">
          <h2 className="text-3xl font-bold mb-2">Recent work</h2>
          <p className="text-lg text-gray-700 mb-4">We're talking "Product of the Year" good.</p>
          <a
            href="https://www.figma.com/proto/wbWTRa1jCey4uhInRAmH1r/Latest-Projects?page-id=0%3A1&type=design&node-id=906-2343&viewport=450%2C721%2C0.13&t=ZYPXbxSFD1m31WCi-1&scaling=min-zoom&mode=design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            See recent work
          </a>
        </div>

        {/* Services list pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Web design", "Logos", "Slide decks", "Branding", "Social media", "UI/UX design", "Webflow development", "Mobile apps", "Print design", "Email", "Display ads", "Icons", "Brand guides", "+ more"].map((item, i) => (
            <div
              key={i}
              className="px-4 py-2 bg-gray-100 text-sm rounded-full shadow-sm hover:bg-gray-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
