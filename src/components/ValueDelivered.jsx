export default function ValueDelivered() {
  const values = [
    "Reduction in fuel & power consumption",
    "Improved heat recovery & throughput",
    "Lower maintenance & downtime",
    "Faster design validation",
    "Reduced prototype cost",
    "Early failure prediction",
  ];

  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Value Delivered to Our Clients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl text-center text-xl">
              {v}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}