"use client"
import { motion } from 'motion/react'
import { SectionHeader } from '@/components/shared/SectionHeader'

const values = [
  { label: 'Artisan Quality', desc: 'Every detail matters' },
  { label: 'Ethical Sourcing', desc: 'Responsibly curated' },
  { label: 'Timely Delivery', desc: 'Never miss a moment' },
]

export function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6373307/pexels-photo-6373307.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Artisan crafting premium gift packages"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-[#C9A84C]/30 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#C9A84C]/20 -z-10" />

            <div className="absolute bottom-8 left-8 bg-[#0E0E0E]/90 backdrop-blur border border-[#2E2E2E] px-6 py-4">
              <p className="font-serif text-4xl font-light text-[#C9A84C]">6+</p>
              <p className="text-xs tracking-widest uppercase text-[#8A8A8A] mt-1">
                Years of Craftsmanship
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <SectionHeader
              eyebrow="Our Story"
              title="Where Craftsmanship Meets Occasion"
              centered={false}
            />
            <div className="space-y-5 mt-8">
              <p className="text-[#8A8A8A] leading-relaxed text-base">
                Hammer &amp; Hampers was born from a singular belief: that a gift, when done right,
                can leave an impression that lasts a lifetime. We set out to redefine corporate
                and personal gifting in India by marrying artisan craftsmanship with premium curation.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed text-base">
                Each package we create is a deliberate work of art — from the texture of the box to
                the weight of every item inside. Our studio team works tirelessly to ensure that no
                two packages feel ordinary. We source the finest products from across India and
                internationally, partnering only with makers who share our obsession with quality.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed text-base">
                Whether you need 10 bespoke gift boxes or 10,000 corporate hampers, our commitment
                to excellence remains identical across every single unit.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-[#2E2E2E]">
              {values.map((v) => (
                <div key={v.label} className="text-center">
                  <div className="w-8 h-px bg-[#C9A84C] mx-auto mb-3" />
                  <p className="text-white text-sm font-medium">{v.label}</p>
                  <p className="text-[#8A8A8A] text-xs mt-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
