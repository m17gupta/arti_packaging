"use client"
import { CollectionForm } from "../CollectionForm"


export default function AddCollectionHome() {
 

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header / Action Bar */}
            {/* <div className="bg-white shadow-sm border-b border-gray-200 p-4 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">
                            {isAdding ? 'Add Collection' : editingId ? 'Edit Collection' : 'Collections'}
                        </h1>
                        <p className="text-sm text-gray-500">
                            {isAdding ? 'Create a new collection' : editingId ? 'Update collection details' : 'Manage your collections'}
                        </p>
                    </div>
                    {!isAdding && (
                        <Button
                            onClick={() => setIsAdding(true)}
                            className="flex items-center gap-2"
                        >
                            <Plus size={18} />
                            Add Collection
                        </Button>
                    )}
                </div>
            </div> */}

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
              
                    <CollectionForm/>
              
            </main>
        </div>
    )
}