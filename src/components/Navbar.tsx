import { useState, useEffect } from 'react'
import { Menu, X, Play } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#keunggulan', label: 'Keunggulan' },
    { href: '#paket', label: 'Paket Harga' },
    { href: '#testimonial', label: 'Testimoni' },
    { href: '#faq', label: 'FAQ' },
    { href: '#kontak', label: 'Kontak' }
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-transparent backdrop-blur-sm border-b border-transparent' 
        : 'bg-gradient-to-r from-violet-900/95 to-pink-900/95 backdrop-blur-md border-b border-violet-400/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-violet-500 to-pink-500 p-2 rounded-lg">
              <Play className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-all duration-300 ${
                isScrolled
                  ? 'text-white drop-shadow-lg'
                  : 'bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent'
              }`}>
                Zhillan Azmi
              </h1>
              <p className="text-xs text-gray-400">Premium Digital Store</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-all duration-200 text-sm font-medium ${
                  isScrolled
                    ? 'text-white drop-shadow-md hover:text-violet-200'
                    : 'text-gray-200 hover:text-violet-300'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://wa.me/6285159616116" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30'
                  : 'bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:from-violet-600 hover:to-pink-600'
              }`}
            >
              Beli Sekarang
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-200 hover:text-violet-300 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full mt-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-violet-600 hover:to-pink-600 transition-all duration-200 font-medium">
                Beli Sekarang
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
