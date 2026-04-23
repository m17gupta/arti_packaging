"use client"
import { motion } from 'motion/react'

const footerLinks = {
  Collections: [
    'Corporate Hampers',
    'Festive Collections',
    'Luxury Gift Boxes',
    'Specialty Hammers',
    'Wellness Packages',
    'Custom Packages',
  ],
  Company: [
    'About Us',
    'Our Studio',
    'Sustainability',
    'Press',
    'Careers',
  ],
  Support: [
    'Get a Quote',
    'Track Order',
    'Bulk Orders',
    'FAQ',
    'Contact',
  ],
}

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#F0EDE8] border-t border-[#DDD6CC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
        >
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="font-serif text-2xl font-light text-[#1A1208]">
                Jain Creation
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C] mt-1">
                Premium Gift Packages Crafted to Impress
              </p>
            </div>
            <p className="text-[#7A6E62] text-sm leading-relaxed max-w-xs mt-4">
              India&apos;s premier artisan gifting studio. Crafting premium gift
              packages, corporate hampers, and specialty gift hammers since 2018.
            </p>

            <div className="flex gap-3 mt-6">
              {['IN', 'IG', 'LI', 'TW'].map((social) => (
                <div
                  key={social}
                  className="w-9 h-9 border border-[#DDD6CC] flex items-center justify-center text-[10px] text-[#7A6E62] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 cursor-pointer font-medium bg-white"
                  aria-label={social}
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs tracking-[0.2em] uppercase text-[#C9A84C] font-medium mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#contact')}
                      className="text-sm text-[#7A6E62] hover:text-[#C9A84C] transition-colors duration-300 bg-transparent border-none cursor-pointer text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="py-6 border-t border-[#DDD6CC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#7A6E62]">
            &copy; 2025 Jain Creation . All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((item) => (
              <button
                key={item}
                className="text-xs text-[#7A6E62] hover:text-[#C9A84C] transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
