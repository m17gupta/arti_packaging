"use client"
import { useParams } from 'next/navigation'
import { useCollections } from '@/hooks/useCollections'
import { motion } from 'motion/react'
import { ArrowLeft, ShoppingBag, LayoutGrid, Info } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Navbar } from '@/components/sections/Navbar'
import { Badge } from '@/components/ui/Badge'
import { Footer } from '@/components/sections/Footer'

export default function CollectionDetailPage() {
  const { slug } = useParams()
  const { collections } = useCollections()
  
  const collection = collections.find(c => c.slug === slug)

  if (!collection) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCFB] p-4">
        <h1 className="text-4xl font-serif mb-4">Collection Not Found</h1>
        <p className="text-stone-500 mb-8 text-center">The collection you are looking for doesn't exist or has been moved.</p>
        <Link href="/gallery">
          <Button variant="gold">Back to Gallery</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-600 transition-colors mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Gallery</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Images */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-[4/5] rounded-3xl overflow-hidden bg-stone-100 shadow-2xl"
              >
                <img 
                  src={collection.primaryImage?.url} 
                  alt={collection.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {collection.secondaryImage && collection.secondaryImage.length > 0 && (
                <div className="grid grid-cols-2 gap-6">
                  {collection.secondaryImage.map((img, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (i + 1) }}
                      className="aspect-square rounded-2xl overflow-hidden bg-stone-100 shadow-lg"
                    >
                      <img src={img.url} className="w-full h-full object-cover" alt="" />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{collection.icon}</span>
                  <Badge variant="gold">{collection.itemCount} Items</Badge>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 leading-tight mb-6">
                  {collection.name}
                </h1>
                
                <p className="text-xl text-stone-500 leading-relaxed font-light">
                  {collection.description}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 bg-white border border-stone-100 rounded-3xl shadow-xl shadow-stone-200/40 space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-1">Bespoke Curation</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">Each item in this collection is handpicked by our expert designers to ensure a cohesive and premium experience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center text-stone-900 shrink-0">
                    <LayoutGrid size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-1">Customizable Options</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">Personalize your gift with custom branding, messages, and premium wrapping options.</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full h-16 text-lg rounded-2xl shadow-lg shadow-amber-600/20">
                    Inquire About This Collection
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-stone-400 text-sm"
              >
                <Info size={14} />
                <p>Bulk discounts available for corporate orders. Lead time: 5-7 days.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
