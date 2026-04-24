"use client"
import { LayoutDashboard, ShoppingBag, PieChart, Users, Settings, LogOut, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'collections', label: 'Collections', href: '/dashboard/collections', icon: <ShoppingBag size={18} /> },
    { id: 'analytics', label: 'Analytics', href: '/dashboard/analytics', icon: <PieChart size={18} /> },
    { id: 'users', label: 'Users', href: '/dashboard/users', icon: <Users size={18} /> },
    { id: 'settings', label: 'Settings', href: '/dashboard/settings', icon: <Settings size={18} /> },
  ]

  return (
    <div className="flex h-screen bg-[#F8F7F5] text-stone-900 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-200 flex flex-col z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-6 border-b border-stone-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-amber-600/20">
              <span className="font-serif text-xl font-bold">J</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-sm tracking-tight leading-none">Jain Creation</h1>
              <p className="text-[10px] text-stone-400 font-medium uppercase tracking-widest mt-1">Admin Panel</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-amber-50 text-amber-700 shadow-sm' 
                      : 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-stone-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-stone-500 hover:bg-red-50 hover:text-red-600 transition-all">
            <LogOut size={18} />
            Sign Out
          </button>
          <Link href="/" className="mt-4 flex items-center gap-2 text-xs text-stone-400 hover:text-amber-600 transition-colors px-4">
            <ArrowLeft size={12} /> Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {children}
      </main>
    </div>
  )
}
