import { Play, Mail, Phone, MapPin, Clock, Instagram, Twitter, Facebook, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'WhatsApp',
      info: '+62 812-3456-7890',
      action: 'Chat Sekarang'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      info: 'hello@streampro.id',
      action: 'Kirim Email'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Jam Operasional',
      info: '24/7 Customer Support',
      action: ''
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Lokasi',
      info: 'Jakarta, Indonesia',
      action: ''
    }
  ]

  const quickLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Paket Harga', href: '#paket' },
    { name: 'Testimoni', href: '#testimonial' },
    { name: 'FAQ', href: '#faq' }
  ]

  const services = [
    'Netflix Premium',
    'Spotify Premium',
    'Disney+ Hotstar',
    'YouTube Premium',
    'Amazon Prime Video',
    'Apple Music'
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      href: '#',
      color: 'hover:text-pink-400'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="h-5 w-5" />,
      href: '#',
      color: 'hover:text-green-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      href: '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      href: '#',
      color: 'hover:text-blue-500'
    }
  ]

  return (
    <footer id="kontak" className="relative bg-gradient-to-b from-black/80 to-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Form Section */}
        <div className="py-16 border-b border-purple-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Hubungi Kami
              </h3>
              <p className="text-gray-300 mb-8">
                Tim customer service kami siap membantu Anda mendapatkan akun premium dengan harga terbaik
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-purple-400">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{contact.title}</h4>
                      <p className="text-gray-300">{contact.info}</p>
                    </div>
                    {contact.action && (
                      <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        {contact.action}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Kirim Pesan
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="nama@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Layanan yang Diminati
                  </label>
                  <select className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors">
                    <option value="">Pilih layanan</option>
                    <option value="netflix">Netflix Premium</option>
                    <option value="spotify">Spotify Premium</option>
                    <option value="bundle">Bundle Package</option>
                    <option value="konsultasi">Konsultasi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tuliskan pertanyaan atau kebutuhan Anda..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    StreamPro
                  </h1>
                  <p className="text-xs text-gray-400">Premium Digital Store</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-6">
                Penyedia akun premium streaming terpercaya dengan harga terjangkau dan layanan terbaik di Indonesia.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Menu Utama</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Layanan Kami</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-6">Dapatkan Promo</h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe untuk mendapatkan info promo dan diskon terbaru
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors text-sm"
                />
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} StreamPro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
