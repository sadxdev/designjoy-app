import { services } from "@/constants/services";

export default function ServicesList() {
  return (
    <section className="services__list py-16 bg-[#f9f9f9] text-black">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all">
              <img src={service.image} alt={service.title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}