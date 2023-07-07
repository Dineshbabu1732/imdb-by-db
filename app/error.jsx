'use client'
import { useEffect } from "react"
export default function Error({error,reset}) {
    useEffect(()=>{

    },[error]);
  return (
    <div className="text-center">
        <h1>Something Went Wrong</h1>
        <button className='hover:text-amber-600' onClick={()=> reset()}>Try Again</button>
    </div>
  )
}
