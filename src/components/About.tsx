import { Award, Users, CheckCircle, Shield } from 'lucide-react';
import tvRepairPhoto from '../photo/TV-repair-photo.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Shri Electronic</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={tvRepairPhoto}
              alt="TV Repair Workshop"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Three Decades of Trust & Excellence
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Since <span className="font-semibold text-blue-600">1990</span>, Shri Electronic has been Wardha's premier destination for LED TV repair services. Founded with a commitment to quality and customer satisfaction, we have built our reputation on expertise, honesty, and reliable service.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our skilled technicians bring decades of experience in diagnosing and repairing all major TV brands. We understand that your television is an important part of your home, and we treat every repair with the care and attention it deserves.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">30+ Years</h4>
                  <p className="text-sm text-gray-600">Industry Experience</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-sm text-gray-600">Certified Technicians</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Parts</h4>
                  <p className="text-sm text-gray-600">Genuine Spares</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Warranty</h4>
                  <p className="text-sm text-gray-600">Service Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
