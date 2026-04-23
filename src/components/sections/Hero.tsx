"use client"
import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/6373302/pexels-photo-6373302.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0E0E0E]/75" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #0E0E0E 100%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xs tracking-[0.4em] uppercase text-[#C9A84C] mb-6 font-medium"
        >
          Est. 2018 — Crafted in India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-6"
        >
          Premium Gift
          <br />
          <span className="gold-gradient italic">Packages</span>
          <br />
          Crafted to Impress
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-[#B0B0B0] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          From bespoke corporate hampers to artisan gift boxes and signature specialty hammers —
          every package we create is a masterpiece in itself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="gold"
            size="lg"
            onClick={() => scrollTo('#products')}
          >
            Explore Collections
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('#contact')}
          >
            Request a Quote
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex gap-12 justify-center mt-16 pt-10 border-t border-[#2E2E2E]"
        >
          {[
            { value: '5000+', label: 'Packages Delivered' },
            { value: '200+', label: 'Corporate Clients' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-light text-[#C9A84C]">
                {stat.value}
              </p>
              <p className="text-xs tracking-widest uppercase text-[#8A8A8A] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A84C] hover:text-[#E8C96B] transition-colors cursor-pointer bg-transparent border-none"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  )
}
