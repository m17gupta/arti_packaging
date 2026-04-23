"use client"
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { productCategories } from '@/data'
import { SectionHeader } from '@/components/shared/SectionHeader'
import type { ProductCategory } from '@/types'

function CategoryCard({ category, index }: { category: ProductCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden cursor-pointer bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#C9A84C]/40 transition-all duration-500"
    >
      <div className="overflow-hidden h-52">
        <motion.img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-xl font-light text-white group-hover:text-[#C9A84C] transition-colors duration-300">
            {category.name}
          </h3>
          <span className="text-xs text-[#C9A84C] font-medium tracking-wider">
            {category.itemCount > 0 ? `${category.itemCount} items` : 'Custom'}
          </span>
        </div>
        <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4">
          {category.description}
        </p>
        <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Explore</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </motion.div>
  )
}

export function Collections() {
  return (
    <section id="collections" className="py-28 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Collections"
          title="Gifting for Every Occasion"
          subtitle="From intimate personal gifts to large-scale corporate programs — explore our curated collections designed for every need."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {productCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
