"use client"
import { motion } from 'motion/react'
import { processSteps } from '@/data'
import { SectionHeader } from '@/components/shared/SectionHeader'
import type { ProcessStep } from '@/types'

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex flex-col items-center text-center group"
    >
      <div className="relative mb-6">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-20 h-20 border border-[#C9A84C]/30 bg-white flex items-center justify-center group-hover:border-[#C9A84C] transition-colors duration-300 shadow-sm"
        >
          <span className="text-2xl" aria-hidden="true">{step.icon}</span>
        </motion.div>
        <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#C9A84C] flex items-center justify-center">
          <span className="text-[10px] font-bold text-[#0E0E0E]">{String(step.step).padStart(2, '0')}</span>
        </div>
      </div>

      <h3 className="font-serif text-xl font-light text-[#1A1208] mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
        {step.title}
      </h3>
      <p className="text-[#7A6E62] text-sm leading-relaxed max-w-xs">
        {step.description}
      </p>
    </motion.div>
  )
}

export function Process() {
  return (
    <section id="process" className="py-28 px-6 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="How It Works"
          title="Our Gifting Process"
          subtitle="From your first conversation to the final delivery, our process is designed to be seamless, transparent, and exceptional."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-20 relative">
          <div
            className="hidden lg:block absolute top-10 left-[calc(12.5%+40px)] right-[calc(12.5%+40px)] h-px"
            style={{ background: 'linear-gradient(90deg, #C9A84C, #E8C96B, #A07C2E)' }}
            aria-hidden="true"
          />
          {processSteps.map((step, index) => (
            <ProcessCard key={step.step} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
