import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section className="hiw bg-[#ECE6E8] text-black py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            The way design <span className="italic">should’ve</span> been done in the first place
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
            <p className="mb-4">Subscribe to a plan & request as many designs as you’d like.</p>
            <Image
              src="/assets/images/subscribeIcon.svg"
              alt="Subscribe Icon"
              width={100}
              height={100}
            />
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Request</h3>
            <p className="mb-4">Request whatever you'd like, from mobile apps to logos.</p>
            <div className="space-y-2 text-sm">
              <div className="flex flex-wrap gap-2">
                {["Mobile apps", "Presentations", "Logos", "Social Media", "Email"].map((item, idx) => (
                  <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Webflow", "Print design", "Packaging", "Ad creative", "Landing pages"].map((item, idx) => (
                  <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Branding", "Email", "Display ads", "Packaging", "User interface"].map((item, idx) => (
                  <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <Image
                src="/assets/images/smileIcon.png"
                alt="Smile Icon"
                width={80}
                height={80}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl font-semibold mb-2">Receive</h3>
            <p className="mb-4">Receive your design within two business days on average.</p>
            <div className="relative h-32 w-full flex justify-center items-center">
              <div className="absolute w-24 h-32 bg-gray-200 transform rotate-[9deg] rounded-md"></div>
              <div className="absolute w-24 h-32 bg-gray-300 rounded-md"></div>
              <div className="absolute w-24 h-32 bg-gray-400 transform -rotate-[23deg] rounded-md"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 flex-wrap mt-16">
          {["nectar.svg",
            "bmc.svg",
            "beehiiv.svg",
            "laravel.svg",
            "xfinity.svg"].map((img, idx) => (
            <Image
              key={idx}
              src={`/assets/images/${img}`}
              alt={`Client Logo ${idx + 1}`}
              width={120}
              height={60}
            />
          ))}
        </div>

        {/* Grid lines */}
        <div className="absolute top-0 bottom-0 left-6 w-px bg-black opacity-20"></div>
        <div className="absolute top-0 bottom-0 right-6 w-px bg-black opacity-20"></div>
      </div>
    </section>
  );
}