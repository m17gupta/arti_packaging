import { useState, useEffect } from 'react'

import { productCategories as defaultCategories } from '@/data'
import { ICollection } from '@/lib/slice/collection/CollectionType'

const STORAGE_KEY = 'jain_creation_collections'

export function useCollections() {
  const [collections, setCollections] = useState<ICollection[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Migration: convert old ProductCategory structure if necessary
        const migrated = parsed.map((c: any) => {
          if (c.imageUrl && !c.primaryImage) {
            return {
              ...c,
              primaryImage: { url: c.imageUrl },
              imageUrl: undefined
            }
          }
          return c
        })
        setCollections(migrated)
      } catch (e) {
        console.error('Failed to parse collections from localStorage', e)
        setCollections(defaultCategories)
      }
    } else {
      setCollections(defaultCategories)
    }
    setLoading(false)
  }, [])

  const saveCollections = (newCollections: ICollection[]) => {
    setCollections(newCollections)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCollections))
  }

  const addCollection = (collection: Partial<ICollection>) => {
    const newCollection: ICollection = {
      ...collection,
      _id: Math.random().toString(36).substr(2, 9),
      slug: collection.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    const updated = [...collections, newCollection]
    saveCollections(updated)
  }

  const updateCollection = (id: string, updates: Partial<ICollection>) => {
    const updated = collections.map((c) => 
      c._id === id ? { ...c, ...updates, updatedAt: new Date().toISOString() } : c
    )
    saveCollections(updated)
  }

  const deleteCollection = (id: string) => {
    const updated = collections.filter((c) => c._id !== id)
    saveCollections(updated)
  }

  const resetToDefault = () => {
    saveCollections(defaultCategories)
  }

  return {
    collections,
    loading,
    addCollection,
    updateCollection,
    deleteCollection,
    resetToDefault,
  }
}
