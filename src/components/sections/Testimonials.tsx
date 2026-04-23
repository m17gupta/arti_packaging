"use client"
import { motion } from 'motion/react'
import { testimonials } from '@/data'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { StarRating } from '@/components/shared/StarRating'
import type { Testimonial } from '@/types'

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border border-[#E5DED5] p-8 flex flex-col gap-5 group hover:border-[#C9A84C]/40 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="text-3xl text-[#C9A84C]/40 font-serif leading-none select-none">&ldquo;</div>

      <StarRating rating={testimonial.rating} />

      <blockquote className="text-[#5C5242] text-sm leading-relaxed italic flex-1">
        {testimonial.quote}
      </blockquote>

      <div className="flex items-center gap-4 pt-4 border-t border-[#E5DED5]">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          className="w-12 h-12 object-cover border border-[#E5DED5]"
        />
        <div>
          <p className="text-[#1A1208] text-sm font-medium">{testimonial.name}</p>
          <p className="text-[#7A6E62] text-xs mt-0.5">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Client Stories"
          title="Trusted by Leading Brands"
          subtitle="Our work speaks through the words of those we've served. Here's what our clients have to say."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-[#E5DED5] overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F5F2EE] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F2EE] to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
            className="flex gap-20 whitespace-nowrap min-w-max px-10"
          >
            {[
              'Nexus Technologies', 
              'Meridian Hospitality', 
              'Luminary Brands', 
              'The Artisan Club',
              'Celestial Gifting',
              'Elysian Curations',
              'Regal Hampers',
              'Nexus Technologies', 
              'Meridian Hospitality', 
              'Luminary Brands', 
              'The Artisan Club',
              'Celestial Gifting',
              'Elysian Curations',
              'Regal Hampers'
            ].map((brand, i) => (
              <p
                key={i}
                className="text-xs tracking-[0.3em] uppercase text-[#7A6E62] hover:text-[#C9A84C] transition-colors duration-300 cursor-default font-medium"
              >
                {brand}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
