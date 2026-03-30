import { Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5582860/pexels-photo-5582860.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <div className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Trusted Since 1990
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Wardha's Trusted LED TV<br />
            <span className="text-orange-400">Repair Experts</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            30+ Years of Excellence in TV Repair Services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToContact}
              className="group bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Book Your Repair Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
            </button>

            <a
              href="tel:+919876543210"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6">
              <div className="text-4xl font-bold text-orange-400">30+</div>
              <div className="text-white mt-2">Years Experience</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6">
              <div className="text-4xl font-bold text-orange-400">5000+</div>
              <div className="text-white mt-2">TVs Repaired</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6">
              <div className="text-4xl font-bold text-orange-400">100%</div>
              <div className="text-white mt-2">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
