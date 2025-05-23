export default function PricingTestimonials() {
  return (
    <section className="pricing py-16 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
            <p className="text-lg italic mb-4">
              "Designjoy shows that they know the art of subtlety."
            </p>
            <div className="flex justify-center">
              <img
                src="/assets/images/webflow-logo.svg"
                alt="Webflow logo"
                className="h-10"
              />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
            <p className="text-lg italic mb-4">
              "Design is everything, and these guys have nailed it."
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <img
                src="/assets/images/kevin.png"
                alt="Kevin O'Leary"
                className="h-12 w-12 rounded-full"
              />
              <div className="text-left">
                <div className="font-semibold">Kevin O'Leary</div>
                <div className="text-sm text-gray-600">Shark Tank</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
