const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/5582860/pexels-photo-5582860.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'LED TV Repair',
    description: 'Expert screen repair services',
  },
  {
    url: 'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Workshop',
    description: 'Our fully equipped repair center',
  },
  {
    url: 'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Circuit Board Repair',
    description: 'Advanced motherboard diagnostics',
  },
  {
    url: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Quality Testing',
    description: 'Thorough quality checks',
  },
  {
    url: 'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Component Replacement',
    description: 'Using genuine spare parts',
  },
  {
    url: 'https://images.pexels.com/photos/5582861/pexels-photo-5582861.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Final Inspection',
    description: 'Ensuring perfect functionality',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our professional repair services and workshop
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
