import { Monitor, Cpu, Zap, Volume2, Home, Settings } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'LED TV Screen Repair',
    description: 'Expert repair for cracked, damaged, or malfunctioning LED screens. We restore your display to perfect condition.',
  },
  {
    icon: Cpu,
    title: 'Motherboard & Circuit Repair',
    description: 'Advanced diagnostics and repair of motherboard issues, circuit problems, and component-level repairs.',
  },
  {
    icon: Zap,
    title: 'Power Supply Issues',
    description: 'Quick resolution of power-related problems including startup issues, random shutdowns, and power failures.',
  },
  {
    icon: Volume2,
    title: 'Sound & Display Problems',
    description: 'Comprehensive troubleshooting for audio issues, display distortions, color problems, and connectivity.',
  },
  {
    icon: Home,
    title: 'Home Service Visits',
    description: 'Convenient doorstep service for diagnosis and minor repairs. We come to you at your convenience.',
  },
  {
    icon: Settings,
    title: 'General Maintenance',
    description: 'Preventive maintenance, software updates, cleaning services, and performance optimization.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive LED TV repair solutions for all major brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-500 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            All Major Brands Supported
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Samsung, LG, Sony, Panasonic, Videocon, Micromax, and more
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white font-semibold">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">Samsung</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">LG</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">Sony</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">Panasonic</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">Videocon</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">Micromax</span>
          </div>
        </div>
      </div>
    </section>
  );
}
