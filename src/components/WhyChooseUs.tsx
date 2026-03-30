import { Award, Clock, Shield, ThumbsUp, Wrench, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '30+ Years of Experience',
    description: 'Three decades of trusted service in Wardha, serving thousands of satisfied customers.',
  },
  {
    icon: Wrench,
    title: 'Skilled Technicians',
    description: 'Certified and experienced professionals who stay updated with the latest TV technologies.',
  },
  {
    icon: Shield,
    title: 'Genuine Spare Parts',
    description: 'We use only authentic, high-quality spare parts to ensure lasting repairs.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround Time',
    description: 'Fast and efficient service to get your TV back to you as quickly as possible.',
  },
  {
    icon: ThumbsUp,
    title: 'Customer-First Approach',
    description: 'Your satisfaction is our priority. Transparent pricing and honest recommendations.',
  },
  {
    icon: TrendingUp,
    title: 'Service Warranty',
    description: 'Warranty on all repairs giving you peace of mind and confidence in our work.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Shri Electronic?</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            The trusted choice for LED TV repairs in Wardha
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-xl p-8 hover:bg-opacity-20 transition duration-300"
            >
              <div className="bg-orange-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <reason.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                {reason.title}
              </h3>

              <p className="text-blue-100 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-2xl p-8 max-w-3xl">
            <p className="text-xl sm:text-2xl font-semibold text-white mb-4">
              "Quality repairs, honest service, and customer satisfaction since 1990"
            </p>
            <p className="text-blue-200">
              Join thousands of happy customers who trust Shri Electronic for all their TV repair needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
