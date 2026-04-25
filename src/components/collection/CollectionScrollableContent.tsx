interface CollectionScrollableContentProps {
  children: React.ReactNode
}

export function CollectionScrollableContent({ children }: CollectionScrollableContentProps) {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {children}
      </div>
    </div>
  )
}
