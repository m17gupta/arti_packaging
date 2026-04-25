import { motion, AnimatePresence } from 'motion/react'
import { toast } from 'sonner'
import { X, Upload, Trash2, Plus, Save, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ICollection } from '@/lib/slice/collection/CollectionType'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/lib/store'
import { setAdding } from '@/lib/slice/collection/collectionSlice'
import { createCollection, updateCollection, fetchCollectionById } from '@/lib/slice/collection/collectionThunk'
import { useRouter, useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export function CollectionForm() {
    const { editingId, allCollection , currentCollection } = useSelector((state: RootState) => state.collection)
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const params = useParams()
    const id = params?.id as string

    const [formData, setFormData] = useState<ICollection>({
        name: '',
        description: '',
        icon: '🎁',
        itemCount: 0,
        primaryImage: undefined,
        secondaryImage: []
    })


    useEffect(() => {
        if (currentCollection) {
             const data:ICollection={
        name: currentCollection.name,
        description: currentCollection.description,
        icon: currentCollection.icon,
        itemCount: currentCollection.itemCount,
        primaryImage: currentCollection.primaryImage,
        secondaryImage: currentCollection.secondaryImage
             }
             setFormData(data)
        }
    }, [currentCollection])

    const [primaryFile, setPrimaryFile] = useState<File | null>(null)
    const [secondaryFiles, setSecondaryFiles] = useState<File[]>([])
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loadingStage, setLoadingStage] = useState<'uploading' | 'saving' | null>(null)

    // // Fill form if editing
    // useEffect(() => {
    //     if (editingId) {
    //         const collection = allCollection.find(c => c.id === editingId)
    //         if (collection) {
    //             setFormData({
    //                 ...collection,
    //                 secondaryImage: collection.secondaryImage || []
    //             })
    //         }
    //     }
    // }, [editingId, allCollection])

    const handleCancel = () => {
        dispatch(setAdding(false))
        router.back()
    }

    const uploadImage = async (file: File) => {
        const data = new FormData()
        data.append('file', file)
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: data
        })
        const result = await response.json()
        if (!result.success) throw new Error(result.error || 'Upload failed')
        return result.url
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setLoadingStage('uploading')

        try {
            // Prepare the data for submission
            const submissionData = { ...formData }

            // 1. Upload primary image if a new file was selected
            if (primaryFile) {
                const primaryUrl = await uploadImage(primaryFile)
                submissionData.primaryImage = { url: primaryUrl }
            }

            // 2. Upload secondary images one by one
            // Filter out temporary base64 previews
            const existingSecondaryImages = (submissionData.secondaryImage || []).filter(img => !img.url.startsWith('data:'))
            const uploadedSecondaryImages = []
            
            for (const file of secondaryFiles) {
                const url = await uploadImage(file)
                uploadedSecondaryImages.push({ url })
            }
            
            submissionData.secondaryImage = [...existingSecondaryImages, ...uploadedSecondaryImages]

            // 3. Create or update the collection
            setLoadingStage('saving')
            if (currentCollection?._id) {
                await dispatch(updateCollection({ id: currentCollection?._id, data: submissionData })).unwrap()
            } else {
                await dispatch(createCollection(submissionData)).unwrap()
            }

            dispatch(setAdding(false))
            toast.success(editingId ? 'Collection updated successfully' : 'Collection created successfully')
            router.back()
        } catch (error) {
            console.error('Submit failed:', error)
            toast.error('Failed to save collection. Please try again.')
        } finally {
            setIsSubmitting(false)
            setLoadingStage(null)
        }
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, isPrimary: boolean = true) => {
        const files = e.target.files
        if (files && files.length > 0) {
            if (isPrimary) {
                const file = files[0]
                setPrimaryFile(file)
                const reader = new FileReader()
                reader.onloadend = () => {
                    setFormData(prev => ({ ...prev, primaryImage: { url: reader.result as string } }))
                }
                reader.readAsDataURL(file)
            } else {
                const newFiles = Array.from(files)
                
                // Process all new files to get their base64 previews
                const previews = await Promise.all(newFiles.map(file => {
                    return new Promise<string>((resolve) => {
                        const reader = new FileReader()
                        reader.onloadend = () => resolve(reader.result as string)
                        reader.readAsDataURL(file)
                    })
                }))
                
                setSecondaryFiles(prev => [...prev, ...newFiles])
                setFormData(prev => ({
                    ...prev,
                    secondaryImage: [...(prev.secondaryImage || []), ...previews.map(url => ({ url }))]
                }))
            }
        }
    }

    const removeSecondaryImage = (index: number) => {
        const imageToRemove = formData.secondaryImage?.[index]
        if (!imageToRemove) return

        if (imageToRemove.url.startsWith('data:')) {
             // It's a newly added file. Find its index among base64 images to remove from secondaryFiles.
             const base64ImagesIndices = (formData.secondaryImage || [])
                .map((img, i) => img.url.startsWith('data:') ? i : -1)
                .filter(i => i !== -1)
             
             const fileIndex = base64ImagesIndices.indexOf(index)
             if (fileIndex !== -1) {
                 setSecondaryFiles(prev => prev.filter((_, i) => i !== fileIndex))
             }
        }

        const updatedImages = formData.secondaryImage?.filter((_, i) => i !== index) || []
        setFormData({ ...formData, secondaryImage: updatedImages })
    }

    return (
        <div className="xl:col-span-4">
            <div className="sticky top-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-white border border-stone-200 rounded-3xl shadow-2xl shadow-stone-200/50 flex flex-col max-h-[calc(100vh-120px)] overflow-hidden"
                    >
                        <div className="p-8 pb-4 border-b border-stone-50">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-serif font-bold">{editingId ? 'Edit Collection' : 'New Collection'}</h2>
                                    <p className="text-xs text-stone-400 mt-1">Fill in the details below</p>
                                </div>
                                <button onClick={handleCancel}
                                    className="w-8 h-8 flex items-center justify-center bg-stone-50 rounded-full text-stone-400 hover:text-stone-900 transition-colors">
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 pt-4 custom-scrollbar">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Collection Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name || ''}
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
                                            value={formData.icon || ''}
                                            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                                            className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all text-center text-xl"
                                            placeholder="🎁"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Item Count</label>
                                        <input
                                            type="number"
                                            value={formData.itemCount || 0}
                                            onChange={(e) => setFormData({ ...formData, itemCount: parseInt(e.target.value) || 0 })}
                                            className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all font-mono"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Description</label>
                                    <textarea
                                        rows={3}
                                        value={formData.description || ''}
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
                                                multiple
                                                onChange={(e) => handleImageUpload(e, false)}
                                                className="hidden"
                                            />
                                            <Plus size={16} className="text-stone-300" />
                                        </label>
                                    </div>
                                </div>

                                <Button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full h-14 rounded-xl mt-4 shadow-lg shadow-amber-600/20 gap-2 font-bold text-xs uppercase tracking-[0.2em]"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            {loadingStage === 'uploading' ? 'Uploading Images...' : 'Saving Collection...'}
                                        </>
                                    ) : (
                                        <>
                                            <Save size={18} /> {currentCollection?._id ? 'Update Collection' : 'Create Collection'}
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
