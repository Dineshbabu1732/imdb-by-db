"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search,setSearch] = useState('');
  const router = useRouter();
  function handleSubmit(e){
e.preventDefault();
if(!search) return;
  }
  return (
    <form onClick={handleSubmit} action="" className="flex max-w-6xl mx-auto justify-between items-center px-5">
      <input type="text" placeholder="Search Keywords..." className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
      value={search} onChange={(e)=> setSearch(e.target.value)

      }/>
      <button   className='text-amber-700 disabled:text-gray-400' type="submit" disabled={!search}>
        Search
      </button>
    </form>
  )
}
