import { ArrowRight, Play, Star, Shield, Zap, HelpCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section id="beranda" className="pt-20 pb-12 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/images/bg-pattern.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-purple-200">Akun Premium Terpercaya #1</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Streaming Premium
              </span>
              <br />
              <span className="text-white">Tanpa Batas</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Nikmati akses unlimited ke Netflix & Spotify Premium dengan harga terjangkau. 
              Garansi 100% aman, legal, dan berkualitas tinggi.
            </p>

            {/* Feature Points */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-black/30 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-200">100% Legal & Aman</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/30 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-200">Aktivasi Instan</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/30 rounded-full px-4 py-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-200">Garansi Penuh</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#paket" className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2">
                <span>Lihat Paket Harga</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#faq" className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                <HelpCircle className="h-5 w-5" />
                <span>Bantuan</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-purple-500/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">1000+</div>
                <div className="text-sm text-gray-400">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400">Garansi</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/images/hero-streaming.webp" 
                alt="Streaming Entertainment" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/images/netflix-logo.png" 
                    alt="Netflix" 
                    className="w-8 h-8 opacity-80"
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">Netflix Premium</div>
                    <div className="text-purple-400 text-xs">Mulai Rp 35.000</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/images/spotify-logo.png" 
                    alt="Spotify" 
                    className="w-8 h-8 opacity-80"
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">Spotify Premium</div>
                    <div className="text-green-400 text-xs">1 Tahun Rp 200.000</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
      </div>
    </section>
  )
}

export default Hero
