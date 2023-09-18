import React from 'react'
import Sidebar from '../components/Sidebar'

function page() {
  return (
    <div className='bg-primary min-h-screen text-white flex' >
        <Sidebar />
       <p className='text-[35px]'> Welcome to the State Portal </p>
    </div>
  )
}

export default page