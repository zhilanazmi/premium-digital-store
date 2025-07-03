import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Content Creator',
      image: '/images/avatar1.jpg',
      rating: 5,
      text: 'Sudah 6 bulan pakai Netflix dari StreamPro dan sampai sekarang lancar jaya! Kualitas 4K jernih banget, download cepat, dan yang penting harganya jauh lebih murah dari berlangganan langsung. Highly recommended!',
      service: 'Netflix Premium 3 Bulan'
    },
    {
      name: 'Sari Dewi',
      role: 'Marketing Manager',
      image: '/images/avatar2.jpg',
      rating: 5,
      text: 'Spotify Premium 1 tahun cuma 200rb? Crazy deal! Audio quality nya bagus banget, bisa offline download, dan no ads. Customer service nya juga responsif banget. Worth every penny!',
      service: 'Spotify Premium 1 Tahun'
    },
    {
      name: 'Ahmad Rizki',
      role: 'Software Developer',
      image: '/images/avatar1.jpg',
      rating: 5,
      text: 'Awalnya skeptis beli akun premium online, tapi setelah coba StreamPro ternyata legit dan terpercaya. Proses aktivasi cepat, akun bekerja dengan sempurna, dan ada garansi juga. Puas banget!',
      service: 'Netflix Premium 2 Bulan'
    },
    {
      name: 'Maya Putri',
      role: 'Student',
      image: '/images/avatar2.jpg',
      rating: 5,
      text: 'Sebagai mahasiswa, budget terbatas tapi tetap pengen entertainment berkualitas. StreamPro solusinya! Harga affordable tapi service premium. Udah recommend ke temen-temen semua.',
      service: 'Netflix Premium 1 Bulan'
    },
    {
      name: 'Dian Pratama',
      role: 'Graphic Designer',
      image: '/images/avatar1.jpg',
      rating: 5,
      text: 'Music is my life, dan Spotify Premium dari sini bener-bener game changer. Audio lossless quality, playlist unlimited, dan bisa sync di semua device. Customer service juga fast response!',
      service: 'Spotify Premium 1 Tahun'
    },
    {
      name: 'Rina Marlina',
      role: 'Entrepreneur',
      image: '/images/avatar2.jpg',
      rating: 5,
      text: 'Bisnis streaming premium terpercaya! Udah berlangganan hampir setahun dan tidak pernah ada masalah. Tim support nya professional, akun selalu aktif, dan harga bersaing. 5 stars!',
      service: 'Netflix Premium 3 Bulan'
    }
  ]

  return (
    <section id="testimonial" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Apa Kata 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Pelanggan</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ribuan pelanggan telah merasakan kepuasan berlangganan premium dengan harga terjangkau
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-black/60 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-purple-400 opacity-60" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              {/* Service Badge */}
              <div className="mb-4">
                <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30">
                  {testimonial.service}
                </span>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-400">Pelanggan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400">Rating Kepuasan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Customer Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bergabunglah dengan Ribuan Pelanggan Puas
            </h3>
            <p className="text-gray-300 mb-6">
              Jangan lewatkan kesempatan untuk mendapatkan akses premium dengan harga terbaik
            </p>
            <a 
              href="https://wa.me/6285159616116" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Mulai Berlangganan
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
