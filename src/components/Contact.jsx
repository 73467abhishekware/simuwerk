export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Let's Discuss Your Project</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-3xl font-semibold mb-4">info@simuwerkindia.com</p>
            <p className="text-3xl font-semibold mb-8">+91 92709 41867</p>
            <p className="text-xl">Pune / Kolhapur • Germany • UK</p>
          </div>

          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-800 rounded-xl" />
            <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-800 rounded-xl" />
            <textarea placeholder="Tell us about your project (Sugar Plant / Pump / Boiler etc.)" rows="6" className="w-full p-4 bg-gray-800 rounded-xl"></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-xl font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}