"use client"
import { motion } from 'motion/react'
import { whyChooseUs } from '@/data'
import { SectionHeader } from '@/components/shared/SectionHeader'
import type { WhyChooseUsItem } from '@/types'

function FeatureItem({ item, index }: { item: WhyChooseUsItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ borderColor: 'rgba(201,168,76,0.4)' }}
      className="p-6 border border-[#E5DED5] bg-white group transition-all duration-300 hover:bg-[#FAFAF8] shadow-sm hover:shadow-md hover:border-[#C9A84C]/40"
    >
      <div className="text-2xl text-[#C9A84C] mb-4 font-serif">{item.icon}</div>
      <h3 className="text-[#1A1208] font-medium text-base mb-2 group-hover:text-[#C9A84C] transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-[#7A6E62] text-sm leading-relaxed">{item.description}</p>
    </motion.div>
  )
}

export function WhyChooseUs() {
  return (
    <section className="py-28 px-6 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="The Hammer & Hampers Difference"
          subtitle="We don't just assemble gifts — we engineer experiences that leave lasting impressions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {whyChooseUs.map((item, index) => (
            <FeatureItem key={item.title} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 p-8 border border-[#C9A84C]/20 bg-white shadow-sm text-center"
        >
          <p className="font-serif text-2xl md:text-3xl font-light text-[#1A1208] leading-relaxed">
            "We believe the finest gift is one that speaks before it is even opened."
          </p>
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mt-4 font-medium">
            — Hammer &amp; Hampers Studio Philosophy
          </p>
        </motion.div>
      </div>
    </section>
  )
}
