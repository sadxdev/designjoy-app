export default function MembershipBenefits() {
  return (
    <section className="services py-12 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl leading-relaxed">
            First launched in 2017, Designjoy <span className="italic">revolutionized</span> the design
            industry with its subscription-based model. To this day, Designjoy is run entirely by{' '}
            <a
              href="https://x.com/BrettFromDJ"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Brett
            </a>
            . Designjoy doesn’t hire extra designers or outsource work—instead, it focuses on delivering
            top-notch quality to a limited roster of clients at a time.
          </p>
        </div>

        <div className="text-center">
          <div className="uppercase text-sm font-semibold text-gray-600 tracking-widest mb-2">
            Membership benefits
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            It's <span className="italic">"you'll never go back"</span> <span>better</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with
            designs delivered so fast you won't want to go anywhere else.
          </p>
        </div>
      </div>
    </section>
  );
}
