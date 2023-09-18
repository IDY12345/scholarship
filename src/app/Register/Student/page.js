'use client'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen bg-primary flex items-center justify-center text-white'>
        <form className='w-4/5 border-white-600 border-4 min-h-screen rounded-2xl mt-[100px]'>
            <h1 className='text-[25px] ml-[50px] mt-[30px] '>Name of the Student:</h1>
            <input placeholder='Name of the Student' className='bg-secondary placeholder:text-black text-[22px] w-1/2 ml-[50px] mt-[15px] rounded-xl text-black'/>
        </form>
    </div>
  )
}

export default page