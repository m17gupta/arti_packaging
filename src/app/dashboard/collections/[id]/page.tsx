"use client"


import { CollectionForm } from "@/components/collection/CollectionForm"
import EditCollectionHome from "@/components/collection/editCollection/EditCollectionHome"
import { useParams } from "next/navigation"

export default function Page() {
    const params = useParams()
    const id = params.id
    return (
        <div>
            <EditCollectionHome />
        </div>
    )
}