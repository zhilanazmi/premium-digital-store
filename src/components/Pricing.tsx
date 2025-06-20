import { Check, Star, Zap } from 'lucide-react'

const Pricing = () => {
  const netflixPlans = [
    {
      duration: '1 Bulan',
      price: 'Rp 35.000',
      originalPrice: 'Rp 54.000',
      discount: '35%',
      features: [
        'Streaming 4K Ultra HD',
        'Tanpa iklan',
        'Download unlimited',
        'Multi device (4 layar)',
        'Garansi 30 hari'
      ],
      popular: false
    },
    {
      duration: '2 Bulan',
      price: 'Rp 70.000',
      originalPrice: 'Rp 108.000',
      discount: '35%',
      features: [
        'Streaming 4K Ultra HD',
        'Tanpa iklan',
        'Download unlimited',
        'Multi device (4 layar)',
        'Garansi 60 hari',
        'Bonus 1 minggu gratis'
      ],
      popular: true
    },
    {
      duration: '3 Bulan',
      price: 'Rp 90.000',
      originalPrice: 'Rp 162.000',
      discount: '44%',
      features: [
        'Streaming 4K Ultra HD',
        'Tanpa iklan',
        'Download unlimited',
        'Multi device (4 layar)',
        'Garansi 90 hari',
        'Bonus 2 minggu gratis',
        'Priority support'
      ],
      popular: false
    }
  ]

  const spotifyPlan = {
    service: 'Spotify Premium',
    duration: '1 Tahun',
    price: 'Rp 200.000',
    originalPrice: 'Rp 1.188.000',
    discount: '83%',
    features: [
      'Music streaming unlimited',
      'Audio quality lossless',
      'Download offline',
      'Skip lagu tanpa batas',
      'Tanpa iklan',
      'Akses podcast premium',
      'Multi device sync',
      'Garansi 1 tahun penuh'
    ]
  }

  return (
    <section id="paket" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Paket
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Premium</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket include garansi penuh dan support 24/7
          </p>
        </div>

        {/* Netflix Plans */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <img src="/images/netflix-logo.png" alt="Netflix" className="w-12 h-12 mr-4 opacity-80" />
            <h3 className="text-3xl font-bold text-white">Netflix Premium</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {netflixPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-400 ring-2 ring-purple-400/50' 
                    : 'border-purple-500/20 hover:border-purple-400/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Terpopuler</span>
                    </div>
                  </div>
                )}

                {/* Discount Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{plan.duration}</h4>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      Hemat {plan.discount}
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 line-through">{plan.originalPrice}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">per periode</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-purple-500/30'
                }`}>
                  Beli Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Spotify Plan */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <img src="/images/spotify-logo.png" alt="Spotify" className="w-12 h-12 mr-4 opacity-80" />
            <h3 className="text-3xl font-bold text-white">Spotify Premium</h3>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-green-500/20 to-black/60 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
              {/* Special Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Zap className="h-4 w-4" />
                  <span>Best Value</span>
                </div>
              </div>

              <div className="text-center mb-6">
                <h4 className="text-3xl font-bold text-white mb-2">{spotifyPlan.duration}</h4>
                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-lg font-semibold inline-block">
                  Hemat {spotifyPlan.discount}
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-5xl font-bold text-white">{spotifyPlan.price}</span>
                  <div className="text-left">
                    <div className="text-gray-400 line-through text-lg">{spotifyPlan.originalPrice}</div>
                    <div className="text-gray-400 text-sm">per tahun</div>
                  </div>
                </div>
                <p className="text-green-400 text-lg mt-2 font-semibold">
                  Hanya Rp 16.667/bulan
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {spotifyPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-lg">
                Ambil Paket Spotify
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Masih Ragu? Hubungi Kami!
            </h3>
            <p className="text-gray-300 mb-6">
              Tim kami siap membantu Anda memilih paket yang tepat sesuai kebutuhan
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold">
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
