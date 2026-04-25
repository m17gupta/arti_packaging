"use client"

import { useState } from "react"

import { CollectionHeader } from "./CollectionHeader"
import { CollectionScrollableContent } from "./CollectionScrollableContent"
import { CollectionList } from "./CollectionList"
import { CollectionControls } from "./CollectionControls"
import { CollectionForm } from "./CollectionForm"
import { useCollections } from "@/hooks/useCollections"
import { ICollection } from "@/lib/slice/collection/CollectionType"
import GetAllCollection from "./GetAllCollection"

export default function CollectionHome() {
     const { collections, resetToDefault } = useCollections()

      const startEdit = (c: ICollection) => {
        console.log(c, "collection Data")

      }
    return (
      <>
     <GetAllCollection/>
         <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
             <CollectionHeader 
               resetToDefault={resetToDefault}
           
             />
       
             <CollectionScrollableContent>
               <CollectionControls />
       
               <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                 <CollectionList 
          
                 />
       
          
               </div>
             </CollectionScrollableContent>
           </div>
           </>
    )
}