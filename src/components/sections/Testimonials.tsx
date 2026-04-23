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
      className="bg-[#1A1A1A] border border-[#2E2E2E] p-8 flex flex-col gap-5 group hover:border-[#C9A84C]/30 transition-all duration-300"
    >
      <div className="text-3xl text-[#C9A84C]/40 font-serif leading-none select-none">&ldquo;</div>

      <StarRating rating={testimonial.rating} />

      <blockquote className="text-[#B0B0B0] text-sm leading-relaxed italic flex-1">
        {testimonial.quote}
      </blockquote>

      <div className="flex items-center gap-4 pt-4 border-t border-[#2E2E2E]">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          className="w-12 h-12 object-cover border border-[#2E2E2E]"
        />
        <div>
          <p className="text-white text-sm font-medium">{testimonial.name}</p>
          <p className="text-[#8A8A8A] text-xs mt-0.5">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 bg-[#111111]">
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-12 mt-16 pt-12 border-t border-[#2E2E2E]"
        >
          {['Nexus Technologies', 'Meridian Hospitality', 'Luminary Brands', 'The Artisan Club'].map((brand) => (
            <p
              key={brand}
              className="text-xs tracking-[0.2em] uppercase text-[#2E2E2E] hover:text-[#C9A84C]/50 transition-colors duration-300 cursor-default"
            >
              {brand}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
