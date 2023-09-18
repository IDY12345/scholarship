'use client'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen flex'>
        <div className='bg-primary w-1/2 flex items-center justify-center text-white'>
            <h2 className='text-[30px] absolute mt-1/2 '>Institute Registration</h2>
            <Link href='/Register/Institute' className='mt-[100px] border-4 rounded-xl w-[150px] text-center border-white-600 text-[28px]'>Institute</Link>
        </div>
        <div className='w-1/2 flex justify-center items-center bg-secondary'>
            <h2 className='text-[30px] absolute mt-1/2'>Student Registration</h2>
            <Link href='/Register/Student' className='mt-[100px] border-4 rounded-xl w-[150px] text-center border-white-600 text-[28px]'>Student</Link>
        </div>
    </div>
  )
}

export default page