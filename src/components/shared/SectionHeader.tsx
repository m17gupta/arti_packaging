import { motion } from 'motion/react'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={centered ? 'text-center' : 'text-left'}
    >
      <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4 font-medium">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#8A8A8A] text-base leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="metallic-divider mt-8 max-w-16 mx-auto" />
    </motion.div>
  )
}
