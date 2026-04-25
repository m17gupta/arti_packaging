import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setAdding } from '@/lib/slice/collection/collectionSlice'


interface CollectionHeaderProps {
  resetToDefault: () => void
}

export function CollectionHeader({ 
  resetToDefault, 

}: CollectionHeaderProps) {

  const router= useRouter()
  const dispatch= useDispatch()
  return (
    <header className="h-20 bg-white border-b border-stone-200 flex items-center justify-between px-8 shrink-0">
      <div>
        <h2 className="text-2xl font-serif font-medium">Collections Management</h2>
        <p className="text-xs text-stone-400 mt-1">Update and organize your gifting categories</p>
      </div>
      <div className="flex items-center gap-3">
        {/* <Button variant="outline" size="sm" onClick={resetToDefault} className="text-xs h-9">
          Reset Data
        </Button> */}
        <Button size="sm" onClick={() => { 
          dispatch(setAdding(true))
        router.push("/dashboard/collections/add")
        }} className="gap-2 h-9">
          <Plus size={16} /> New Collection
        </Button>
      </div>
    </header>
  )
}
