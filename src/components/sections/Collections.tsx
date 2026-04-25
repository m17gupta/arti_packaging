"use client"
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/Badge'
import { useCollections } from '@/hooks/useCollections'
import Link from 'next/link'
import { ArrowRight, Loader2 } from 'lucide-react'
import { RootState } from '@/lib/store'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { ICollection } from '@/lib/slice/collection/CollectionType'
import { setCurrentCollection } from '@/lib/slice/collection/collectionSlice'


export function Collections() {
  const { collections, loading } = useCollections()
  const { allCollection, isFetchedCollection } = useSelector((state: RootState) => state.collection)
  const router = useRouter();
  const dispatch= useDispatch()
  const handleCardClick = (item: ICollection) => {
    dispatch(setCurrentCollection(item));
    router.push(`/gallery`);
  };

  // Show only first 6 on the home page for better layout
  // const displayCollections = isFetchedCollection ? allCollection.slice(0, 6) : collections.slice(0, 6)

  return (
    <section id="collections" className="py-24 bg-[#F5F2EE]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-amber-100 text-amber-900 hover:bg-amber-100 border-0 rounded-full mb-4 px-4 py-1">
              Our Collections
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-serif text-stone-900 leading-tight">
              Gifting for every <span className="gold-gradient italic">occasion</span>
            </h2>
          </motion.div>
          <div className="flex flex-col items-start md:items-end gap-6">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-stone-600 max-w-md text-lg leading-relaxed text-left md:text-right"
            >
              From intimate personal gifts to large-scale corporate programs — explore our curated collections designed for every need.
            </motion.p>
            <Link href="/gallery">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-amber-700 font-medium tracking-widest uppercase text-xs group"
              >
                View All Collections <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>

      {isFetchedCollection ? allCollection.length>0 &&<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {allCollection.map((category, i) => (
            <motion.div
              key={category._id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group relative cursor-pointer ${
                i === 0 ? 'md:row-span-2 md:col-span-1 aspect-[3/4] md:aspect-auto' : 'aspect-square'
              }`}

              onClick={() => handleCardClick(category)}
            >
              <img
                src={category.primaryImage?.url}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden">
                  <motion.p className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                    {(category.itemCount || 0) > 0 ? `${category.itemCount} Items` : 'Custom'}
                  </motion.p>
                </div>
                <h3 className="text-white text-2xl lg:text-3xl font-serif mb-2">{category.name}</h3>
                <p className="text-white/70 text-sm line-clamp-2 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {category.description || 'Premium curated collection for your gifting needs.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>:(
          <>
          <Loader2/>
          </>
        )}
      </div>
    </section>
  )
}
