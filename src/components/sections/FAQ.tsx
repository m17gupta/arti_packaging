import { motion } from 'motion/react'
import { faqItems } from '@/data'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'

export function FAQ() {
  return (
    <section id="faq" className="py-28 px-6 bg-[#0E0E0E]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions"
          subtitle="Everything you need to know about ordering from Hammer & Hampers."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[#8A8A8A] text-sm mt-10"
        >
          Still have questions?{' '}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[#C9A84C] hover:text-[#E8C96B] transition-colors underline underline-offset-2 bg-transparent border-none cursor-pointer"
          >
            Reach out to our team
          </button>
        </motion.p>
      </div>
    </section>
  )
}
