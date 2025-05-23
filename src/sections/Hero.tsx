import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero bg-[#ECE6E8] text-black">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Left Section */}
          <div className="flex-1 mb-12 lg:mb-0">
            <div className="mb-6">
              <Link href="#" className="inline-block">
                <Image
                  src="/assets/designjoy-logo.svg"
                  alt="Designjoy Logo"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <div className="flex gap-4 mb-6">
              <Link
                href="https://billing.stripe.com/p/login/14keXT4Qa8wh5k4dQQ"
                target="_blank"
                className="border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
              >
                Login
              </Link>
              <Link
                href="#book"
                className="border border-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition"
              >
                <Image
                  src="/assets/phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                />
                Book a call
              </Link>
              <Link
                href="#pricing"
                className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition"
              >
                See pricing
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Design subscriptions for <span className="italic">everyone</span>
            </h1>
            <p className="text-lg">
              <span className="font-medium">Pause or cancel anytime.</span>
            </p>
          </div>

          {/* Right Card */}
          <div className="flex-1">
            <div className="bg-white shadow-lg rounded-xl p-6 relative">
              <div className="flex items-center gap-2 text-yellow-400 font-semibold mb-4">
                {/* Dummy badge icon */}
                <div className="w-6 h-6 bg-yellow-300 rounded-full"></div>
                Start today
              </div>
              <h2 className="text-2xl font-bold mb-1">Join</h2>
              <h2 className="text-2xl font-bold mb-4">Designjoy</h2>
              <p className="mb-4">One subscription to rule them all.</p>
              <Link
                href="#pricing"
                className="block w-full bg-black text-white text-center py-2 rounded-full mb-4 hover:opacity-90 transition"
              >
                See pricing
              </Link>
              <Link
                href="#book"
                className="flex justify-between items-center border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/callIcon.png"
                    alt="Call Icon"
                    width={24}
                    height={24}
                  />
                  <div>
                    <p>Book a 15-min intro call</p>
                    <p className="text-sm text-gray-600">Schedule now</p>
                  </div>
                </div>
                <Image
                  src="/assets/arrow.svg"
                  alt="Arrow"
                  width={20}
                  height={20}
                />
              </Link>
              <div className="mt-4">
                <Image
                  src="/assets/CardMockup.png"
                  alt="Card Mockup"
                  width={688}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Grid Lines */}
        <div className="absolute top-0 bottom-0 left-6 w-px bg-black opacity-20"></div>
        <div className="absolute top-0 bottom-0 right-6 w-px bg-black opacity-20"></div>
      </div>
    </section>
  );
}
