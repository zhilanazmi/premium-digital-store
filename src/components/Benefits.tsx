import { Shield, Zap, Crown, Users, Headphones, Globe } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: <Crown className="h-8 w-8" />,
      title: 'Kualitas Premium',
      description: 'Streaming 4K Ultra HD tanpa batas dengan kualitas audio lossless terbaik',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: '100% Legal & Aman',
      description: 'Semua akun resmi dan legal, dijamin aman tanpa risiko suspend atau block',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Aktivasi Instan',
      description: 'Dapatkan akses premium langsung setelah pembayaran, tanpa menunggu lama',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Multi Device',
      description: 'Gunakan di berbagai perangkat secara bersamaan - HP, tablet, laptop, TV',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: 'Support 24/7',
      description: 'Tim customer service siap membantu Anda kapan saja via WhatsApp',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Konten Global',
      description: 'Akses semua konten dari berbagai negara tanpa pembatasan geografis',
      color: 'from-red-400 to-pink-500'
    }
  ]

  return (
    <section id="keunggulan" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Mengapa Memilih 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> StreamPro</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kami memberikan layanan streaming premium terbaik dengan jaminan kualitas dan keamanan yang tidak akan Anda temukan di tempat lain
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Siap Merasakan Pengalaman Premium?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pelanggan yang sudah merasakan kualitas streaming premium terbaik dengan harga terjangkau
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-semibold">
              Mulai Berlangganan Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
