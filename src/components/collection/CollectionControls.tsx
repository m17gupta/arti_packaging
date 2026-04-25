import { Image as ImageIcon, Settings } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CollectionControls() {
  return (
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
  )
}
