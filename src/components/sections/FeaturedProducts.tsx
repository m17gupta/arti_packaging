"use client"
import { motion } from 'motion/react'
import { featuredProducts } from '@/data'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'
import type { FeaturedProduct } from '@/types'

function ProductCard({ product, index }: { product: FeaturedProduct; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8 }}
      className="group bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#C9A84C]/40 transition-all duration-500 flex flex-col"
    >
      <div className="relative overflow-hidden h-64">
        <motion.img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent" />
        {product.badge && (
          <div className="absolute top-4 left-4">
            <Badge variant="gold">{product.badge}</Badge>
          </div>
        )}
        <div className="absolute bottom-4 right-4">
          <span className="font-serif text-2xl font-light text-white">{product.price}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C] mb-2">
          {product.category}
        </p>
        <h3 className="font-serif text-xl font-light text-white mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-[#8A8A8A] text-sm leading-relaxed mb-5 flex-1">
          {product.description}
        </p>

        <ul className="space-y-1.5 mb-6">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-[#B0B0B0]">
              <Check size={11} className="text-[#C9A84C] shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Enquire Now
        </Button>
      </div>
    </motion.article>
  )
}

export function FeaturedProducts() {
  return (
    <section id="products" className="py-28 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Featured Products"
          title="Signature Packages"
          subtitle="Each product in our collection is a testament to the art of gifting — beautifully curated, meticulously assembled, and guaranteed to impress."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[#8A8A8A] text-sm mb-4">
            Looking for something unique? We create fully bespoke packages.
          </p>
          <Button
            variant="gold"
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Custom Package
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
