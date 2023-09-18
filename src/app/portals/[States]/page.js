'use client'
import Sidebar from '@/app/components/Sidebar'
import {useParams} from 'next/navigation'

function page() {
    const params=useParams()
  return (
    <div className='min-h-screen flex bg-primary text-white'>
        <Sidebar />
        <h1 className='text-[35px] ml-[25px]'>Welcome to {params.States} Scholarship Portal</h1>
    </div>
  )
}

export default page