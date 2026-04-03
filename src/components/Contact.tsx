import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tvBrand: '',
    issue: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        tvBrand: '',
        issue: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to get your TV repaired? Contact us today for fast and reliable service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-blue-100">+91 8010449610</p>
                    <p className="text-blue-100">+91 9890791900</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-blue-100">yashshende544@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-blue-100">
                      front of lokmat office road beside new ingole cycle store, thakre market<br />
                      Wardha, Maharashtra 442001
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                <h4 className="font-semibold mb-4">Find Us on Map</h4>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 sm:p-6 overflow-hidden h-48 sm:h-56 lg:h-64 flex items-center justify-center">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.3987040069856!2d78.60051912229632!3d20.7431066463253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47fb969e93147%3A0xefe3bb124cbf0f01!2sShree%20electronics%20LED%20tv%20repair%20and%20services!5e0!3m2!1sen!2sin!4v1775217553670!5m2!1sen!2sin" 
                    className="w-full h-full rounded-lg"
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>

              {isSubmitted && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you! We'll contact you shortly.
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    TV Brand *
                  </label>
                  <select
                    name="tvBrand"
                    value={formData.tvBrand}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select brand</option>
                    <option value="Samsung">Samsung</option>
                    <option value="LG">LG</option>
                    <option value="Sony">Sony</option>
                    <option value="Panasonic">Panasonic</option>
                    <option value="Videocon">Videocon</option>
                    <option value="Micromax">Micromax</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Issue Type *
                  </label>
                  <select
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select issue</option>
                    <option value="Screen Problem">Screen Problem</option>
                    <option value="Power Issue">Power Issue</option>
                    <option value="Sound Problem">Sound Problem</option>
                    <option value="Display Issue">Display Issue</option>
                    <option value="Circuit Problem">Circuit Problem</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the issue with your TV..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center space-x-2"
                >
                  <span>Submit Request</span>
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
