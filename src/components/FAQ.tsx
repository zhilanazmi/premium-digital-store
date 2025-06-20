import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Apakah akun yang dijual legal dan aman?',
      answer: 'Ya, 100% legal dan aman! Semua akun yang kami jual adalah akun resmi yang diperoleh melalui metode yang sah. Kami bekerja sama dengan distributor resmi dan menggunakan metode pembayaran yang legal. Akun dijamin tidak akan di-suspend atau di-block.'
    },
    {
      question: 'Berapa lama waktu aktivasi setelah pembayaran?',
      answer: 'Aktivasi dilakukan secara instan! Setelah pembayaran dikonfirmasi, Anda akan menerima detail akun dalam waktu maksimal 5-10 menit. Untuk pembayaran di luar jam kerja, aktivasi akan dilakukan maksimal dalam 1 jam.'
    },
    {
      question: 'Apakah ada garansi jika akun bermasalah?',
      answer: 'Tentu! Kami memberikan garansi penuh sesuai periode pembelian. Jika ada masalah dengan akun (suspend, tidak bisa login, dll), kami akan segera memberikan replacement akun baru atau refund 100% sesuai kebijakan.'
    },
    {
      question: 'Bisakah menggunakan akun di berbagai perangkat?',
      answer: 'Ya! Netflix Premium mendukung hingga 4 layar simultan, sedangkan Spotify Premium bisa digunakan di semua perangkat Anda dengan sinkronisasi playlist. Anda bisa login di HP, tablet, laptop, Smart TV, dll.'
    },
    {
      question: 'Bagaimana cara pembayaran yang tersedia?',
      answer: 'Kami menerima berbagai metode pembayaran: Transfer Bank (BCA, BNI, BRI, Mandiri), E-wallet (OVO, DANA, GoPay, ShopeePay), QRIS, dan crypto. Semua pembayaran aman dan terpercaya.'
    },
    {
      question: 'Apakah bisa request region/negara tertentu?',
      answer: 'Ya, bisa! Untuk Netflix, kami bisa menyediakan akun dari berbagai region (US, UK, Korea, Jepang, dll) sesuai kebutuhan konten yang ingin Anda akses. Untuk Spotify, defaultnya global dengan akses ke semua musik dunia.'
    },
    {
      question: 'Bagaimana jika lupa password atau perlu ganti password?',
      answer: 'Kami akan memberikan full access ke akun termasuk email recovery. Jika ada masalah dengan password, hubungi customer service kami dan kami akan membantu reset atau memberikan akun replacement.'
    },
    {
      question: 'Apakah ada customer service 24/7?',
      answer: 'Ya! Tim customer service kami siap membantu 24/7 melalui WhatsApp. Untuk masalah urgent, response time maksimal 15 menit. Untuk pertanyaan umum, kami akan merespon dalam 1-2 jam.'
    },
    {
      question: 'Bisakah perpanjang akun sebelum expired?',
      answer: 'Tentu! Anda bisa perpanjang akun kapan saja sebelum masa aktif habis. Kami akan memberikan notifikasi H-7 sebelum expired dan offer harga spesial untuk perpanjangan.'
    },
    {
      question: 'Apakah tersedia paket bundle atau diskon khusus?',
      answer: 'Ya! Kami sering memberikan promo bundle Netflix + Spotify dengan harga spesial. Follow sosial media kami untuk info promo terbaru. Ada juga diskon khusus untuk pelanggan setia dan pembelian dalam jumlah banyak.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-12 w-12 text-purple-400 mr-4" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              FAQ
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Terpopuler</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan tentang layanan streaming premium kami
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-black/60 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden transition-all duration-300 hover:border-purple-400/40"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-500/10 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="h-6 w-6 text-purple-400" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-purple-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-purple-500/20 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Masih Ada Pertanyaan Lain?
            </h3>
            <p className="text-gray-300 mb-6">
              Tim customer service kami siap membantu Anda 24/7 via WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-semibold">
                Chat WhatsApp
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-semibold">
                Kirim Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
