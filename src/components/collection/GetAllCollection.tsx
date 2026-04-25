"use client"

import { getAllCollection } from "@/lib/slice/collection/collectionThunk"
import { AppDispatch, RootState } from "@/lib/store"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"


const GetAllCollection = () => {

    const dispatch = useDispatch<AppDispatch>()
    const {allCollection,isFetchedCollection} = useSelector((state: RootState) => state.collection)
  const isApi= useRef<boolean>(false)
    useEffect(() => {
      if(!isApi.current && !isFetchedCollection){
        dispatch(getAllCollection())
        isApi.current=true
      }
    }, [isFetchedCollection])

    
  return (
   null
  )
}

export default GetAllCollection