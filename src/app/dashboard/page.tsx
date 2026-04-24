"use client"
import { motion } from 'motion/react'
import { 
  ShoppingBag, LayoutDashboard, 
  PieChart, Users, ArrowRight
} from 'lucide-react'
import { useCollections } from '@/hooks/useCollections'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'

export default function DashboardOverview() {
  const { collections } = useCollections()
  
  const stats = [
    { label: 'Total Collections', value: collections.length, color: 'bg-amber-500', icon: <ShoppingBag size={20} /> },
    { label: 'Total Items', value: collections.reduce((acc, curr) => acc + (curr.itemCount || 0), 0), color: 'bg-stone-800', icon: <LayoutDashboard size={20} /> },
    { label: 'Active Users', value: '12', color: 'bg-blue-500', icon: <Users size={20} /> },
    { label: 'Growth', value: '+14%', color: 'bg-green-500', icon: <PieChart size={20} /> },
  ]

  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      {/* Header */}
      <header className="h-20 bg-white border-b border-stone-200 flex items-center justify-between px-8 shrink-0">
        <div>
          <h2 className="text-2xl font-serif font-medium">Overview</h2>
          <p className="text-xs text-stone-400 mt-1">Welcome back! Here is what is happening today.</p>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-white`}>
                    {stat.icon}
                  </div>
                </div>
                <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-3xl font-serif mt-1">{stat.value}</h3>
              </motion.div>
            ))}
          </div>

          {/* Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
                <h3 className="text-xl font-serif font-bold mb-6">Recent Activity</h3>
                <div className="space-y-6">
                  {collections.slice(0, 4).map((c, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center text-xl">
                        {c.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Collection "{c.name}" updated</p>
                        <p className="text-xs text-stone-400">2 hours ago</p>
                      </div>
                      <Badge variant="outline" className="text-[9px]">Success</Badge>
                    </div>
                  ))}
                </div>
             </div>

             <div className="bg-amber-600 p-8 rounded-3xl text-white shadow-xl shadow-amber-600/20 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Create Something New</h3>
                  <p className="text-amber-100 text-sm leading-relaxed max-w-xs">
                    Expand your collections and showcase new gifting experiences to your customers.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/dashboard/collections">
                    <Button 
                      className="bg-white text-amber-600 hover:bg-stone-50 border-none px-8 h-12 rounded-xl font-bold uppercase tracking-widest text-[10px] gap-2"
                    >
                      Go to Collections <ArrowRight size={14} />
                    </Button>
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
