"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  Plus, Trash2, Edit2, Save, X, Upload, 
  Image as ImageIcon, ArrowLeft, Settings
} from 'lucide-react'
import { useCollections } from '@/hooks/useCollections'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { Collection } from '@/types'

export default function CollectionsManagement() {
  const { collections, addCollection, updateCollection, deleteCollection, resetToDefault } = useCollections()
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  const [formData, setFormData] = useState<Collection>({
    name: '',
    description: '',
    icon: '🎁',
    primaryImage: { url: '' },
    secondaryImage: [],
    itemCount: 0,
    isActive: true
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isPrimary: boolean = true) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const url = reader.result as string
        if (isPrimary) {
          setFormData({ ...formData, primaryImage: { url } })
        } else {
          setFormData({ 
            ...formData, 
            secondaryImage: [...(formData.secondaryImage || []), { url }] 
          })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const removeSecondaryImage = (index: number) => {
    const newImages = [...(formData.secondaryImage || [])]
    newImages.splice(index, 1)
    setFormData({ ...formData, secondaryImage: newImages })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingId) {
      updateCollection(editingId, formData)
      setEditingId(null)
    } else {
      addCollection(formData)
      setIsAdding(false)
    }
    setFormData({ name: '', description: '', icon: '🎁', primaryImage: { url: '' }, secondaryImage: [], itemCount: 0, isActive: true })
  }

  const startEdit = (c: Collection) => {
    setEditingId(c.id || null)
    setFormData({ ...c })
    setIsAdding(true)
  }

  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      {/* Header */}
      <header className="h-20 bg-white border-b border-stone-200 flex items-center justify-between px-8 shrink-0">
        <div>
          <h2 className="text-2xl font-serif font-medium">Collections Management</h2>
          <p className="text-xs text-stone-400 mt-1">Update and organize your gifting categories</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={resetToDefault} className="text-xs h-9">
            Reset Data
          </Button>
          <Button size="sm" onClick={() => { setIsAdding(true); setEditingId(null); setFormData({ name: '', description: '', icon: '🎁', primaryImage: { url: '' }, secondaryImage: [], itemCount: 0, isActive: true }) }} className="gap-2 h-9">
            <Plus size={16} /> New Category
          </Button>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Controls */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search collections..." 
                className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-100 rounded-lg text-sm focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
              />
              <div className="absolute inset-y-0 left-3 flex items-center text-stone-400 pointer-events-none">
                <ImageIcon size={14} />
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="outline" size="sm" className="flex-1 md:flex-none h-10 px-4 gap-2">
                 Filter <Settings size={14} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            {/* List Section */}
            <div className="xl:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {collections.map((category) => (
                    <motion.div
                      key={category.id}
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
                            onClick={() => startEdit(category)}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 hover:bg-amber-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button 
                            onClick={() => deleteCollection(category.id!)}
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
                          <Badge variant="outline" className="bg-stone-50 text-stone-400 text-[10px] uppercase font-mono">{category.id?.slice(0, 5)}</Badge>
                        </div>
                        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">{category.description}</p>
                        <div className="pt-4 border-t border-stone-50 flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
                            {category.itemCount} Curated Items
                          </span>
                          {category.secondaryImage && category.secondaryImage.length > 0 && (
                            <span className="text-[10px] text-stone-400">+{category.secondaryImage.length} More Images</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Form Section */}
            <div className="xl:col-span-4">
              <div className="sticky top-8">
                <AnimatePresence mode="wait">
                  {isAdding || editingId ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-white border border-stone-200 rounded-3xl p-8 shadow-2xl shadow-stone-200/50"
                    >
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h2 className="text-xl font-serif font-bold">{editingId ? 'Edit Collection' : 'New Collection'}</h2>
                          <p className="text-xs text-stone-400 mt-1">Fill in the details below</p>
                        </div>
                        <button onClick={() => { setIsAdding(false); setEditingId(null) }} className="w-8 h-8 flex items-center justify-center bg-stone-50 rounded-full text-stone-400 hover:text-stone-900 transition-colors">
                          <X size={18} />
                        </button>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Collection Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all placeholder:text-stone-300"
                            placeholder="e.g. Corporate Luxury"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Display Icon</label>
                            <input
                              type="text"
                              value={formData.icon}
                              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                              className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all text-center text-xl"
                              placeholder="🎁"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Item Count</label>
                            <input
                              type="number"
                              value={formData.itemCount}
                              onChange={(e) => setFormData({ ...formData, itemCount: parseInt(e.target.value) })}
                              className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all font-mono"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Description</label>
                          <textarea
                            rows={3}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all resize-none placeholder:text-stone-300 text-sm"
                            placeholder="Describe this collection..."
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Primary Image</label>
                          <div className="space-y-4">
                            <div className="relative group">
                               <input
                                 type="file"
                                 accept="image/*"
                                 onChange={(e) => handleImageUpload(e, true)}
                                 className="hidden"
                                 id="primary-image-upload"
                               />
                               <label 
                                 htmlFor="primary-image-upload"
                                 className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-stone-100 rounded-2xl cursor-pointer hover:border-amber-500 hover:bg-amber-50/50 transition-all group"
                               >
                                 {formData.primaryImage?.url ? (
                                   <div className="relative w-full h-full p-2">
                                     <img src={formData.primaryImage.url} className="w-full h-full object-cover rounded-xl" alt="Preview" />
                                     <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white gap-2 rounded-xl transition-all duration-300">
                                       <Upload size={20} />
                                       <span className="text-[10px] font-bold uppercase tracking-widest">Replace Image</span>
                                     </div>
                                   </div>
                                 ) : (
                                   <div className="flex flex-col items-center py-8">
                                     <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-100 transition-colors">
                                       <Upload className="text-stone-300 group-hover:text-amber-600" size={20} />
                                     </div>
                                     <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400 group-hover:text-amber-600">Click to upload</span>
                                   </div>
                                 )}
                               </label>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Secondary Images</label>
                          <div className="grid grid-cols-4 gap-2 mb-4">
                            {formData.secondaryImage?.map((img, idx) => (
                              <div key={idx} className="relative aspect-square group rounded-lg overflow-hidden border border-stone-100">
                                <img src={img.url} className="w-full h-full object-cover" alt="" />
                                <button 
                                  type="button"
                                  onClick={() => removeSecondaryImage(idx)}
                                  className="absolute inset-0 bg-red-600/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            ))}
                            <label className="aspect-square border-2 border-dashed border-stone-100 rounded-lg flex items-center justify-center cursor-pointer hover:border-amber-500 hover:bg-stone-50 transition-all">
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, false)}
                                className="hidden"
                              />
                              <Plus size={16} className="text-stone-300" />
                            </label>
                          </div>
                        </div>

                        <Button type="submit" className="w-full h-14 rounded-xl mt-4 shadow-lg shadow-amber-600/20 gap-2 font-bold text-xs uppercase tracking-[0.2em]">
                          <Save size={18} /> {editingId ? 'Update Collection' : 'Create Collection'}
                        </Button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-stone-100/50 border-2 border-dashed border-stone-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 rotate-3">
                        <ImageIcon className="text-stone-300" size={32} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-stone-600 mb-3">No Selection</h3>
                      <p className="text-sm text-stone-400 leading-relaxed px-4">Choose a collection to edit or click "New Category" to start fresh.</p>
                      <Button variant="outline" size="sm" onClick={() => setIsAdding(true)} className="mt-8 border-stone-200 text-stone-500 h-10 px-6">
                         Add Collection
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
