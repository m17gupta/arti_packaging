"use client"
import { motion } from 'motion/react'
import { ArrowLeft, ExternalLink, Filter, Grid3X3, List } from 'lucide-react'
import Link from 'next/link'
import { useCollections } from '@/hooks/useCollections'
import { Badge } from '@/components/ui/Badge'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'

export default function Gallery() {
  const { collections, loading } = useCollections()

  if (loading) return null

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 text-amber-600 mb-4 font-medium tracking-widest uppercase text-xs">
              <Link href="/" className="hover:underline flex items-center gap-1">Home</Link>
              <span>/</span>
              <span>Collections Gallery</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-5xl lg:text-7xl font-serif text-stone-900 mb-6">Our Full <span className="gold-gradient italic">Portfolio</span></h1>
                <p className="text-stone-600 max-w-2xl text-lg">
                  Explore our complete range of artisan gift collections, corporate hampers, and bespoke specialty packages. Every piece is a testament to our commitment to excellence.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="h-10 px-4 rounded-full border-stone-200 text-stone-600">
                  {collections.length} Collections Total
                </Badge>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {collections.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={category.primaryImage?.url}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{category.icon}</span>
                        <Badge className="bg-amber-400 text-amber-950 hover:bg-amber-400 border-0 text-[10px] uppercase tracking-tighter">
                          {category.itemCount || 0} Items
                        </Badge>
                      </div>
                      <h3 className="text-3xl font-serif text-white mb-3">{category.name}</h3>
                      <p className="text-white/70 text-sm mb-6 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {category.description || 'No description available.'}
                      </p>
                      <button className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest hover:text-amber-400 transition-colors">
                        View Details <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
