"use client"
import React, { useEffect } from 'react'
import { CollectionForm } from '../CollectionForm'
import { AppDispatch, RootState } from '@/lib/store'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'next/navigation'
import { fetchCollectionById } from '@/lib/slice/collection/collectionThunk'

const EditCollectionHome = () => {

    const { currentCollection} = useSelector((state: RootState) => state.collection)
    const dispatch = useDispatch<AppDispatch>()
    const params = useParams()
    const id = params?.id as string
   console.log("collection Id",id)
     useEffect(() => {
        if (currentCollection==null) {
            dispatch(fetchCollectionById(id))
        }
    }, [currentCollection, dispatch])

  return (
   <CollectionForm />
  )
}

export default EditCollectionHome