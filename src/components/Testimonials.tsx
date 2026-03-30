import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Wardha',
    rating: 5,
    text: 'Excellent service! They repaired my Samsung LED TV in just 2 days. The technician was very professional and explained everything clearly. Highly recommended!',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Priya Deshmukh',
    location: 'Wardha',
    rating: 5,
    text: 'Been using their services for over 10 years. Always reliable, affordable, and honest. They fixed my LG TV display issue perfectly. Great experience!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Suresh Patil',
    location: 'Wardha',
    rating: 5,
    text: 'Very satisfied with the home service. The technician came on time, diagnosed the problem quickly, and fixed it right there. Fair pricing too!',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Anita Sharma',
    location: 'Wardha',
    rating: 5,
    text: 'My Sony TV had a motherboard issue. They repaired it expertly and gave 3 months warranty. Working perfectly for 6 months now. Trustworthy service!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Vikram Joshi',
    location: 'Wardha',
    rating: 5,
    text: 'Best TV repair shop in Wardha! Fixed my power supply issue at a very reasonable price. The staff is knowledgeable and friendly. Will definitely return!',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Meera Kulkarni',
    location: 'Wardha',
    rating: 5,
    text: 'They have been serving Wardha for 30+ years and it shows! Professional, experienced, and use genuine parts. My go-to place for TV repairs.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-orange-200" />

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="h-8 w-8 text-orange-400 fill-current" />
              <span className="text-5xl font-bold">4.9</span>
              <Star className="h-8 w-8 text-orange-400 fill-current" />
            </div>
            <p className="text-blue-100">Average rating from 500+ happy customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
