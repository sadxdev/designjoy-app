export default function PricingSection() {
  return (
    <section id="pricing" className="pricing py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="uppercase text-sm text-gray-600 font-semibold mb-2">PRICING</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            One subscription, <span className="italic">endless possibilities</span>
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 shadow-lg relative">
          <div className="text-center mb-6">
            <div className="text-xl font-bold mb-1">Monthly Club</div>
            <div className="text-xs text-gray-500">PAUSE OR CANCEL ANYTIME</div>
          </div>

          <div className="flex items-end justify-center mb-6">
            <h2 className="text-5xl font-extrabold">$4,995</h2>
            <span className="text-lg text-gray-500 ml-2">/month</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>One request at a time</li>
              <li>Avg. 48 hour delivery</li>
              <li>Unlimited brands</li>
              <li>Webflow development</li>
            </ul>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Unlimited stock photos</li>
              <li>Up to 2 users</li>
              <li>Pause or cancel anytime</li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/fZe28BaiLfOO99e146"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              <img
                src="/assets/images/smile.svg"
                alt="Smile"
                className="h-5"
              />
              Join today
            </a>
          </div>
        </div>

        {/* Feature Promises */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="flex items-start gap-4">
            <img
              src="/assets/images/pause.svg"
              alt="Pause"
              className="h-6"
            />
            <div>
              <h4 className="font-semibold text-lg mb-1">Pause anytime</h4>
              <p className="text-sm text-gray-700">
                Temporarily pause your subscription anytime, no sweat.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img
              src="/assets/images/refund.svg"
              alt="Refund"
              className="h-6 invert"
            />
            <div>
              <h4 className="font-semibold text-lg mb-1">Try it for a week</h4>
              <p className="text-sm text-gray-700">
                Not loving it after a week? Get 75% back, no questions asked.
              </p>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-16 opacity-70">
          {["Nectar-sleep-logo-vector%201.svg", "bmc-full-logo%201.svg", "svg.svg", "Vector.svg", "6203180d8e14605fb2d2c003_Vector%201.svg"].map((logo, i) => (
            <img
              key={i}
              src={`https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec198${6 + i}_${logo}`}
              alt="logo"
              className="h-8"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}