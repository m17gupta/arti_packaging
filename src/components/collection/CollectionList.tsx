import { motion, AnimatePresence } from 'motion/react'
import { toast } from 'sonner'
import { Trash2, Edit2, ArrowLeft, Image as ImageIcon, Loader2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { ICollection } from '@/lib/slice/collection/CollectionType'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/lib/store'
import { setCurrentCollection } from '@/lib/slice/collection/collectionSlice'
import { useRouter } from 'next/navigation'
import { deleteCollection } from '@/lib/slice/collection/collectionThunk'

interface CollectionListProps {
  

}

export function CollectionList() {
  const {allCollection, isFetchedCollection}= useSelector((state:RootState)=>state.collection)
    const dispatch= useDispatch<AppDispatch>()
   const router =useRouter()
   const handleEdit=(c:ICollection)=>{
     dispatch(setCurrentCollection(c))

     router.push(`/dashboard/collections/${c._id}`)

   }


   const handledDeleteCollection=async(id:string)=>{
    // ask to deleted
      const confirm = window.confirm('Are you sure you want to delete this collection?')
    if(!confirm) return
     const response = await dispatch(deleteCollection(id))
     if(response.meta.requestStatus==="fulfilled"){
      toast.success("Collection deleted successfully")
     }
     else{
      toast.error("Failed to delete collection")
     }
     console.log("response",response)
   }
  return (
    <div className="xl:col-span-8 space-y-6">
    { isFetchedCollection? (<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {allCollection.length === 0 ? (
            <div className="col-span-2 text-center text-stone-400 py-12">
              <p>No collections found. Create one to get started.</p>
            </div>
          ) : 
          allCollection.map((category) => (
            <motion.div
              key={category._id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-stone-100">
                {category.primaryImage?.url ? (
                  <img src={category.primaryImage.url} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-300">
                    <ImageIcon size={48} strokeWidth={1} />
                  </div>
                )}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Link 
                    href={`/collection/${category.slug}`}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 hover:bg-blue-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <ArrowLeft size={18} className="rotate-180" />
                  </Link>
                  <button 
                     onClick={() => handleEdit(category)}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 hover:bg-amber-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button 
                    onClick={() => handledDeleteCollection(category._id!)}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{category.icon}</span>
                    <h3 className="font-serif text-lg font-medium">{category.name}</h3>
                  </div>
                  <Badge variant="outline" className="bg-stone-50 text-stone-400 text-[10px] uppercase font-mono">{category._id?.slice(0, 5)}</Badge>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">{category.description}</p>
                <div className="pt-4 border-t border-stone-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
                    {category?.secondaryImage?.length} Curated Items
                  </span>
                  {category.secondaryImage && category.secondaryImage.length > 0 && (
                    <span className="text-[10px] text-stone-400">+{category.secondaryImage.length} More Images</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>):(
       <div className="col-span-2 text-center text-stone-400 py-12">
             < Loader2 className='animate-spin'/>
            </div> 
      )}
    </div>
  )
}
